import React, { useState } from "react";
import "./styles/Products.css";

import mobile from "../assets/products/mobileframe.png";
// 3d imgs
import icon1 from "../assets/products/3d/mainicon.gif";
import comp1 from "../assets/products/3d/compimg.png";
import top1 from "../assets/products/3d/drown.gif";
import img1 from "../assets/products/3d/1stimg.gif";
import img2 from "../assets/products/3d/2ndimg.gif";
import img3 from "../assets/products/3d/3rdimg.gif";
// location imgs

import locmain from "../assets/products/location/locmain.gif";
import location from "../assets/products/location/location.gif";
// import loccomp from "../assets/products/location/loccomp.png";
import loccomp from "../assets/products/phloc.jpg";
import loc1 from "../assets/products/location/loc1.gif";
import loc2 from "../assets/products/location/loc2.gif";
import loc3 from "../assets/products/location/loc3.gif";

// Amenities imgs

import ammain from "../assets/products/amenities/ammain.gif";
import am1st from "../assets/products/amenities/am1st.gif";
import am2nd from "../assets/products/amenities/am2nd.png";
import am3rd from "../assets/products/amenities/am3.gif"
import amen from "../assets/products/amenities/amen.gif";
import amcomp from "../assets/products/amenities/amcomp.jpg";

//floor plans imgs
import flmain from "../assets/products/floor/flmain.gif";
import fl from "../assets/products/floor/fl.gif";
import flcomp from "../assets/products/floor/flcomp.jpg";
import fl1st from "../assets/products/floor/fl1st.gif";
import fl2nd from "../assets/products/floor/fl2nd.gif";
import fl3rd from "../assets/products/floor/fl3rd.gif";

//virtual imgs

import virmain from "../assets/products/virtual/virmain.gif";
import vir from "../assets/products/virtual/vir.gif";
import vircomp from "../assets/products/virtual/vircomp.jpg";
import vir1st from "../assets/products/virtual/vir1st.gif";
import vir2nd from "../assets/products/virtual/vir2nd.gif";
import vir3rd from "../assets/products/virtual/vir3rd.gif";

// showcase imgs

import shmain from "../assets/products/showcase/shmain.gif";
import sh from "../assets/products/showcase/sh.gif";
import sh1st from "../assets/products/showcase/sh1st.gif";
import sh2nd from "../assets/products/showcase/sh2nd.gif";
import sh3rd from "../assets/products/showcase/sh3rd.gif";
import shcomp from "../assets/products/showcase/shcomp.jpg";
//walkthrough imgs

import wlmain from "../assets/products/walk/wlmain.gif";
import wl from "../assets/products/walk/wl.gif";
import wlcomp from "../assets/products/walk/wlcomp.gif";
import wl1st from "../assets/products/walk/wl1st.gif";
import wl2nd from "../assets/products/walk/wl2nd.gif";
import wl3rd from "../assets/products/walk/wl3rd.gif";

const products = [
  {
    icon: icon1,
    name: "3D interactive Project View",
    description:
      "3D of complete Project embedded seamlessly on 360 drone image",
    topimage: top1,
    comp_img: comp1,
    downpart: [
      { smicon: img1, txt: "360 Drown shoot on the project site" },
      {
        smicon: img2,
        txt: "View and Interact with the project from all sides",
      },

      { smicon: img3, txt: "showcase a detailed masterview of the project" },
    ],
  },
  {
    icon: locmain,
    name: "Location & Landmarks",
    description: "Show your customers the locaton advantages of your project",
    topimage: location,
    comp_img: loccomp,
    downpart: [
      { smicon: loc1, txt: "Interactive maps to show location advantages" },
      { smicon: loc2, txt: "Highlight iconic landmarks near the project" },

      { smicon: loc3, txt: "Detailed multi-level information" },
    ],
  },
  {
    icon: ammain,
    name: "Amenities Views",
    description:
      "Show Your awesome tour of all the amenities to your customers",
    topimage: amen,
    comp_img: amcomp,
    downpart: [
      { smicon: am1st, txt: "Interactive interior and exterior amenities" },
      { smicon: am2nd, txt: "complete amenities as 360 and static renders" },

      {
        smicon: am3rd,
        txt: "Bring Amenities to life with lively animations",
      },
    ],
  },
  {
    icon: flmain,
    name: "Floor Plan Viewer",
    description: "The most detailed unit plan feature in the market.",
    topimage: fl,
    comp_img: flcomp,
    downpart: [
      { smicon: fl1st, txt: "all 2D floor plan viewer and comparision" },
      { smicon: fl2nd, txt: "Interactive isometric floor plan viewer" },

      { smicon: fl3rd, txt: "Photorealistic 360 views of interiors" },
    ],
  },
  {
    icon: virmain,
    name: "Virtual Sales Conferencing",
    description: "The most comprehensive virtual sales tool in the market",
    topimage: vir,
    comp_img: vircomp,
    downpart: [
      { smicon: vir1st, txt: "video and voice conferencing led sale" },
      { smicon: vir2nd, txt: "supports upto 100 participants" },

      { smicon: vir3rd, txt: "sales analytics to understand users" },
    ],
  },
  {
    icon: shmain,
    name: "Showcase collaterals",
    description: "All marketing collaterals in one place",
    topimage: sh,
    comp_img: shcomp,
    downpart: [
      { smicon: sh1st, txt: "Brochures, videos,images-showcase all" },
      { smicon: sh2nd, txt: "Increase productivity of your sales team" },

      { smicon: sh3rd, txt: "Complete control during project showcase" },
    ],
  },
  {
    icon: wlmain,
    name: "Walkthrough Video",
    description: "Script based walkthrough of your project",
    topimage: wl,
    comp_img: wlcomp,
    downpart: [
      { smicon: wl1st, txt: "walkthrough with Audio, Voiceover and music" },
      { smicon: wl2nd, txt: "Animations to make walkthrough more lively" },

      { smicon: wl3rd, txt: "Every nook of the project covered" },
    ],
  },
];

