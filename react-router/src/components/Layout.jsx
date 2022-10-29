import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "blue" : "burlywood",
              })}
              end
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "blue" : "burlywood",
              })}
              to='about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "blue" : "burlywood",
              })}
              to='users'
            >
              Users
            </NavLink>
          </li>
        </ul>
        <hr />
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
