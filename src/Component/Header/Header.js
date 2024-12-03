import React from "react";
import "../Header/header.css";
import logo from "../../Image/Facebook-logo (1).png";
import ProfileAvatar from "../../Image/293787434_607002637435844_4426671370606791184_n.jpg";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { MdOndemandVideo, MdNotificationsNone } from "react-icons/md";
import { FaHome, FaUserFriends, FaFacebookMessenger } from "react-icons/fa";
import { LuGamepad2 } from "react-icons/lu";
import { TbGridDots } from "react-icons/tb";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img className="logo" src={logo} alt="logo" />
        <div className="header_search">
          <AiOutlineSearch className="search_icon" size={20} />
          <input placeholder="search facebook" />
        </div>
      </div>
      <div className="header_middle">
        <div className="header_option header_option--active">
          <AiFillHome size={26} />
        </div>
        <div className="header_option">
          <MdOndemandVideo size={26} />
        </div>
        <div className="header_option">
          <FaHome size={26} />
        </div>
        <div className="header_option">
          <FaUserFriends size={26} />
        </div>
        <div className="header_option">
          <LuGamepad2 size={26} />
        </div>
      </div>

      <div className="header_right">
        <IconButton>
          <TbGridDots />
        </IconButton>
        <IconButton>
          <FaFacebookMessenger />
        </IconButton>
        <IconButton>
          <MdNotificationsNone />
        </IconButton>
        <img className="profile_avatar" src={ProfileAvatar} alt="" />
      </div>
    </div>
  );
}

export default Header;
