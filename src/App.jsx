import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { MainPage } from "./components/pages/main-page/main-page";
import { About } from "./components/pages/about/about";
import "./App.css";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MainPage />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <About />
            </div>
          }
        />
        <Route path="/schedule" element={<div>Расписание</div>} />
        <Route path="/areas" element={<div>Направления</div>} />
        <Route path="/news" element={<div>Новости</div>} />
        <Route path="/prices" element={<div>Цены</div>} />
        <Route path="/contacts" element={<div>Контакты</div>} />
      </Routes>
      <Footer />
    </>
  );
};
