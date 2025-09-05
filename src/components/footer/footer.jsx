import { Networks } from "../../elements/networks/networks";
import { Addresses } from "../../elements/addresses/addresses";
import { Button } from "../../elements/button/button";

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topRow}>
        <div className={styles.column}>
          <Button>Пробное занятие</Button>
        </div>
        <div className={styles.column}>
          <Networks />
        </div>
        <div className={styles.column}>
          <Addresses />
        </div>
      </div>
    </div>
  );
};
