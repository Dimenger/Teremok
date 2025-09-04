import { Networks } from "../../elements/networks/networks";
import { Addresses } from "../../elements/addresses/addresses";

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Networks />
      <Addresses />
    </div>
  );
};
