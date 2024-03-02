import React from "react";
import MyClient from "./Components/Backend/BackPannel/ClientPage/MyClient";
import TotalEmploye from "./Components/Backend/BackPannel/TotalEmp/TotalEmploye";
import { Route, Routes } from "react-router-dom";
import AdminHome from "./Components/Backend/BackPannel/DashBordPage/AdminHome";
import MyEmployee from "./Components/Backend/BackPannel/MyEmployee/MyEmployee";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/myclient" element={<MyClient />} />
      <Route path="/myemp" element={<MyEmployee />} />
      <Route path="/allemp" element={<TotalEmploye />} />
    </Routes>
  );
};

export default App;
