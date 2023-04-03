import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

function Post() {
  return (
    <div className="post">
      {/* header -> avatar + username */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Rhushboo"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/size/w1000/2023/03/emile-perron-xrVDYZRGdw4-unsplash.jpg"
        alt=""
      />

      <h4 className="post__text">
        <strong>Khush_kr </strong> Building Instragame Clone{" "}
      </h4>
    </div>
  );
}

export default Post;
