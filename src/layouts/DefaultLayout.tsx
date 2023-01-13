import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function DefaultLayout() {
  const [_, setUser] = useState("");
  const [actions, setActions] = useState("Login");

  useEffect(() => {
    const userId = localStorage.getItem("@barbers:user-id-1.0.0");
    if (userId) {
      setUser(userId);
      setActions("Auth");
    } else {
      setActions("Login");
    }
  }, []);

  return (
    <div>
      <Header Items={[]} Actions={actions} />
      <Outlet />
      <Footer Items={[]} />
    </div>
  );
}
