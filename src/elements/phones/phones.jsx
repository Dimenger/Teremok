import { DATA_FOR_COMMUNICATION } from "../../constants";
import styles from "./phones.module.css";

export const Phones = () => {
  return (
    <div className={styles.phones}>
      {" "}
      {DATA_FOR_COMMUNICATION.phones.map(({ phone }) => (
        <div key={phone}>
          Телефон: {phone} <br />
        </div>
      ))}
    </div>
  );
};