const ProductsMobile = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  

  const handleProductClick = (index) => {
    setSelectedProduct(index === selectedProduct ? index : index);
  };

  const selectedProductData =
    selectedProduct !== null ? products[selectedProduct] : null;

  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div

      className="probg"
        style={{
          padding: "1rem",
          
          // width: "77.77%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
          // height: "100vh",

          // border: "2px red solid",
        }}
      >
        <div style={{ textAlign: "center",fontWeight:"bold" }}>
          <h2>Our Products</h2>

          <h5 style={{fontSize:"0.8rem",fontWeight:"500"}}>
            Projects that gives you the best experience for your project
            launches
          </h5>
        </div>
        <div className="row">
          <div className="phnfir" style={{ marginRight: "0" }}>
            {products.map((product, index) => (
              <div
                // className="col-6"
                key={index}
                onClick={() => handleProductClick(index)}
                style={{cursor:"pointer"}}
              >
                <div
                  className={`${selectedProduct === index ? "selected" : ""}`}
                  style={{
                    display: "flex",
                    backgroundColor: "#171616",
                    width: "90%",
                    marginTop: "1.8rem",
                    padding: "10px",
                    borderRadius: "5px",
                    // justifyContent:"center",
                    alignItems:"center"
                  }}
                >
                  <img
                    src={product.icon}
                    alt={`Icon for ${product.name}`}
                    style={{
                      // height: "2.5rem",
                      // width: "2.5rem",
                      marginRight: "3px",
                    }}
                    className="proimg"
                  />
                  < text
                  // className="protxt"
                    style={{
                      // fontWeight: "bold",
                      // fontSize: "0.6rem",
                      letterSpacing: "0.15px",
                    }}
                  >
                    {product.name}
                  </ text>
                </div>
              </div>
            ))}
          </div>

          <div className="phnsec" style={{ marginLeft: "0",position:"relative" }}>
            {selectedProductData && (
              < div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                < text style={{ textAlign: "center", paddingTop: "2rem" }}>
                  {selectedProductData.description}
                </ text>
                <img
                  src={selectedProductData.topimage}
                  alt="Top image"
                  style={{ width: "36%", height: "5rem", marginLeft: "55%",marginBottom:"0%" }}
                />
                <div className="radigrbg" style={{ position: "relative",marginBottom:"1rem" }}>
                  <img
                    src={mobile}
                    style={{
                      width: "5.8rem",
                      height: "16rem",
                      left: "25%",
                      top:0,
                      position: "absolute",
                    }}
                  />
                  <img
                    src={selectedProductData.comp_img}
                    alt="Comp image"
                    style={{
                      width: "5.5rem",
                      height: "15.6rem",
                      position: "absolute",
                      padding:"0.2rem",
                      top:-5,
                      left: "26%",
                      boxShadow: "0px -5px 30px 0 purple",
                      marginTop:"0.5rem",
                      borderRadius:"15px"
                    }}
                  />
                </div>
              
                <div style={{ display: "flex", marginTop: "0.5rem" ,position:"absolute",flexDirection:"column",
                // border:"2px red solid",
                left:"1rem",top:"26rem"}}>
                  {selectedProductData.downpart.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        // width: "10rem",
                        marginRight: "1px",
                        paddingTop: "0.4rem",
                        marginLeft:"0",
                        // height:"76px",
                        // width:"203px"
                       
                      }}
                    >
                      <img
                        src={item.smicon}
                        alt={`Small Icon ${idx + 1}`}
                        // className="col-3"
                        // style={{ height: "45px", width: "45px" }}
                        className="proimg"
                      />
                      < text
                        // className="col-9"
                        // className="protxt"
                        style={{  paddingLeft: "0.2rem" }}
                      >
                        {item.txt}
                      </ text>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMobile;
