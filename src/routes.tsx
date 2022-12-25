import { Routes, BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Example } from "./pages/Example";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/entrar" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
