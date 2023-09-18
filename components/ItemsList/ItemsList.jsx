import React from "react";
import styles from "./ItemsList.module.scss";
import visualizeIcon from "@assets/images/icons/visualizeIcon.png";

import pdfIcon from "@assets/images/icons/pdfIcon.png";
import { DownloadButton } from "../ui/buttons/DownloadButton/DownloadButton";
import Image from "next/image";

function ItemsList({ files }) {
  return (
    <div className={styles.container}>
      <ul className={styles.fileList}>
        {files.map((file, index) => (
          <li key={index} className={styles.pdfListItem}>
            <div className={styles.fileInfo}>
              <div className={styles.leftFileContainer}>
                <Image src={pdfIcon} alt="pdfIcon" className={styles.icon} />
                <span className={styles.fileName}>{file}</span>
              </div>
              <div className={styles.buttons}>
                <Image
                  src={visualizeIcon}
                  alt="visualize"
                  className={styles.icon}
                  onClick={() => console.log("Visualizar")}
                />
                <DownloadButton />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
