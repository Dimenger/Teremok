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
import { Old13 } from "./components/pages/old13/old13";
import { Old35 } from "./components/pages/old35/old35";
import { Old57 } from "./components/pages/old57/old57";
import { Registration } from "./components/pages/registration/registration";

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
            <Route path="/Old13" element={<Old13 />} />
            <Route path="/Old35" element={<Old35 />} />
            <Route path="/Old57" element={<Old57 />} />
            <Route path="/Registration" element={<Registration />} />
          </Routes>
        </div>
        <Footer className={styles.footer} />
      </div>
    </>
  );
};
