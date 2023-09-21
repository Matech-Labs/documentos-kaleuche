import React from "react";
import styles from "./ConfirmationModal.module.scss";

export const ConfirmationModal = ({ handleConfirmation, handleCancel }) => {
  return (
    <div className={styles.confirmationModal}>
      <div className={styles.confirmationModalContent}>
        <p>Usted esta por ser redirigido a Google Drive.</p>
        <p>¿Desea Continuar?</p>
        <button onClick={handleConfirmation}>OK</button>
        <button onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  );
};
