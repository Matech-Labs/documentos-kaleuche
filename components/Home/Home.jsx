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
  const [tejerinaOpen, setTejerinaOpen] = useState(false);
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
    <div className={styles.bodyContainer}>
      <h1 className={styles.mainTitle}>Documentos Kaleuche</h1>
      <div className={styles.subtitle}>
        <p>
          De está página vas a poder descargar, de primera mano, toda la
          documentación que acredita la titularidad del Fideicomiso Inmobiliario
          Nuevo Kaleuche sobre todos aquellos lotes que integraron la quiebra de
          Juan Claudio Chavanne y hoy se encuentran registrados a nombre de
          Jorge Tejerina, Marcelo Augusto Chavanne, La Vertiente Andina S.A.,
          Santiago Palmieri y Carlos Federico Chavanne. De esta forma vas a
          poder contar con todos los elementos necesarios para analizar tu
          situación.
        </p>
        <p>
          También vas a poder acceder a los informes de dominio de todos esos
          lotes.
        </p>
      </div>
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
            informes.children
              .slice()
              .sort((a, b) => a.id.localeCompare(b.id))
              .map((item) => (
                <div className={styles.subFolders} key={item.id}>
                  {item.id === "Tejerina Jorge" ? (
                    <>
                      <div
                        className={`${styles.subFoldersButton} ${styles.fideicomisoButton}`}
                        onClick={() => setTejerinaOpen(!tejerinaOpen)}
                      >
                        {item.id}
                      </div>
                      {tejerinaOpen &&
                        item.children
                          .slice()
                          .sort((a, b) => a.id.localeCompare(b.id))
                          .map((subItem) => (
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
    </div>
  );
};

export default Home;
