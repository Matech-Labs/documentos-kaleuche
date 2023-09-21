"use client";
import { useState } from "react";

export const DownloadFolder = ({ file }) => {
  const { id, name, extension } = file;
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/generateFolderLink?id=${id}`);

      if (response.ok) {
        
      } else {
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleClick} disabled={isLoading}>
      {"Descargar Carpeta"}
    </button>
  );
};
