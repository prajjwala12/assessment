import React from "react";
import byjusLogo from "../assets/trademark.png";
import ceoImage from "../assets/ceoImage-trimmy.png";
import bgheader from "../assets/blue-box.png";
import secondHalf from "../assets/second-half.png";

export default function Header() {
  return (
    // <div>
    //   {/* <div className="first-img"> */}
    //     <img className='blue-box-img' src= {bgheader} />
    //   {/* </div> */}
    //   <div className="first-p">
    //     <h3>
    //     Do you know that Offline Coaching and watching free videos will not help you in your GMAT Prep?
    //     </h3>
    //   </div>
    // </div>
    <>
      <div
        style={{
          backgroundColor: "#0E155E",
        }}
      >
        <img src={byjusLogo} className="byjuslogo" />
        <div className="mid-section">
          <div className="left-container">
            <h3>
              Do you know that{" "}
              <span className="yellow-span">Offline Coaching</span> and watching{" "}
              <span className="yellow-span">free videos</span> will not help you
              in your <span className="gmat">GMAT</span> Prep?
            </h3>
          </div>
          <div className="right-container">
            <img src={ceoImage} />
          </div>
        </div>
        {/* <img src={secondHalf} alt="" className="second-half" /> */}
      </div>
      <div className="second-half">
        <p className="purple-bg">A 750+ scorer has a minimum of Quant-45 & Verbal-45</p>
        <p className="now">Now,</p>
        <p>How do you plan to elevate your score from</p>
        <p className="numbers">650 to 700+?</p>
      </div>
    </>
  );
}
