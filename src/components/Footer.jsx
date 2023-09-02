import React from "react";
import logo1 from "../assets/footer/logovrnow.gif";
import inst from "../assets/footer/inst.png";
import ln from "../assets/footer/ln.png";

import tw from "../assets/footer/tw.png";

import yt from "../assets/footer/yt.png";
import gz from "../assets/footer/grizly.jpg";
import cl from "../assets/footer/call.jpg";
import "./styles/Footer.css";

const Footer = () => {
  const scrollToSection = () => {
    const section = document.getElementById("meta");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection1 = () => {
    const section = document.getElementById("clients");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection2 = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection3 = () => {
    const section = document.getElementById("case-studies");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection4 = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection5 = () => {
    const section = document.getElementById("experience-centers");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-fluid " style={{ backgroundColor: "black" }}>
      <div
        className="plnbg2"
        style={{
          // width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
          //   height: "100vh",

          // paddingBottom: "5rem",
        }}
      >
        <footer class="text-light py-4">
          <div class="container">
            <div class="row mainft">
              <div class=" col-6 col-md-3 footbg">
                <img
                  src={logo1}
                  alt="img"
                  style={{ height: "3rem", width: "6rem" }}
                />
                <div style={{ display: "flex" }}>
                  <a
                    href="https://www.instagram.com/homznoffiz/"
                    target="_blank"
                  >
                    <img src={inst} className="imgft" />
                  </a>
                  <a href="https://www.youtube.com/@homznoffiz" target="_blank">
                    <img src={yt} className="imgft" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/homznoffiz/"
                    target="_blank"
                  >
                    {" "}
                    <img src={ln} className="imgft" />
                  </a>
                  {/* <a href="#" target='_blank'>  */}
                  <img src={tw} className="imgft" />
                  {/* </a> */}
                </div>
              </div>
              <div class="col-3 col-md-2">
                <h6>Home</h6>
                <ul class="list-unstyled">
                  <li className="litxt">
                    <a href="#clients" onClick={scrollToSection1}>
                      Clients
                    </a>
                  </li>
                  <li className="litxt">
                    <a href="#products" onClick={scrollToSection2}>
                      Products
                    </a>
                  </li>
                  <li className="litxt">
                    <a href="#case-studies" onClick={scrollToSection3}>
                      Case studies
                    </a>
                  </li>
                  <li className="litxt">
                    <a href="#contact" onClick={scrollToSection4}>
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-3 col-md-2">
                <h6>Pages</h6>
                <ul class="list-unstyled">
                  <li className="litxt">
                    <a href="#metaverse" onClick={scrollToSection}>
                      Metaverse
                    </a>
                  </li>
                  <li className="litxt">
                    <a href="#">Digital Twin</a>
                  </li>
                  <li className="litxt">
                    <a
                      href="http://homznoffiz.org/"
                      target="_blank"
                    >
                      Blogs
                    </a>
                  </li>
                  <li className="litxt">
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div class="col-6  col-md-3 footexp">
                <h6 style={{ textAlign: "left", marginLeft: "0" }}>
                  Experience Center
                </h6>
                <ul class="list-unstyled">
                  <li className="litxt">
                    <a href="#experience-centers" onClick={scrollToSection5}>
                      Projection Mapping
                    </a>
                  </li>
                  <li className="litxt">
                    <a href="#experience-centers" onClick={scrollToSection5}>
                      Smart Displays
                    </a>
                  </li>
                  <li className="litxt">
                    <a href="#experience-centers" onClick={scrollToSection5}>
                    Controller Experience
                    </a>
                  </li>
                  <li className="litxt">
                    <a href="#experience-centers" onClick={scrollToSection5}>
                      Virtual Reality Experience
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="col-4 col-sm-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <h6>
                  Email Us
                  <span style={{ display: "block" }} className="litxt">
                    {" "}
                    info@vrnow.ai
                  </span>
                </h6>
                <h6>
                  Call Us
                  <span style={{ display: "block" }} className="litxt">
                    +91 7008812287
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </footer>
        <hr style={{ margin: "0" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0",
          }}
        >
          <p style={{ fontSize: "15px", paddingTop: "1rem" }}>
            Copyright © 2023 . Crafted by
          </p>
          <img
            src={gz}
            className="gzimg"
            alt="img"
            style={{ height: "29px", width: "8%", marginLeft: "1rem" }}
          />
          <img
            src={cl}
            className="climg"
            alt="img"
            style={{ height: "29px", width: "8%", marginLeft: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
