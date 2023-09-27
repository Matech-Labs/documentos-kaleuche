import React from "react";
import styles from "./FullScreenSpinner.module.scss";
import Spinner from "../Spinner/Spinner";

const FullScreenSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <Spinner />
    </div>
  );
};

export default FullScreenSpinner;
