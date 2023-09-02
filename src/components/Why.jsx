import React, { useState } from "react";
import earphones from "../assets/whych/ear.gif";
import highq from "../assets/whych/hq.gif";
import support from "../assets/whych/cross.gif";
import exper from "../assets/whych/solidexp.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import "./styles/Why.css";

const Why = () => {
  const obj = [
    {
      title: "Solid Experience",
      para: " is a popular means of typesetting complex mathematical formulae, it has been noted as one of the most sophisticated digital typographical",
      image: exper,
    },

    {
      title: "Dedicated Support",
      para: " is a popular means of typesetting complex mathematical formulae, it has been noted as one of the most sophisticated digital typographical",
      image: earphones,
    },

    {
      title: "High Quality",
      para: " is a popular means of typesetting complex mathematical formulae, it has been noted as one of the most sophisticated digital typographical",
      image: highq,
    },

    {
      title: "Cross-Platform Support",
      para: " is a popular means of typesetting complex mathematical formulae, it has been noted as one of the most sophisticated digital typographical",
      image: support,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex - 1 + obj.length) % obj.length;
  const nextIndex = (currentIndex + 1) % obj.length;

  const currentItem = obj[currentIndex];
  const prevItem = obj[prevIndex];
  const nextItem = obj[nextIndex];

  const handleClick = () => {
    setCurrentIndex((prevIn) => (prevIn + 1) % obj.length);
  };

  return (
    <div className="container-fluid" style={{backgroundColor:"black"}}>
      <div
        className="why-bg"
        style={{
          display: "flex",
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          paddingTop: "2rem",
         
         
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div style={{ color: "white",padding:"0",margin:"0",textAlign:"start"}} className="col-5 whysec1">
          <h2 className="whyhead" style={{textAlign:"start"}}> Why choose interactive 3D Solutions?</h2>
          <p className="whypara">
            is a popular means of typesetting complex mathematical formulae; it
            has been noted as one of the most sophisticated digital
            typographical systems.is a popular means of typesetting complex
            mathematical formulae; it has been noted as one of the most
            sophisticated digital typographical systems
          </p>
        </div>
        <div
          className="col-7 whysec2"
          style={{ textAlign: "center", position: "relative",marginRight:"1rem",marginBottom:"2rem" }}
        >
          <img
          className="whyimage1"
            src={prevItem.image}
            alt={currentItem.title}
            style={{
             
              position: "absolute",
              top: "8%",
              left: "65%",
              filter: "blur(2px)",
              borderRadius:"5px"
            }}
          />
          <div style={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
            <img
              src={currentItem.image}
              alt={currentItem.title}
              style={{ borderRadius:"5px"}}
              className="whyimage"
            />
            <h5 style={{ color: "purple",paddingTop:"1rem" }}>{currentItem.title}</h5>
            <p className="whypara" style={{ color: "white" ,textAlign:"start",paddingLeft:"3rem"}}>{currentItem.para}</p>
            <span
              onClick={handleClick}
              style={{ backgroundColor: "transparent" }}
            >
              <FontAwesomeIcon
                icon={faHandPointer}
                style={{
                  marginLeft: "",
                  // border: "0.5px white solid",
                  padding: "0.3rem",
                  color: "white",
                  borderRadius: "1rem",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            </span>
          </div>
          <img
            src={nextItem.image}
            alt={currentItem.title}
            style={{
             
              position: "absolute",
              top: "85%",
              left: "65%",
              filter: "blur(2px)",
              borderRadius:"5px"
            }}
            className="whyimage1"
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
