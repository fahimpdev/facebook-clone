import React from "react";
import "../Sidebar/sidebar.css";
import Sidebaroption from "./Sidebaroption";
import logo from "../../Image/293787434_607002637435844_4426671370606791184_n.jpg";
import feeds from "../../Image/eECk3ceTaHJ.png";
import friends from "../../Image/friends.png";
import group from "../../Image/group.png";
import marketplace from "../../Image/marketPlace.png";
import video from "../../Image/videos.png";
import memories from "../../Image/memories.png";
import Saved from "../../Image/bookmark.png";
import { FaAngleDown } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <Sidebaroption src={logo} title="Md Fahim" />
      <Sidebaroption src={friends} title="Friends" />
      <Sidebaroption src={feeds} title="Feeds" />
      <Sidebaroption src={group} title="Groups" />
      <Sidebaroption src={marketplace} title="Marketplace" />
      <Sidebaroption src={video} title="Video" />
      <Sidebaroption src={memories} title="Memories" />
      <Sidebaroption src={Saved} title="Saved" />
      <Sidebaroption Icon={FaAngleDown} title="See more" />
    </div>
  );
}

export default Sidebar;
