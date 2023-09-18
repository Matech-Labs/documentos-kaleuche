// Importa las dependencias necesariasconst fs = require("fs");
const fs = require("fs");
import { generatePublicUrl } from "googleDrive";
import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const filePath = await generatePublicUrl(id);

    res.setHeader("Content-Disposition", `attachment; filename="${filePath}"`);
    res.setHeader("Content-Type", "application/octet-stream");

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

    // if (!id) {
    //   return res.status(400).json({ error: "Falta el parámetro ID" });
    // }

    // return res
    //   .status(200)
    //   .json({ mensaje: "URL pública generada exitosamente" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default handler;
