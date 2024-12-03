import React from "react";
import "../Feed/post.css";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlinePublic } from "react-icons/md";
import { BiLike, BiShare } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { Avatar } from "@mui/material";

function Post({ profilephotoUrl, image, userName, time, message }) {
  return (
    <div className="post">
      <div className="postheader">
        <div className="postheader_left">
          <Avatar className="post_profile" src={profilephotoUrl} />
          <div className="postInfo">
            <h4>{userName}</h4>
            <p>
              {time} <MdOutlinePublic size={16} style={{ color: "gray" }} />
            </p>
          </div>
        </div>
        <FiMoreVertical />
      </div>
      <div className="postmiddle">
        <p>{message}</p>
        {image && <img src={image} alt="" />}
      </div>
      <div className="postfooter">
        <div className="postfooter_option">
          <BiLike size={26} />
          <p>Like</p>
        </div>
        <div className="postfooter_option">
          <GoComment size={26} /> <p>Comment</p>
        </div>
        <div className="postfooter_option">
          <BiShare size={26} /> <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
