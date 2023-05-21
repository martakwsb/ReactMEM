import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="bar">
      <Link to="/" className="box box3">
        {"STRONA GŁÓWNA"}
      </Link>
      <Link to="/hot-memes" className="box box3">
        {"HOT MEMES"}
      </Link>
      <Link to="/regular-memes" className="box box3">
        {"REGULAR MEMES"}
      </Link>
      <Link to="/favorite" className="box box3">
        {"ZAPAMIĘTANE"}
      </Link>
      <Link to="/generator" className="box box3">
        {"MEME GENERATOR"}
      </Link>
    </div>
  );
}

export default Navbar;
