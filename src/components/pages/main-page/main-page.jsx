import { Link } from "react-router-dom";
import old13 from "../../../assets/old13.png";
import old35 from "../../../assets/old35.png";
import old57 from "../../../assets/old57.png";
import styles from "./main-page.module.css";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <Link to="/Old13">
          <img className={styles.image} src={old13} alt="old13" />
        </Link>
        <p className={styles.text}>
          Группа раннего развития для ребят от 1 года до 3 лет
        </p>
      </div>
      <div className={styles.group}>
        <Link to="/Old35">
          <img className={styles.image} src={old35} alt="old35" />
        </Link>
        <p className={styles.text}>
          Группа интенсивного интеллектуального развития для ребят от 3 до 5 лет
        </p>
      </div>
      <div className={styles.group}>
        <Link to="/Old57">
          <img className={styles.image} src={old57} alt="old57" />
        </Link>
        <p className={styles.text}>
          Группа подготовка к школе для ребят от 5 до 7 лет
        </p>
      </div>
    </div>
  );
};
