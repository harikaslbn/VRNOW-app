import React, { useState, useEffect } from "react";
import rise from "../assets/case/rise.gif";
import "./styles/Casestudy.css";
// img1
import img1 from "../assets/case/img1.png";
import img1a from "../assets/case/img1a.png";
import img1b from "../assets/case/img1b.png";
// img2
import img2 from "../assets/case/img2.jpg";
import img2a from "../assets/case/img2a.jpg";
import img2b from "../assets/case/img2b.jpg";
// img3
import img3 from "../assets/case/img3.jpg";
import img3a from "../assets/case/img3a.jpg";
import img3b from "../assets/case/img3b.jpg";

// img4
import img4 from "../assets/case/img4.jpg";
import img4a from "../assets/case/img4a.jpg";
import img4b from "../assets/case/img4b.jpg";

// img5
import img5 from "../assets/case/img5.jpg";
import img5a from "../assets/case/img5a.jpg";
import img5b from "../assets/case/img5b.jpg";

// img6
import img6 from "../assets/case/img6.jpg";
import img6a from "../assets/case/img6a.jpg";
import img6b from "../assets/case/img6b.jpg";

import gol from "../assets/case/gol.gif";

const randomimages = [img1, img1a, img1b, img2, img2a, img2b];

const images = [
  { centerimg: img5, leftimg: img5a, rightimg: img5b, title: "DRA" },
  { centerimg: img2, leftimg: img2a, rightimg: img2b, title: "Century Renata" },
  {
    centerimg: img3,
    leftimg: img3a,
    rightimg: img3b,
    title: "Linc Acacia Villa",
  },
  { centerimg: img4, leftimg: img4a, rightimg: img4b, title: "Emami Aastha" },
  {
    centerimg: img5,
    leftimg: img5a,
    rightimg: img5b,
    title: "Rustomjee Paramount",
  },
  { centerimg: img6, leftimg: img6a, rightimg: img6b, title: "SPR MOI" },
];

const Casestudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  const randomIndex1 = Math.floor(Math.random() * randomimages.length);
  const randomIndex2 = Math.floor(Math.random() * randomimages.length);

  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div
        style={{
          width: "88%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
          paddingTop: "2rem",
        }}
      >
        
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
           margin:"auto",
            
          }}
        >
          <img src={rise} style={{ width: "6rem", height: "4rem" }} />
          <div
            style={{
              textAlign: "center",
            
              margin: "1rem",
            }}
          >
            <h2 style={{fontWeight:"bold"}}>Case Studies</h2>

            <h5 style={{fontWeight:"500"}}>Check out our customer case Studies</h5>
          </div>
          <img src={rise} style={{ width: "6rem", height: "4rem" }} />
        </div>
    
        <div className="container" >
          <div
            className="row rowcls"
            style={{
              backgroundColor: "black",
              paddingTop:"1rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              // marginBottom:"2rem"
              // border: "2px red solid",
              // height: "30rem",
              // paddingBottom:"3rem"
            }}
          >
            <div className="col-md-1"></div>
            <div
              className="casset col-12 col-md-10"
              style={{
                position: "relative",
                // paddingLeft: "5rem",
                // paddingRight: "5rem",
                // border: "2px red solid",
               
              }}
            >
              <span>
              <img
                  className="imagelast1"
                  src={currentImage.rightimg}
                  style={{ filter: "blur(2px)" }}
                />
                 <img
                  className="imagelast2"
                  src={currentImage.leftimg}
                  style={{ filter: "blur(2px)" }}
                />
                <img
                  className="image1"
                  src={randomimages[randomIndex1]}
                  style={{ filter: "blur(2px)" }}
                />
                <img
                  className="image2"
                  src={currentImage.rightimg}
                  style={{ filter: "blur(1px)" }}
                />
                <img
                  className="image3"
                  src={currentImage.leftimg}
                  style={{ filter: "blur(1px)" }}
                />
                <img
                  className="image4"
                  src={randomimages[randomIndex2]}
                  style={{ filter: "blur(2px)" }}
                />
                <img className="image5" src={gol} />
                <img className="image6" src={currentImage.centerimg} />
                <p
                  className="paraimg"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  {currentImage.title}
                </p>
              </span>
            </div>
            <div className="col-md-1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
