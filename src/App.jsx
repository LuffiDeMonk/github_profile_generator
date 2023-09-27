import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/:user" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
