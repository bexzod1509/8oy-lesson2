import React from "react";
import "./About.css";
import project from "../../assets/project.png";
import rating from "../../assets/rating.png";
import rating1 from "../../assets/rating1.png";
import man from "../../assets/man.png";
function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="c">
          <h1>Обо мне</h1>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века.
          </p>
        </div>
      </div>
      <div className="c1">
        <div className="c2">
          <img src={project} alt="" />
          <div>
            <h1>40+</h1>
            <p>проектов</p>
          </div>
        </div>
        <div className="c2">
          <img src={project} alt="" />
          <div>
            <h1>40+</h1>
            <p>проектов</p>
          </div>
        </div>
        <div className="c2">
          <img src={project} alt="" />
          <div>
            <h1>40+</h1>
            <p>проектов</p>
          </div>
        </div>
        <div className="c2">
          <img src={project} alt="" />
          <div>
            <h1>40+</h1>
            <p>проектов</p>
          </div>
        </div>
        <div className="c2">
          <img src={project} alt="" />
          <div>
            <h1>40+</h1>
            <p>проектов</p>
          </div>
        </div>
        <div className="c2">
          <img src={project} alt="" />
          <div>
            <h1>40+</h1>
            <p>проектов</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="c3">
          <div>
            <h1>Мои навыки</h1>
            <div>
              <p>HTML</p>
              <img src={rating1} alt="" />
              <img className="c4" src={rating} alt="" />
            </div>
            <div>
              <p>CSS</p>
              <img src={rating1} alt="" />
              <img className="c4" src={rating} alt="" />
            </div>
            <div>
              <p>JAVASCRIPT</p>
              <img src={rating1} alt="" />
              <img className="c4" src={rating} alt="" />
            </div>
          </div>
          <img className="c5" src={man} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
