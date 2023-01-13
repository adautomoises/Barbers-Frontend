import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Business } from "./pages/Business";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { AuthLayout } from "./layouts/AuthLayout";

const Router = () => {
  return (
    <Routes>
      {/* Rotas padrões com Header e Footer */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Route>
      {/* Rotas de Autenticação */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="/cadastrarmeunegocio" element={<Business />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/entrar" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
