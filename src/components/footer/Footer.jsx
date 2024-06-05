import React from "react";
import "./Footer.css";
import wk from "../../assets/wk.png";
function Footer() {
  return (
    <div className="g">
      <div className="container">
        <div className="g1">
          <div>
            <h1>Иванов Иван</h1>
            <p>(с) 2018. Все права защищены.</p>
          </div>
          <img src={wk} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
