import { Networks } from "../../elements/networks/networks";
import { Addresses } from "../../elements/addresses/addresses";
import { Button } from "../../elements/button/button";

import { Link } from "react-router-dom";

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topRow}>
        <div className={styles.column}>
          <Link to="/Registration" className={styles.link}>
            <Button>Пробное занятие</Button>
          </Link>
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
