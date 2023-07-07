import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import RenderPage from "./RenderPage";
import WelcomePage from "./components/WelcomePage";

const App = () => {
  return (
    <>
      <WelcomePage />
      <Routes>
        <Route path="/RenderPage" element={<RenderPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
