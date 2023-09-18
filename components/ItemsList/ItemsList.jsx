import React from "react";
import styles from "./ItemsList.module.scss";
import pdfIcon from "@assets/images/icons/pdfIcon4.png";
import docsIcon from "@assets/images/icons/docsIcon2.png";
import { DownloadButton } from "../ui/buttons/DownloadButton/DownloadButton";
import Image from "next/image";

function ItemsList({ files }) {
  const filteredFiles = files.filter((file) => file.extension !== ".DS_Store");

  return (
    <div className={styles.container}>
      <ul className={styles.fileList}>
        {filteredFiles.map((file, index) => (
          <li key={index} className={styles.pdfListItem}>
            <div className={styles.fileInfo}>
              <div className={styles.leftFileContainer}>
                <Image src={file.extension === '.pdf' ? pdfIcon : docsIcon} alt="icon" className={styles.icon} />
                <span className={styles.fileName}>{file.name}</span>
              </div>
              <div className={styles.buttons}>
                <DownloadButton id={file.id}/>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
