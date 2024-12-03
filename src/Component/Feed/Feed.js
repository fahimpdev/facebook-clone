import React from "react";
import "../Feed/feed.css";
import StoryReels from "./StoryReels";
import CreatePost from "./CreatePost";
import Post from "./Post";
import profileImage1 from "../../Image/profile Avatar.jpeg";
import profileImage2 from "../../Image/profile Avatar-2.jpeg";
import profileImage3 from "../../Image/profile avatar3.jpeg";
import postImage1 from "../../Image/story-1.jpeg";
import postImage2 from "../../Image/story-2.jpg";
import postImage3 from "../../Image/story-3.jpeg";
import postImage4 from "../../Image/story-4.jpeg";
import postImage5 from "../../Image/story-5.jpeg";
import postImage6 from "../../Image/story-6.jpeg";
import postImage7 from "../../Image/story-7.jpeg";
import postImage8 from "../../Image/story-8.jpeg";
import { useStateValue } from "../../StateProvider";

function Feed() {
  const [{ posts }] = useStateValue();
  return (
    <div className="feed">
      <StoryReels />
      <CreatePost />
      {posts.map((post, index) => (
        <Post
          key={index}
          profilephotoUrl={post.profilephotoUrl}
          userName={post.userName}
          time={post.time}
          message={post.message}
        />
      ))}
      <Post
        profilephotoUrl={profileImage1}
        image={postImage1}
        userName="Md Fahim"
        time="12:45 pm"
        message="This is the test message"
      />{" "}
      <Post
        profilephotoUrl={profileImage2}
        image={postImage2}
        userName="Md Fahim"
        time="12:45 pm"
        message="This is the test message"
      />{" "}
      <Post
        profilephotoUrl={profileImage3}
        image={postImage3}
        userName="Md Fahim"
        time="12:45 pm"
        message="This is the test message"
      />{" "}
      <Post
        profilephotoUrl={profileImage2}
        image={postImage4}
        userName="Md Fahim"
        time="12:45 pm"
        message="This is the test message"
      />{" "}
      <Post
        profilephotoUrl={profileImage2}
        image={postImage5}
        userName="Md Fahim"
        time="12:45 pm"
        message="This is the test message"
      />{" "}
      <Post
        profilephotoUrl={profileImage1}
        image={postImage6}
        userName="Md Fahim"
        time="12:45 pm"
        message="This is the test message"
      />{" "}
      <Post
        profilephotoUrl={profileImage2}
        image={postImage7}
        userName="Md Fahim"
        time="12:45 pm"
        message="This is the test message"
      />{" "}
      <Post
        profilephotoUrl={profileImage1}
        image={postImage8}
        userName="Md Fahim"
        time="12:45 pm"
        message="This is the test message"
      />
    </div>
  );
}

export default Feed;
