import React from "react";
import "./Hero.css";
import Frame from "../../assets/Frame.png";
function Hero() {
  return (
    <div className="b">
      <div className="container">
        <div className="b1">
          <img src={Frame} alt="" />
          <div>
            <h1>Дизайн и верстка</h1>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </p>
            <a href="#contact">
              <button>НАПИСАТЬ МНЕ</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
