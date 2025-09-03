import { BUTTONS_NAME } from "../../constants";
import { DATA_FOR_COMMUNICATION } from "../../constants";
import { Button } from "../button/button";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      {/* Три колонки: телефоны, логотип, адреса */}
      <div className={styles.topRow}>
        <div className={styles.column}>
          {/* Телефоны */}

          {DATA_FOR_COMMUNICATION.phones.map(({ phone }) => (
            <div key={phone}>
              Телефон: {phone} <br />
            </div>
          ))}

          <div>
            <a
              href={DATA_FOR_COMMUNICATION.vk}
              target="_blank"
              rel="noopener noreferrer"
            >
              ВКонтакте
            </a>
          </div>
        </div>
        {/* Логотип */}
        <div className={styles.logoContainer}>
          <img src={logo} alt="Логотип" className={styles.logo} />
        </div>
        {/* Адреса */}
        <div className={styles.column}>
          {DATA_FOR_COMMUNICATION.addresses.map((address, index) => (
            <div key={index}>{address}</div>
          ))}
        </div>
      </div>
      {/* Кнопки снизу */}
      <div className={styles.buttonsContainer}>
        {BUTTONS_NAME.map(({ id, title, path }) => (
          <Button key={id} type="button">
            <Link className={styles.link} to={path}>
              {title}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
