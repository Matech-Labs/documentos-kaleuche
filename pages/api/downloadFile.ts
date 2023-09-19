// Importa las dependencias necesariasconst fs = require("fs");
const fs = require("fs");
import { NextApiRequest, NextApiResponse } from "next";
import { drive } from "googleDrive";

const handler = async (req: NextApiRequest, nextResponse: NextApiResponse) => {
  try {
    const { id } = req.query;
    const fileId = id as string;

    if (!fileId) {
      throw new Error("Falta el parámetro ID");
    }

    const fileInfo = await drive.files.get({
      fileId,
      fields: "name",
    });

    const fileName = fileInfo.data.name;

    const driveResponse = await drive.files.get(
      {
        fileId,
        alt: "media",
      },
      { responseType: "stream" }
    );

    nextResponse.setHeader(
      "Content-Disposition",
      `attachment; filename="${fileName}"`
    );
    nextResponse.setHeader(
      "Content-Type",
      driveResponse.headers["content-type"]
    );

    driveResponse.data
      .on("end", () => {
        console.log(`Descargado "${fileName}"`);
      })
      .on("error", (err) => {
        console.error("Error al descargar el archivo:", err);
      })
      .pipe(nextResponse);
  } catch (error) {
    console.error("Error:", error);
    return nextResponse
      .status(500)
      .json({ error: "Error interno del servidor" });
  }
};

export default handler;
