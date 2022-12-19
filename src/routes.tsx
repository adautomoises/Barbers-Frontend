import { Routes, BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Example } from "./pages/Example";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
