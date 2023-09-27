"use client";

import React, { useState } from "react";
import styles from "./Home.module.scss";
import FileListModal from "../FileListModal/FileListModal";
import InfoModal from "../InfoModal/InfoModal";
import useCloseOnEsc from "@hooks/useCloseOnEsc";
import Image from "next/image";
import infoIcon from "@assets/images/icons/infoIcon.png";

const Home = ({ data }) => {
  const jsonData = data.children[0].children;
  const informes = jsonData[0];
  const antecedentes = jsonData[1];

  const [informesOpen, setInformesOpen] = useState(false);
  const [antecedentesOpen, setAntecedentesOpen] = useState(false);
  const [fideicomisoOpen, setFideicomisoOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [folderId, setFolderId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  const handleOpenModal = (item) => {
    setFolderId(item.children[0].id);
    setSelectedFiles(item.children[0].children);
    setSelectedFileName(item.id);
    setModalOpen(true);
  };

  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setInfoModal(false);
  };

  useCloseOnEsc(closeModal);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftContent}>
        <div
          className={styles.button}
          onClick={() => setAntecedentesOpen(!antecedentesOpen)}
        >
          {antecedentes.id}
        </div>
        {antecedentesOpen && (
          <>
            <div className={styles.infoButton} onClick={handleOpenInfoModal}>
              <span>Información útil para la búsqueda</span>
              <Image
                src={infoIcon}
                alt="infoIcon"
                className={styles.infoIcon}
              />
            </div>
            {antecedentes.children
              .slice()
              .sort((a, b) => b.id.localeCompare(a.id))
              .map((item) => (
                <div className={styles.subFolders} key={item.id}>
                  {item.id === "El fideicomiso" ? (
                    <>
                      <div
                        className={`${styles.subFoldersButton} ${styles.fideicomisoButton}`}
                        onClick={() => setFideicomisoOpen(!fideicomisoOpen)}
                      >
                        {item.id}
                      </div>
                      {fideicomisoOpen &&
                        item.children.map((subItem) => (
                          <div
                            key={subItem.id}
                            className={styles.subItemFoldersButton}
                            onClick={() => handleOpenModal(subItem)}
                          >
                            {subItem.id}
                          </div>
                        ))}
                    </>
                  ) : (
                    <div
                      className={styles.subFoldersButton}
                      onClick={() => {
                        handleOpenModal(item);
                      }}
                    >
                      {item.id}
                    </div>
                  )}
                </div>
              ))}
          </>
        )}
      </div>

      <div className={styles.rightContent}>
        <div
          className={styles.button}
          onClick={() => setInformesOpen(!informesOpen)}
        >
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
      {infoModal && <InfoModal closeModal={closeModal} />}
      {modalOpen && (
        <FileListModal
          folderId={folderId}
          files={selectedFiles}
          fileName={selectedFileName}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Home;
