import React, { FC, useState } from "react";
import classes from "./LeftSideBar.module.css";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const LeftSideBar: FC = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [vector, setVector] = useState(false);
  const [showMenuItem, setShowMenuItem] = useState(false);

  const settingsToggle = () => {
    setShowMenuItem(!showMenuItem);
    setVector(!vector);
  };

  const tables: string = require("../../assets/images/ic_tables.svg").default;
  const vidgets: string = require("../../assets/images/ic_vidgets.svg").default;
  const main: string = require("../../assets/images/ic_main.svg").default;
  const settings: string =
    require("../../assets/images/ic_settings.svg").default;
  const searchAdress: string =
    require("../../assets/images/ic_search_adress.svg").default;
  const settingsProfile: string =
    require("../../assets/images/ic_settings_profile.svg").default;
  const maps: string = require("../../assets/images/ic_maps.svg").default;
  const financeManagment: string =
    require("../../assets/images/ic_finance_managment.svg").default;
  const calendar: string =
    require("../../assets/images/ic_calendar.svg").default;
  const exit: string = require("../../assets/images/ic_exit.svg").default;
  const vector_settings: string =
    require("../../assets/images/ic_vector_settings.svg").default;
  const rectangle: string =
    require("../../assets/images/Rectangle 655.svg").default;

  return (
    <aside className={classes.left_side_content}>
      <span onClick={() => console.log(location.pathname)}>Меню</span>
      <div
        className={classes.left_side_paragraph}
        onClick={() => navigate("/")}
      >
        <img src={main} alt="logo" className={classes.navbar_logo} />
        Главная
        <img
          src={location.pathname === "/" ? rectangle : undefined}
          className={classes.rectangle}
        />
      </div>
      <div
        className={classes.left_side_paragraph}
        onClick={() => navigate("/adress")}
      >
        <img src={searchAdress} alt="logo" className={classes.navbar_logo} />
        Поиск адресов
        <img
          src={location.pathname === "/adress" ? rectangle : undefined}
          className={classes.rectangle}
        />
      </div>
      <div className={classes.left_side_paragraph}>
        <img src={tables} alt="logo" className={classes.navbar_logo} />
        Таблицы
      </div>
      <div className={classes.left_side_paragraph}>
        <img src={calendar} alt="logo" className={classes.navbar_logo} />
        Календарь
      </div>
      <div className={classes.left_side_paragraph}>
        <img src={maps} alt="logo" className={classes.navbar_logo} />
        Карты
      </div>
      <div className={classes.left_side_paragraph}>
        <img src={vidgets} alt="logo" className={classes.navbar_logo} />
        Виджеты
      </div>
      <div className={classes.left_side_paragraph} onClick={settingsToggle}>
        <img src={settings} alt="logo" className={classes.navbar_logo} />
        Настройки
        <img
          src={vector_settings}
          alt="logo"
          className={
            vector ? classes.settings_vector_up : classes.settings_vector_down
          }
        />
      </div>
      <div className={showMenuItem ? undefined : classes.closeMenu}>
        <div className={classes.left_side_paragraph_variables}>
          <img
            src={settingsProfile}
            alt="logo"
            className={classes.navbar_logo}
          />{" "}
          Настройки профиля
        </div>
        <div className={classes.left_side_paragraph_variables}>
          <img
            src={financeManagment}
            alt="logo"
            className={classes.navbar_logo}
          />{" "}
          Управление финансами
        </div>
      </div>
      <div className={classes.left_side_paragraph}>
        <img src={exit} alt="logo" className={classes.navbar_logo} />
        Выход
      </div>
    </aside>
  );
};

export default LeftSideBar;
