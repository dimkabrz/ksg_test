import React, { FC, useState } from "react";
import classes from "./AdressSearchPage.module.css";
import axios from "axios";

const AdressSearchPage: FC = () => {
  const [adress, setAdress] = useState("");
  const [adressHandler, setAdressHandler] = useState("");
  const [adressTitle, setAdressTitle] = useState(false);

  interface fetchAdresses {
    suggestions: fetchAdress[];
  }

  interface fetchAdress {
    value: string;
    unrestricted_value: string;
    id: number;
  }

  const [adresses, setAdresses] = useState<fetchAdress[]>([]);

  const token = "c32bb26f0b357e6d26255ef1ce894bad993e8295";

  const searchAdress = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (adress.length <= 3) {
        setAdressHandler("Необходимо ввести более 3 символов");
      } else {
        setAdressHandler("");
        const response = await axios.post<fetchAdresses>(
          "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
          { query: adress },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Token " + token,
            },
          }
        );
        setAdressTitle(true);
        setAdresses(response.data.suggestions);
      }
    } catch {}
  };

  return (
    <div className={classes.search_page_container}>
      <h1 className={classes.search_topic}>Поиск адресов</h1>
      <p className={classes.query_text}>Введите интересующий вас адрес</p>
      <form className={classes.search_form}>
        <input
          className={classes.search_adress_input}
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
        <div className={classes.password_handler}>{adressHandler}</div>
        <button className={classes.search_btn} onClick={searchAdress}>
          Поиск
        </button>
      </form>

      <div
        className={!adressTitle ? classes.closed : classes.adresses_container}
      >
        <div className={classes.adress_topic}>Адреса</div>
        {adresses.map((item) => {
          return (
            <div className={classes.adress_card} key={item.value}>
              {item.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdressSearchPage;
