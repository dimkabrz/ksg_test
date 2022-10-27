import React, { FC } from "react";
import classes from "./Navbar.module.css";

const Navbar: FC = () => {
  const logo: string = require("../../assets/images/Vector.svg").default;
  const userLogo: string = require("../../assets/images/ic_person.svg").default;
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_left_container}>
        <img src={logo} alt="logo" className={classes.navbar_logo} />
        <span className="navbar_text">Wrench CRM</span>
      </div>
      <div className={classes.navbar_right_container}>
        <img src={userLogo} alt="logo" className={classes.navbar_userlogo} />
        <span className={classes.navbar_name}>Имя Фамилия</span>
      </div>
    </div>
  );
};

export default Navbar;
