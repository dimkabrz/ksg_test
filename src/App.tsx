import React from "react";
import "./App.module.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import LeftSideBar from "./components/UI/leftSideBar/LeftSideBar";
import AppRouter from "./components/AppRouter";
import classes from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={classes.mainContainer}>
        <LeftSideBar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
