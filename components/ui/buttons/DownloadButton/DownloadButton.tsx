"use client";
import { useState } from "react";
import styles from "./DownloadButton.module.scss";

export const DownloadButton = ({ file }) => {
  const { id, name, extension } = file;
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/downloadFile?id=${id}`);

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${name}${extension}`;
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Error en la solicitud:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={styles.button}
    >
      {isLoading ? "Cargando..." : "Descargar"}
    </button>
  );
};
