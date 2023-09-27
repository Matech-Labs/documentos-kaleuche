import React from "react";
import styles from "./InfoModal.module.scss";
import Image from "next/image";
import exitIcon from "@assets/images/icons/exitIcon.png";

const InfoModal = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modalOverlay} onClick={closeModal}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <div>Información</div>
            <Image
              src={exitIcon}
              alt="exitIcon"
              className={styles.closeButton}
              onClick={closeModal}
            />
          </div>
          <div className={styles.modalContent}>
            <p>
              Para poder entender los antecedentes del lote, tenemos que hacer
              un poco de historia.
            </p>
            <p>El loteo se generó en los años 70.</p>
            <p>
              En ese momento la tierra fue comprada por Jorge Tejerina, Marcelo
              Augusto Chavanne, Carlos Federico Chavanne, Santiago Palmieri y La
              Vertiente Andina S.A. Aquí vas a poder descargar esas escrituras.
            </p>
            <p>
              Al final de este texto vas a poder identificar los antecedentes
              por manzana y saber quien es el que figuraba como dueño de cada
              lote y cúal es la escritura que tenés que bajar.
            </p>
            <p>
              Más allá quien figure como dueño, tenés que saber que existe una
              resolución judicial que dice que todos estos lotes no son de las
              personas que figuran en las escrituras, sino de la quiebra de Juan
              Claudio Chavanne. Esa resolución se tomó por el Juzgado Comercial
              (sentencia primera instancia) y fue confirmada por la Cámara de
              Apelaciones (Sentencia de segunda instancia). Las dos las podes
              bajar a continuación.
            </p>
            <p>
              Juan Claudio Chavanne, verdadero titular de los lotes estuvo en
              quiebra hasta principios del año 2023, fecha en la que se levantó
              su quiebra. Aquí podrás bajarte esa sentencia.
            </p>
            <p>
              Por último, en junio de 2023, con la quiebra ya levantada, Juan
              Claudio Chavanne cedió al Fideicomiso Inmobiliario Nuevo Kaleuche
              los derechos que le correspondían sobre todos estos lotes. Aquí
              poder bajarte esa cesión.
            </p>
            <p>Para simplifcarte la búsqueda de la escritura, te contamos:</p>
            <p>
              a) Si estás en
              <b> manzanas 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 o 13</b>, los
              lotes fueron originalmente comprados por <b> Jorge Tejerina</b>,
              por <b> escritura 156</b>.
            </p>
            <p>
              En este caso tenés que tener en cuenta que Tejerina compró una
              sola fracción y luego la dividió por plano 2312-0071/76
            </p>
            <p>
              b) Si estás en
              <b>
                {" "}
                manzanas 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
                28 y 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
                44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 o
                60
              </b>
              , los lotes fueron comprados originalmente por{" "}
              <b>Jorge Tejerina</b>, por escritura <b>378</b>.
            </p>
            <p>
              En este caso, tenés que tener en cuenta que Tejerina compró tres
              lotes B1, B2 y B4, que luego dividió por planos 2312-0104/76,
              2312-0123/76 y 2312-0082/76.
            </p>
            <p>
              c) Si estás en{" "}
              <b>manzanas 61, 62, 63, 64, 65, 66, 67, 68, 69 o 70</b>, entonces
              los lotes fueron comprados originalmente por{" "}
              <b>La Vertiente Andina S.A.</b>, por <b>escritura 379</b>.
            </p>
            <p>
              En este caso, tenés que tener en cuenta que La Vertiente Andina
              compró un solo lote y luego lo dividió por plano 2312-0156/76
            </p>
            <p>
              d) Si estás en las{" "}
              <b>
                Manzanas 99; 100, 101; 102, 103; 104; 105; 106, 107; 108; 109;
                110; 111, 112, 117; 118; 119
              </b>
              , los lotes fueron originalmente comprados por{" "}
              <b>Marcelo Augusto Chavanne</b>, por <b>escrituras 955 y 655</b>.
            </p>
            <p>
              e) Si estás en{" "}
              <b>
                manzana 112 (lotes 14 al 27) 113 (lotes 1 al 16) 114 (lotes 1 al
                9 y 11 al 25), 115 (lotes 1 al 17)
              </b>
              , los lotes fueron originalmente comprados por{" "}
              <b>Santiago Palmieri</b>, por <b>escrituras 1001 y 719</b>
            </p>
            <p>
              f) Si estás en la <b>Manzana 133</b>, los lotes fueron
              originalmente comprados por <b>Carlos Federico Chavanne</b>, por
              <b>escritura 868</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
