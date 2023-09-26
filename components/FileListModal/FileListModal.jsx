import React, { useState, useEffect } from "react";
import styles from "./FileListModal.module.scss";
import ItemsList from "../ItemsList/ItemsList";
import exitIcon from "@assets/images/icons/exitIcon.png";
import Image from "next/image";
import Spinner from "../ui/Spinner/Spinner";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";
import { DownloadFolder } from "../ui/buttons/DownloadButton/DownloadFolder";

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

  return (
    <div className={styles.container}>
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span>{fileName}</span>
            <Image
              src={exitIcon}
              alt="exitIcon"
              className={styles.closeButton}
              onClick={closeModal}
            />
          </div>
          <div className={styles.modalContent}>
            {isLoading ? (
              <div className={styles.spinnerContainer}>
                <Spinner />
              </div>
            ) : (
              <ItemsList files={files} />
            )}
          </div>
          <div className={styles.downloadAll}>
            <button onClick={handleDownloadClick} className={styles.button}>
              Descargar carpeta
            </button>
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
