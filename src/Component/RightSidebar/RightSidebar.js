import React from "react";
import "../RightSidebar/rightSidebar.css";
import { FiMoreHorizontal, FiBell, FiVolume2, FiSearch } from "react-icons/fi";
import { Avatar } from "@mui/material";
import logo1 from "../../Image/images.jpeg";
import logo2 from "../../Image/profile Avatar.jpeg";
import logo3 from "../../Image/profile Avatar-2.jpeg";
import logo4 from "../../Image/profile avatar3.jpeg";

function RightSidebar() {
  return (
    <div className="widget">
      <div className="widget_header">
        <div className="widget_headerleft">
          <h4>Your Pages</h4>
        </div>
        <FiMoreHorizontal />
      </div>
      <div className="widget_body">
        <div className="widget_bodyoption">
          <Avatar src={logo1} />
          <h4>Our bd</h4>
        </div>
        <div className="widget_bodyoption ml_10">
          <FiBell size={22} />
          <h4>1 Notification</h4>
        </div>
        <div className="widget_bodyoption ml_10">
          <FiVolume2 size={22} />
          <h4>Create Promotion</h4>
        </div>
      </div>
      <hr />
      <br />

      <div className="widget_contact">
        <div className="widget_contactRight">
          <h4>Contacts</h4>
        </div>
        <div className="widget_contactLeft">
          <FiSearch />
          <FiMoreHorizontal />
        </div>
      </div>
      <div className="contact_people">
        <div className="widget_body">
          <div className="widget_bodyoption">
            <Avatar src={logo1} />
            <h4>Md Fahim</h4>
          </div>
        </div>
        <div className="widget_body">
          <div className="widget_bodyoption">
            <Avatar src={logo2} />
            <h4>Md Shammim</h4>
          </div>
        </div>
        <div className="widget_body">
          <div className="widget_bodyoption">
            <Avatar src={logo3} />
            <h4>Tamim Hassan</h4>
          </div>
        </div>
        <div className="widget_body">
          <div className="widget_bodyoption">
            <Avatar src={logo4} />
            <h4>Md Fahim</h4>
          </div>
        </div>
        <div className="widget_body">
          <div className="widget_bodyoption">
            <Avatar src={logo2} />
            <h4>Mst Riya</h4>
          </div>
        </div>
        <div className="widget_body">
          <div className="widget_bodyoption">
            <Avatar src={logo3} />
            <h4>Md Fahim</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
