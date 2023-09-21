import { google } from "googleapis";
const path = require("path");
const fs = require("fs");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export const drive = google.drive({
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

    if (!filesList || !filesList?.data || !filesList.data.files) {
      return null; // Manejo de error personalizado
    }

    if (filesList.data.files.length === 0) {
      return folderMap;
    }

    for (const file of filesList.data.files) {
      if (file.mimeType === "application/vnd.google-apps.folder") {
        if (!file || !file.id || !file.name) {
          return null; // Manejo de error personalizado
        }

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
    console.log(error.response.data);
    return null; // Manejo de error personalizado
  }
}
