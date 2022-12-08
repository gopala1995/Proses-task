import { NavBar } from "./Components/NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllUsers } from "./Components/AllUsers";
import { AddUsers } from "./Components/AddUsers";
import { EditUser } from "./Components/EditeUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="" element={<AllUsers />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
