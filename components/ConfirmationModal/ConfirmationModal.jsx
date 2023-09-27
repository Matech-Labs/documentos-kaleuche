import React from "react";
import styles from "./ConfirmationModal.module.scss";

export const ConfirmationModal = ({ handleConfirmation, handleCancel }) => {
  return (
    <div className={styles.confirmationModal}>
      <div className={styles.confirmationModalContent}>
        <p>Usted esta por ser redirigido a Google Drive.</p>
        <p>¿Desea Continuar?</p>
        <div className={styles.buttonsContainer}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            Cancelar
          </button>
          <button className={styles.driveButton} onClick={handleConfirmation}>
            Ir a Drive
          </button>
        </div>
      </div>
    </div>
  );
};
