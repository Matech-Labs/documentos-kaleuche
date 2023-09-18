"use client"

import React, { useState } from "react";
import styles from "./Home.module.scss";
import FileListModal from "../FileListModal/FileListModal";
import jsonData from "@data/data.json"; // Importa el archivo JSON
import useCloseOnEsc from "@hooks/useCloseOnEsc";

const Home = ({data}) => {
  const [selectedAntecedentes, setSelectedAntecedentes] = useState(null);
  const [selectedInformes, setSelectedInformes] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useCloseOnEsc(closeModal);

  const handleCategoryClick = (category) => {
    if (category === "Antecedentes") {
      setSelectedAntecedentes((prevState) =>
        prevState === category ? null : category
      );
    } else if (category === "Informes de Dominio") {
      setSelectedInformes((prevState) =>
        prevState === category ? null : category
      );
    }
  };

  const handleSubFolderClick = (subFolder) => {
    setSelectedFiles(subFolder.files);
    setSelectedFileName(subFolder.name);
    openModal();
  };

  const antecedentes = jsonData[0];
  const informes = jsonData[1];

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftContent}>
        <div
          className={`${styles.button} ${styles.categoryTitle}`}
          onClick={() => handleCategoryClick("Antecedentes")}
        >
          {antecedentes.name}
        </div>
        {selectedAntecedentes === "Antecedentes" && (
          <div className={styles.subFolders}>
            {antecedentes.folders.map((subFolder) => (
              <div
                key={subFolder.name}
                className={styles.subFoldersButton}
                onClick={() => handleSubFolderClick(subFolder)}
              >
                {subFolder.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.rightContent}>
        <div
          className={`${styles.button} ${styles.categoryTitle}`}
          onClick={() => handleCategoryClick("Informes de Dominio")}
        >
          {informes.name}
        </div>
        {selectedInformes === "Informes de Dominio" && (
          <div className={styles.subFolders}>
            {informes.folders.map((subFolder) => (
              <div
                key={subFolder.name}
                className={styles.subFoldersButton}
                onClick={() => handleSubFolderClick(subFolder)}
              >
                {subFolder.name}
              </div>
            ))}
          </div>
        )}
      </div>
      {modalOpen && (
        <FileListModal
          files={selectedFiles}
          fileName={selectedFileName}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Home;
