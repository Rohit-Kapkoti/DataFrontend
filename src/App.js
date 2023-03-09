import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import EditDepartment from "./pages/EditDepartment";
import Delete from "./pages/Delete";
import EditStudent from "./pages/EditStudent";
import EditHod from "./pages/EditHod";
import EditTeacher from "./pages/EditTeacher";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/create" element={<Create />}></Route>
        <Route exact path="/read" element={<Read />}></Route>
        <Route exact path="/update" element={<Update />}></Route>
        <Route exact path="/delete" element={<Delete />}></Route>
        <Route exact path="/update/:id" element={<EditDepartment />}></Route>
        <Route
          exact
          path="/update/student/:id"
          element={<EditStudent />}
        ></Route>
        <Route exact path="/update/hod/:id" element={<EditHod />}></Route>
        <Route exact path="/update/teacher/:id" element={<EditTeacher />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
