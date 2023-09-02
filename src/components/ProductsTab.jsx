import React, { useState } from "react";
import "./styles/Products.css";

import tab from "../assets/products/tabframe.png";
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
import loccomp from "../assets/products/location/loccomp.png";
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
    name: "Showcase all collaterals",
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

const ProductsTab = () => {
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
          padding: "2rem",
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

          <h5 style={{fontSize:"1rem",fontWeight:"500"}}>
            Projects that gives you the best experience for your project
            launches
          </h5>
        </div>
        <div className="row">
          <div className="" style={{ width: "35%", marginRight: "0" }}>
            {products.map((product, index) => (
              <div
                // className="col-6"
                key={index}
                onClick={() => handleProductClick(index)}
                style={{cursor:"pointer"}}
              >
                <div
                  className={`${selectedProduct === index ? "selected" : ""} tabmargin`}
                  style={{
                    display: "flex",
                    backgroundColor: "#171616",
                    width: "90%",
                    // marginTop: "1.6rem",
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
                      marginRight: "0.5rem",
                    }}
                    className="proimg"
                  />
                
                  < text
                 
                    style={{
                      fontWeight: "500",
                    
                      letterSpacing: "0.2px",
                    }}
                  >
                    {product.name}
                  </ text>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginLeft: "0", width: "65%",position:"relative" }}>
            {selectedProductData && (
              < div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                < text style={{ textAlign: "center", paddingTop: "2rem",fontWeight:"bold" }}>
                  {selectedProductData.description}
                </ text>
                <img
                  src={selectedProductData.topimage}
                  alt="Top image"
                  className="topimgpos"
                  style={{ width: "20%", height: "6rem",marginBottom:"3%" }}
                />
                <div className="radigrbg" style={{ position: "relative" }}>
                  <img
                    src={tab}
                    style={{
                      // width: "60%",
                      // height: "13rem",
                      left: "16%",
                      position: "absolute",
                    }}
                    className="tabpro"
                  />
                  <img
                    src={selectedProductData.comp_img}
                    alt="Comp image"
                    style={{
                      // width: "58%",
                      // height: "12.5rem",
                      position: "absolute",
                      left: "16%",
                      
                     padding:"2%",
                      boxShadow: "0px -5px 30px 0 purple",
                      borderRadius:"10px"
                    }}
                    className="tabproin"
                  />
                </div>
              
                <div className ="tabmar" style={{ display: "flex", marginTop: "1rem" ,position:"absolute",
                // border:"2px red solid",
                left:"1rem"}}>
                  {selectedProductData.downpart.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        // width: "10rem",
                        marginRight: "0.2rem",
                        paddingTop: "1rem",
                        marginLeft:"0"
                      }}
                    >
                      <img
                        src={item.smicon}
                        alt={`Small Icon ${idx + 1}`}
                        // className="col-3"
                        // style={{ height: "2.5rem", width: "2.5rem" }}
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

export default ProductsTab;
