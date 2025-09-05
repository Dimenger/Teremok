import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { MainPage } from "./components/pages/main-page/main-page";
import { About } from "./components/pages/about/about";
import { Contacts } from "./components/pages/contacts/contacts";
import { Areas } from "./components/pages/areas/areas";
import { Schedule } from "./components/pages/schedule/schedule";
import { News } from "./components/pages/news/news";
import { Prices } from "./components/pages/prices/prices";

import styles from "./App.module.css";

export const App = () => {
  return (
    <>
      <div className={styles.app}>
        <Header className={styles.header} />
        <div className={styles.main_content}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/news" element={<News />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <Footer className={styles.footer} />
      </div>
    </>
  );
};
