import { DATA_FOR_COMMUNICATION } from "../../constants";
import vk from "../../assets/icons/vk_5968835.png";
import TelegramIcon from "../../assets/icons/telegram.svg";
import styles from "./networks.module.css";

export const Networks = () => {
  return (
    <div className={styles.networksBuuton}>
      <a
        href={DATA_FOR_COMMUNICATION.vk}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ВКонтакте"
      >
        <img src={vk} alt="ВК" className={styles.vkButton} />
      </a>
      <div>
        <img
          src={TelegramIcon}
          alt="Телеграм"
          className={styles.telegrmButton}
        />
      </div>
    </div>
  );
};
