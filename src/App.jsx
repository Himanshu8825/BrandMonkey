import React from "react";
import MyClient from "./Components/Backend/BackPannel/ClientPage/MyClient";
import TotalEmploye from "./Components/Backend/BackPannel/TotalEmp/TotalEmploye";
import { Route, Routes } from "react-router-dom";
import AdminHome from "./Components/Backend/BackPannel/DashBordPage/AdminHome";
import MyEmployee from "./Components/Backend/BackPannel/MyEmployee/MyEmployee";
import AllEmployes from "./Components/Backend/BackPannel/AllEmployes/AllEmploye";
import AllServices from "./Components/Backend/BackPannel/AllServices/AllServices";
import AllClient from "./Components/Backend/BackPannel/AllClient/CreateClient";
import CreateClient from "./Components/Backend/BackPannel/AllClient/CreateClient";
import SubmitClient from "./Components/Backend/BackPannel/SubmitClient/SubmitClient";
import AdminClient from './Components/Backend/BackPannel/AdminClient/AdminClient'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/myclient" element={<MyClient />} />
      <Route path="/myemp" element={<MyEmployee />} />
      <Route path="/totalemp" element={<TotalEmploye />} />
      <Route path="/allemp" element={<AllEmployes />} />
      <Route path="/allserve" element={<AllServices />} />
      <Route path="/allclient" element={<AllClient />} />
      <Route path="/createcli" element={<CreateClient />} />
      <Route path="/submitemp" element={<SubmitClient />} />
      <Route path="/admincli" element={<AdminClient />} />
      
    </Routes>
  );
};

export default App;
