import { Avatar, IconButton, Modal } from "@mui/material";
import "../Feed/createpost.css";
import React, { useState } from "react";
import { RiLiveLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { MdPhotoLibrary } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";
import { useStateValue } from "../../StateProvider";

function CreatePost() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({
        type: "ADD_POST",
        post: {
          profilephotoUrl: "", // Add user profile photo if available
          userName: user?.name || "Anonymous",
          time: new Date().toLocaleTimeString(),
          message: input,
        },
      });
      setInput("");
      handleClose();
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal_pop">
          <form onSubmit={handleSubmit}>
            <div className="modalHeading">
              <h3>Create Post</h3>
              <IconButton>
                <AiOutlineClose onClick={handleClose} />
              </IconButton>
            </div>
            <div className="modal_top">
              <Avatar />
              <h5>{user?.name || "Anonymous"}</h5>
            </div>
            <div className="modal_body">
              <textarea
                rows="5"
                placeholder="What's on your mind, Md?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>
            <div className="modal_footer">
              <div className="modal_footerleft">
                <h4>Add your Post</h4>
              </div>
              <div className="modal_footerright">
                <IconButton>
                  <RiLiveLine style={{ color: "red" }} />
                </IconButton>
                <IconButton>
                  <MdPhotoLibrary style={{ color: "lightgreen" }} />
                </IconButton>
                <IconButton>
                  <GrEmoji style={{ color: "#ffb100" }} />
                </IconButton>
              </div>
            </div>
            <input type="submit" className="post_submit" value="Post" />
          </form>
        </div>
      </Modal>
      <div className="createpost">
        <div className="createpost_top">
          <Avatar />
          <form>
            <input
              type="text"
              placeholder="What's on your mind, Md?"
              onClick={handleOpen}
            />
          </form>
        </div>
        <div className="createpost_bottom">
          <div className="post_option">
            <RiLiveLine size={26} style={{ color: "red" }} />
            <p>Live Video</p>
          </div>
          <div className="post_option">
            <MdPhotoLibrary size={26} style={{ color: "lightgreen" }} />
            <p>Photo/video</p>
          </div>
          <div className="post_option">
            <GrEmoji size={26} style={{ color: "#ffb100" }} />
            <p>Feeling/activity</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
