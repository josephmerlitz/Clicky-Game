import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title"><h3>World Of Warcraft Clicky Game</h3></div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;
