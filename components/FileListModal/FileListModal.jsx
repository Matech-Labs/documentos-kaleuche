import React, { useState, useEffect } from "react";
import styles from "./FileListModal.module.scss";
import ItemsList from "../ItemsList/ItemsList";
import exitIcon from "@assets/images/icons/exitIcon.png";
import Image from "next/image";
import Spinner from "../ui/Spinner/Spinner";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";

const FileListModal = ({ folderId, files, fileName, closeModal }) => {
  const [googleLink, setGoogleLink] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/generateFolderLink?id=${folderId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGoogleLink(data.webViewLink);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener el enlace:", error);
      });
  }, [folderId]);

  const handleDownloadClick = () => {
    setShowConfirmationModal(true);
  };

  const handleConfirmation = () => {
    setShowConfirmationModal(false);
    // Redirige a la nueva página después de la confirmación
    window.open(googleLink, "_blank");
  };

  const handleCancelConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.container}>
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <div>{fileName}</div>
            <Image
              src={exitIcon}
              alt="exitIcon"
              className={styles.closeButton}
              onClick={closeModal}
            />
          </div>
          <div className={styles.modalContent}>
            <ItemsList files={files} />
          </div>
          <div className={styles.downloadAll}>
            <div onClick={handleDownloadClick}>
              <button>Descargar Carpeta</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal de confirmación */}
      {showConfirmationModal && (
        <ConfirmationModal
          handleConfirmation={handleConfirmation}
          handleCancel={handleCancelConfirmationModal}
        />
      )}
    </div>
  );
};

export default FileListModal;
