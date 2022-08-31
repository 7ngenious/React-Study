import React from "react";
import "./board.css";

const Post = props => {
  return (
    <>
      <div className="postTitle">{props.title}</div>
      <div className="postContent">{props.body}</div>
    </>
  );
};

export default Post;
