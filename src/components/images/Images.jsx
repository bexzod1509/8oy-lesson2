import React from "react";
import "./Images.css";
import view from "../../assets/view.png";
import microsoft from "../../assets/microsoft.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
function Images() {
  return (
    <div>
      <div className="e">
        <div className="e1">
          <img style={{ width: "480px" }} src={img1} alt="" />
          <div className="e2">
            <img src={view} alt="" />
          </div>
        </div>
        <div className="e1">
          <img style={{ width: "480px" }} src={img2} alt="" />
          <div className="e2">
            <img src={view} alt="" />
          </div>
        </div>
        <div className="e1">
          <img style={{ width: "480px" }} src={img1} alt="" />
          <div className="e2">
            <img src={view} alt="" />
          </div>
        </div>
        <div className="e1">
          <img style={{ width: "480px" }} src={img2} alt="" />
          <div className="e2">
            <img src={view} alt="" />
          </div>
        </div>
        <div className="e1">
          <img style={{ width: "480px" }} src={img1} alt="" />
          <div className="e2">
            <img src={view} alt="" />
          </div>
        </div>
        <div className="e1">
          <img style={{ width: "480px" }} src={img2} alt="" />
          <div className="e2">
            <img src={view} alt="" />
          </div>
        </div>
      </div>
      <div className="e3">
        <img src={microsoft} alt="" />
        <img src={microsoft} alt="" />
        <img src={microsoft} alt="" />
        <img src={microsoft} alt="" />
      </div>
    </div>
  );
}

export default Images;
