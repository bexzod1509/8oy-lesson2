import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <img src={logo} alt="" />
          <div className="a">
            <a href="#">ГЛАВНАЯ</a>
            <a href="#about">ОБ АВТОРЕ</a>
            <a href="#">РАБОТЫ</a>
            <a href="#work">ПРОЦЕСС</a>
            <a href="#contact">КОНТАКТЫ</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
