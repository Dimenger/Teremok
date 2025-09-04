import { BUTTONS_NAME } from "../../../constants";
import { Button } from "../../../elements/button/button";

import { Link } from "react-router-dom";

import styles from "./control-panel.module.css";

export const ControlPanel = () => {
  return (
    <div className={styles.buttonsContainer}>
      {BUTTONS_NAME.map(({ id, title, path }) => (
        <Button key={id} type="button">
          <Link className={styles.link} to={path}>
            {title}
          </Link>
        </Button>
      ))}
    </div>
  );
};
