import downloadIcon from "@assets/images/icons/downloadIcon.png";
import styles from "./DownloadButton.module.scss";
import Image from "next/image";

export const DownloadButton = () => {
  const handleClick = () => () => {
    console.log("Descargar");
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
