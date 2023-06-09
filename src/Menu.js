import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
import "./css/menu.css";
import logo from "./img/react-router.svg";

function Menu() {
  const auth = useAuth();

  return (
    <nav>
      <img src={logo} alt="Logo" className="imagen-fija"/>
      <ul>
        {routes.map((route) => {

          if (!auth.user && route.private) return null;

          if (auth.user && route.text === "Login") return null;

          return (
            <li key={route.to}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#007979" : "#1E1E1F",
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const routes = [];

routes.push({
  to: "/",
  text: "Home",
  private: false,
});
routes.push({
  to: "/blog",
  text: "Blog",
  private: false,
});
routes.push({
  to: "/profile",
  text: "Profile",
  private: true,
});
routes.push({
  to: "/login",
  text: "Login",
  private: false,
});
routes.push({
  to: "/logout",
  text: "Logout",
  private: true,
});

export { Menu };
