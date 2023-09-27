const fs = require("fs");
import { NextApiRequest, NextApiResponse } from "next";
import { drive } from "googleDrive";

const handler = async (req: NextApiRequest, nextResponse: NextApiResponse) => {
  // try {
  //   const { id } = req.query;
  //   const folderId = id as string;
  //   if (!folderId) {
  //     throw new Error("Falta el parámetro ID");
  //   }
  //   const fileInfo = await drive.files.get({
  //     fileId: folderId,
  //     fields: "name",
  //   });
  //   const fileName = fileInfo.data.name;
  //   // Exports a Google Workspace document to the requested MIME type and returns exported byte content.
  //   // Note that the exported content is limited to 10MB.
  //   const driveResponse = await drive.files.export({
  //     fileId: folderId,
  //     mimeType: "application/zip",
  //   });
  //   const zipFilename = `${fileName}.zip`;
  //   fs.writeFileSync(zipFilename, driveResponse.data);
  //   console.log("driveResponse", driveResponse);
  //   // nextResponse.setHeader(
  //   //   "Content-Disposition",
  //   //   `attachment; filename="${fileName}.zip"`
  //   // );
  //   // const blob = new Blob([jsonData], {
  //   //   type: folder.data.mimeType ?? "application/vnd.google-apps.folder",
  //   // });
  //   // nextResponse.send(blob);
  // } catch (error) {
  //   console.error("Error:", error);
  //   return nextResponse
  //     .status(500)
  //     .json({ error: "Error interno del servidor" });
  // }
};

export default handler;

// function downloadFolder(folderId, outputPath) {
//   drive.files.export(
//     { fileId: folderId, mimeType: "application/zip" },
//     { responseType: "stream" },
//     (err, res) => {
//       if (err) return console.error("Error al exportar la carpeta:", err);
//       res.data
//         .on("end", () => console.log("Descarga completa."))
//         .on("error", (err) => console.error("Error durante la descarga:", err))
//         .pipe(fs.createWriteStream(outputPath));
//     }
//   );
// }
