import styles from "./prices.module.css";

export const Prices = () => {
  return (
    <div className={styles.priceListContainer}>
      <h2 className={styles.priceListTitle}>Прайс-лист детского центра</h2>

      <ul className={styles.priceList}>
        <li className={styles.priceItem}>
          <span className={styles.serviceName}>Раннее развитие (1-3 года)</span>
          <span className={styles.price}>1500 ₽ / месяц</span>
        </li>
        <li className={styles.priceItem}>
          <span className={styles.serviceName}>Творческие мастер-классы</span>
          <span className={styles.price}>1200 ₽ / занятие</span>
        </li>
        <li className={styles.priceItem}>
          <span className={styles.serviceName}>Подготовка к школе</span>
          <span className={styles.price}>2000 ₽ / месяц</span>
        </li>
        <li className={styles.priceItem}>
          <span className={styles.serviceName}>Логопедические занятия</span>
          <span className={styles.price}>1800 ₽ / месяц</span>
        </li>
        <li className={styles.priceItem}>
          <span className={styles.serviceName}>Музыкальные занятия</span>
          <span className={styles.price}>1300 ₽ / занятие</span>
        </li>
      </ul>
    </div>
  );
};
