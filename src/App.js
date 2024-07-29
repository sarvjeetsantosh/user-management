import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import CreateUser from "./components/pages/CreateUser";
import MainLaout from "./components/MainLaout";
import UpdateUser from "./components/pages/UpdateUser";
import Login from "./components/pages/LogInRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainLaout Component={<Home />} />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route
          path="/updateuser/:id"
          element={<MainLaout Component={<UpdateUser />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
