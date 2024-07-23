import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import CreateUser from "./components/CreateUser";
import MainLaout from "./components/MainLaout";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainLaout Component={<Home />} />} />
        <Route
          path="/createuser"
          element={<MainLaout Component={<CreateUser />} />}
        />
        <Route
          path="/updateuser/:id"
          element={<MainLaout Component={<UpdateUser />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
