import { AREAS_LIST } from "../../../constants";

import styles from "./areas.module.css";

export const Areas = () => {
  return (
    <div className={styles.areasContainer}>
      {AREAS_LIST.map(({ id, title }) => (
        <div key={id}> {title}</div>
      ))}
    </div>
  );
};
