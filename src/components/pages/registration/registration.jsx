import { DATA_FOR_COMMUNICATION } from "../../../constants";

import styles from "./registration.module.css";

export const Registration = () => {
  return (
    <>
      <form className={styles.form}>
        <h2 className={styles.title}>Регистрация на пробное занятие</h2>

        <label className={styles.label}>
          Имя:
          <input type="text" placeholder="Ваше имя" className={styles.input} />
        </label>

        <label className={styles.label}>
          Телефон:
          <input
            type="tel"
            placeholder="+7XXXXXXXXXX"
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Email:
          <input
            type="email"
            placeholder="example@mail.com"
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Филиал:
          <select className={styles.select} defaultValue="">
            <option value="" disabled>
              Выберите филиал
            </option>
            {DATA_FOR_COMMUNICATION.addresses.map((address, idx) => (
              <option key={idx} value={address}>
                {address}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.label}>
          Класс:
          <select className={styles.select} defaultValue="">
            <option value="" disabled>
              Направление
            </option>
            <option value="1-3">1-3 лет</option>
            <option value="4-6">3-5 лет</option>
            <option value="7-9">5-7 лет</option>
          </select>
        </label>

        <button type="submit" className={styles.button}>
          Зарегистрироваться
        </button>
      </form>

      <div className={styles.contacts}>
        <h3>Контакты центра развития</h3>
        <p>
          Телефоны:
          {DATA_FOR_COMMUNICATION.phones.map(({ phone }, idx) => (
            <span key={idx} className={styles.phone}>
              {" "}
              <a href={`tel:${phone}`}>{phone}</a>
              {idx < DATA_FOR_COMMUNICATION.phones.length - 1 ? "," : ""}
            </span>
          ))}
        </p>
        <p>
          ВКонтакте:{" "}
          <a
            href={DATA_FOR_COMMUNICATION.vk}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.vkLink}
          >
            {DATA_FOR_COMMUNICATION.vk}
          </a>
        </p>
      </div>
    </>
  );
};
