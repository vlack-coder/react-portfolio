import React from "react";
import "./Modal.css";

function Modal() {
  return (
    <div className="mcontain">
      <div className="mwrapper">
        <img src="./images/img1" alt="" className="mimg" />
        <div className="mcontent">
          <h1>Are you ready?</h1>
          <p>Get exclusive access to our next launch.</p>
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
