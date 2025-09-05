import styles from "./news.module.css";

export const News = () => {
  return (
    <section className={styles.newsContainer}>
      <p className={styles.newsText}>
        Приглашаем на бесплатное пробное занятие в наш новый филиал по адресу:{" "}
        <br />
        <strong>ул. Ленинская, 166.</strong> <br />
        Информация по тел.{" "}
        <a href="tel:+89063428070" className={styles.phone}>
          8 906 342 80 70
        </a>
      </p>
    </section>
  );
};
