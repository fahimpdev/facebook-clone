import React from "react";
import "../Sidebar/sidebar.css";
import { Avatar } from "@mui/material";
function Sidebaroption({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
}

export default Sidebaroption;
