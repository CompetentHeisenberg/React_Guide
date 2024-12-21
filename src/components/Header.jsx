import React from "react";
import header from "../css/main_header.module.css";
import logo from "../images/logom.png";
import Headbutton from "./Hbutton.jsx";
function Header() {
  return (
    <header className={header.header}>
      <div className={header.headel}>
        <Headbutton name="HTML" className={header.headbutt}></Headbutton>
        <Headbutton name="JS" className={header.headbutt}></Headbutton>
        <img src={logo} alt="logotype" className={header.logo}></img>
        <Headbutton name="React" className={header.headbutt}></Headbutton>
        <Headbutton name="CSS" className={header.headbutt}></Headbutton>
      </div>
    </header>
  );
}

export default Header;
