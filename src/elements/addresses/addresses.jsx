import { DATA_FOR_COMMUNICATION } from "../../constants";
import styles from "./addresses.module.css";

export const Addresses = () => {
  return (
    <div className={styles.addresses}>
      {DATA_FOR_COMMUNICATION.addresses.map((address, index) => (
        <div key={index}>{address}</div>
      ))}
    </div>
  );
};
