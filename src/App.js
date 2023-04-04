import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "khush_kr",
      caption: "wow! It works",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w1000/2023/03/emile-perron-xrVDYZRGdw4-unsplash.jpg",
    },
    {
      username: "iamjiit",
      caption: "Mmmm looks nice!",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w1000/2023/03/pexels-chelsey-horne-4506938.jpg",
    },
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>Khush</h1>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

      {/*Posts */}
    </div>
  );
}

export default App;
