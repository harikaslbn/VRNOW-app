import React from "react";
import "./styles/Team.css";
import tm1 from "../assets/teams/tm1.gif";
import tm2 from "../assets/teams/tm2.gif";
import tm3 from "../assets/teams/tm3.gif";
import tm4 from "../assets/teams/tm4.gif";

import bt1 from "../assets/teams/bt1.png";
import bt3 from "../assets/teams/bt3.png";
import bt4 from "../assets/teams/bt4.png";

const Team = () => {
  return (
    <div className="container-fluid " style={{ backgroundColor: "black" }}>
      <div
        className="teambg"
        style={{
          // width: "88%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
        //   height: "100vh",
          paddingTop: "2rem",
          paddingBottom: "5rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{fontWeight:"bold"}}>Contact our friendly team</h2>
          <h6 style={{ paddingTop: "1.5rem",fontWeight:"bold" }}>Let’s us know how we can help</h6>
        </div>

        <div>
          <div className="grid-container1">
            <div className="grid-item1">
              <h6 style={{ textAlign: "center", fontWeight: "bold" }}>
                Chat to Sales
              </h6>
              <img
                src={tm1}
                alt="img"
                className="teampic"
              />
              <div style={{ display: "flex" }}>
                <img
                  src={bt1}
                  alt="img"
                  style={{ height: "1rem", marginRight: "0.3rem" }}
                />
                <p style={
                  {fontSize:"0.7rem"}
                } >mail id: info@vrnow.ai</p>
              </div>
            </div>
            <div className="grid-item1">
              <h6 style={{ textAlign: "center", fontWeight: "bold" }}>
                Chat to Support
              </h6>
              <img
                src={tm2}
                alt="img"
               className="teampic"
              />
              <div style={{ display: "flex" }}>
                <img
                  src={bt1}
                  alt="img"
                  style={{ height: "1rem", marginRight: "0.3rem" }}
                />
                <p style={{fontSize:"0.7rem"}}>mail id: info@vrnow.ai</p>
              </div>
            </div>
            <div className="grid-item1">
              <h6 style={{ textAlign: "center", fontWeight: "bold" }}>
                Visit Us
              </h6>
              <img
                src={tm3}
                alt="img"
               className="teampic"
              />
              <div style={{ display: "flex" }}>
                <img
                  src={bt3}
                  alt="img"
                  style={{ height: "1rem", marginRight: "0.3rem" }}
                />
                <p style={{fontSize:"0.7rem"}}>Location Link: Bangalore, Karnataka.</p>
              </div>
            </div>
            <div className="grid-item1">
              <h6 style={{ textAlign: "center", fontWeight: "bold" }}>
                Call Us
              </h6>
              <img
                src={tm4}
                alt="img"
                className="teampic"
              />
              <div style={{ display: "flex" }}>
                <img
                  src={bt4}
                  alt="img"
                  style={{ height: "1rem", marginRight: "0.3rem" }}
                />
                <p style={{fontSize:"0.7rem"}}>+91 7008812287</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
