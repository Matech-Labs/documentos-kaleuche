import { NextApiRequest, NextApiResponse } from "next";
import { drive } from "googleDrive";

const apiHandler = async (
  req: NextApiRequest,
  nextResponse: NextApiResponse
) => {
  try {
    const { id } = req.query;
    const fileId = id as string;

    if (!fileId) {
      throw new Error("Falta el parámetro ID");
    }

    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    const result = await drive.files.get({
      fileId: fileId,
      fields: "webViewLink",
    });
    const webViewLink = result.data.webViewLink;

    nextResponse.status(200).json({ webViewLink });
  } catch (error) {
    console.error(error.message);
    nextResponse.status(500).json({ error: error.message });
  }
};

export default apiHandler;
