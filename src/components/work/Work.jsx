import React from "react";
import "./Work.css";
import video from "../../assets/video.png";
function Work() {
  return (
    <div id="work" className="d">
      <div className="container">
        <div className="d1">
          <h1>Как я работаю</h1>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века.
          </p>
          <img style={{ width: "100%" }} src={video} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Work;
