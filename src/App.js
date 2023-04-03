import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>Khush</h1>
      <Post />
      {/*Posts */}
      {/*Posts */}
    </div>
  );
}

export default App;
