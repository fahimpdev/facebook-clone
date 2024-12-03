import React from "react";
import "../Feed/reels.css";
import { Avatar } from "@mui/material";
import story1 from "../../Image/story-1.jpeg";
import story2 from "../../Image/story-2.jpg";
import story3 from "../../Image/story-3.jpeg";
import story4 from "../../Image/story-4.jpeg";
import profileAvatar1 from "../../Image/profile Avatar.jpeg";
import profileAvatar2 from "../../Image/profile Avatar-2.jpeg";
import profileAvatar3 from "../../Image/profile avatar3.jpeg";

function StoryReels() {
  return (
    <div className="storyreels">
      <div className="story" style={{ backgroundImage: `url(${story1})` }}>
        <Avatar src={profileAvatar1} />
        <h6>Shammim</h6>
      </div>
      <div className="story" style={{ backgroundImage: `url(${story2})` }}>
        <Avatar />
        <h6>Md Fahim</h6>
      </div>
      <div className="story" style={{ backgroundImage: `url(${story3})` }}>
        <Avatar src={profileAvatar2} />
        <h6>Tamim </h6>
      </div>

      <div className="story" style={{ backgroundImage: `url(${story4})` }}>
        <Avatar src={profileAvatar3} />
        <h6>Mst. Riya</h6>
      </div>
      <div className="story" style={{ backgroundImage: `url(${story1})` }}>
        <Avatar src={profileAvatar1} />
        <h6>Shammim</h6>
      </div>
    </div>
  );
}

export default StoryReels;
