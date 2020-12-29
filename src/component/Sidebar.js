import React from "react";
import "../styles/Profile.css";
import { SidebarData } from "./SidebarData.js";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              className="sidebar-row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
