import { Routes, BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Example } from "./pages/Example";
import { Register } from "./pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
