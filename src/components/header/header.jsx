import { ControlPanel } from "./control-panel/control-panel";
import { Phones } from "../../elements/phones/phones";
import { Logo } from "../../elements/logo/logo";
import { Networks } from "../../elements/networks/networks";
import { Addresses } from "../../elements/addresses/addresses";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.topRow}>
        <div className={styles.column}>
          <Logo />
        </div>
        <div className={styles.column}>
          <Phones /> <Networks />
        </div>
        <div className={styles.column}>
          <Addresses />
        </div>
      </div>
      <div className={styles.controlPanelRow}>
        <ControlPanel />
      </div>
    </header>
  );
};
