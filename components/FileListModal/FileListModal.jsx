"use client"

import React from "react";
import styles from "./FileListModal.module.scss";
import ItemsList from "../ItemsList/ItemsList";
import exitIcon from "@assets/images/icons/exitIcon.png";
import { DownloadButton } from "../ui/buttons/DownloadButton/DownloadButton";
import Image from "next/image";

const FileListModal = ({ files, fileName, closeModal }) => {
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
            <p className={styles.downloadText}>Descargar Todo</p>
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileListModal;
