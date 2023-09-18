import { google } from "googleapis";
const path = require("path");
const fs = require("fs");

const CLIENT_ID =
  "445048192640-fpd9eiig42ufof1hhtu1i54e5l1qrfmo.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04TOu_PKzfHnSCgYIARAAGAQSNwF-L9IrJxeUwaeuyl_PXPL9ZhaOmr0ELgxYcbXzRv46M7K2cP91VKpoPbgHH57EazuW2BMoiT0";

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

export const getData = async () => {
  const files = await listDriveStructure();

  return files;
};

async function listDriveStructure(folderId = "root") {
  try {
    const folderMap = {};

    const filesList = await drive.files.list({
      q: `'${folderId}' in parents`,
      fields: "files(id, name, mimeType)",
    });
    if (filesList.data.files.length === 0) {
      return folderMap;
    }

    for (const file of filesList.data.files) {
      if (file.mimeType === "application/vnd.google-apps.folder") {
        // Si es una carpeta, llama a la función recursivamente
        folderMap[file.name] = await listDriveStructure(file.id);
      } else {
        // Si es un archivo, agrega al objeto JSON de la carpeta actual
        folderMap[folderId] = folderMap[folderId] || {};
        folderMap[folderId][file.id] = file.name;
      }
    }

    return folderMap;
  } catch (error) {
    // console.log(error.response.data);
    return null; // Manejo de error personalizado
  }
}

export async function generatePublicUrl(id) {
  const fileId = id;
  try {
    const fileInfo = await drive.files.get({
      fileId: fileId,
      fields: "name",
    });

    const fileName = fileInfo.data.name;

    const response = await drive.files.get(
      {
        fileId: fileId,
        alt: "media",
      },
      { responseType: "stream" }
    );

    const downloadPath = path.join(__dirname, fileName);
    const dest = fs.createWriteStream(downloadPath);

    response.data
      .on("end", () => {
        console.log(`Downloaded "${fileName}" to "${downloadPath}"`);
      })
      .on("error", (err) => {
        console.error("Error downloading file:", err);
      })
      .pipe(dest);
  } catch (error) {
    console.log(error.message);
  }
}
