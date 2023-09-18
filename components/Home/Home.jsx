"use client"

import React, { useState } from "react";
import styles from "./Home.module.scss";
import FileListModal from "../FileListModal/FileListModal";
import useCloseOnEsc from "@hooks/useCloseOnEsc";

const Home = ({ data }) => {
  const jsonData = data.children[0].children;
  const informes = jsonData[0];
  const antecedentes = jsonData[1];

  console.log(antecedentes)

  const [informesOpen, setInformesOpen] = useState(false);
  const [antecedentesOpen, setAntecedentesOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (item) => {
    setSelectedFiles(item.children[0].children);
    setSelectedFileName(item.id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useCloseOnEsc(closeModal);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftContent}>
        <div className={styles.button} onClick={() => setInformesOpen(!informesOpen)}>
          {informes.id}
        </div>
        {informesOpen &&
          informes.children.map((item) => (
            <div
              key={item.id}
              className={styles.subFoldersButton}
              onClick={() => handleOpenModal(item)}
            >
              {item.id}
            </div>
          ))}
      </div>

      <div className={styles.rightContent}>
        <div className={styles.button} onClick={() => setAntecedentesOpen(!antecedentesOpen)}>
          {antecedentes.id}
        </div>
        {antecedentesOpen &&
          antecedentes.children.map((item) => (
            <div
              key={item.id}
              className={styles.subFoldersButton}
              onClick={() => handleOpenModal(item)}
            >
              {item.id}
            </div>
          ))}
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
