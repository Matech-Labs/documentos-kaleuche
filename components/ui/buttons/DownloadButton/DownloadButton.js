import downloadIcon from "@assets/images/icons/downloadIcon.png";
import styles from "./DownloadButton.module.scss";
import Image from "next/image";
// import { getDownloadFiles } from "../googleDrive";

export const DownloadButton = (id) => {
  // const data = await getDownloadFiles(id);

  const handleClick = () => () => {
    console.log("Descargar:", { id });

    // downloadFile(id).then((fileContent) => {
    //   if (fileContent) {
    //     // Hacer algo con el contenido del archivo descargado
    //     console.log("Contenido del archivo:", fileContent);
    //   }
    // });
  };

  return (
    <Image
      src={downloadIcon}
      alt="download"
      className={styles.icon}
      onClick={handleClick()}
    />
  );
};
