import React from "react";
import styles from "../css/footer.module.css";
import Label from "./labels/Label_title";
function Footer() {
  return (
    <div className={styles.main}>
      <Label
        className={styles.label}
        title="Credentials: CompetentHeisenberg"
      ></Label>
      <Label className={styles.label} title="©All Rights Reserved ;)"></Label>
    </div>
  );
}

export default Footer;
