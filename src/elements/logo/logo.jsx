import logo from "../../assets/logo.png";

import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Логотип" className={styles.logo} />
    </div>
  );
};
