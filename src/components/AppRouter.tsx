import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AdressSearchPage from "./pages/adressSearchPage/AdressSearchPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/adress" element={<AdressSearchPage />} />
    </Routes>
  );
};

export default AppRouter;
