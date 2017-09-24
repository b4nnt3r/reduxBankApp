import React from "react";
import { NavLink } from "react-router-dom";

function BaseLayout({ children }) {
  return (
    <div>
      <div>
        <NavLink style={{ margin: 50 }} to="/">
          Bank
        </NavLink>
        <NavLink style={{ margin: 50 }} to="/">
          Home
        </NavLink>
        <NavLink style={{ margin: 50 }} to="/users">
          Users
        </NavLink>
      </div>
      {children}
    </div>
  );
}

export default BaseLayout;
