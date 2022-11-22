import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="links" to="/">
        Home{" "}
      </NavLink>
      <NavLink className="links" to="/animal">
        Animal{" "}
      </NavLink>

      <NavLink className="links" to="/bird">
        Bird{" "}
      </NavLink>
      <NavLink className="links" to="/about">
        About{" "}
      </NavLink>
    </nav>
  );
};

export default Navbar;
