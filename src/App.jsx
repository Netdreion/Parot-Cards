import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import RenderPage from "./RenderPage";
import WelcomePage from "./components/WelcomePage";
import { HomeNavButton } from "./navigations/navButton1";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/RenderPage" element={<RenderPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
