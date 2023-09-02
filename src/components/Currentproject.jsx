import React,{useState} from "react";
import "./styles/Current.css";

import cp1 from "../assets/current project/cp1.gif";
import cp2 from "../assets/current project/cp2.gif";
import cp3 from "../assets/current project/cp3.gif";
import cp4 from "../assets/current project/cp4.gif";
import cp5 from "../assets/current project/cp5.gif";
import cp6 from "../assets/current project/cp6.gif";

import Modalform from "./Forms/Modalfoms";
import { Modal } from "react-bootstrap";

const Currentproject = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="container-fluid curbg">
      <div
        className="plnbg1"
        style={{
          // width: "77.77%",
          marginLeft: "auto",
          marginRight: "auto",

          color: "white",
          //   height: "100vh",
          paddingTop: "2rem",
          paddingBottom: "1rem",
          //   backgroundColor: "#191919",.
          backgroundColor: "rgba(25, 25, 25, 0.25)",

          borderRadius: "18px",
          boxShadow: "0px 22px 3px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h2 style={{ textAlign: "center" ,fontWeight:"bold"}}>Have a current project in mind?</h2>

        <div className="row"
          style={{
            // display: "flex",
            // justifyContent:'space-between',
            // alignItems: "center",
          }}
        >
          <div className="col-12 col-md-3 order-2 order-md-1" style={{ textAlign: "center", marginLeft: "0",
          display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
            <h3  style={{fontWeight:"bold"}}>Talk To Us</h3>
            <button
              className="btn bookbtn"
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "80%",
                fontWeight: "bold",
                // width: "60%",
                margin:"0",
                padding: "0.6rem",
              }}
              onClick={handleShowModal}>Book a Demo</button>
              <Modal show={showModal} 
              onHide={handleCloseModal} 
               dialogClassName="custom-modal-dialog"
                contentClassName="custom-modal-content" >
                  <Modalform data1="Have a Project in Mind?" data2="Book a Demo" />
                </Modal>
          </div>
          <div className="col-12 col-md-9 order-1 order-md-2 grid-container" style={{justifyContent:"space-around",alignItems:"center" }}>
            <div
              class="grid-item"
              style={{
                display: "flex",
                justifyContent: "",
                alignItems: "center",
              }}
            >
              <img
             
                src={cp1}
                alt="img"
               
                className="projectimg"
                
              />
              <p
              className="projecttxt"
                 style={{
                 
                  fontWeight: "bold",
                  paddingTop: "1rem",
                }}
              >
                Virtual Tours
              </p>
            </div>
            <div
              class="grid-item"
              style={{
                display: "flex",
                justifyContent: "",
                alignItems: "center",
              }}
            >
              <img
                src={cp2}
                alt="img"
               
                className="projectimg"
              />
              <p
                 className="projecttxt"
                style={{
                 
                  fontWeight: "bold",
                  paddingTop: "1rem",
                }}
              >
                Augmented Reality
              </p>
            </div>
            <div
              class="grid-item"
              style={{
                display: "flex",
                justifyContent: "",
                alignItems: "center",
              }}
            >
              <img
                src={cp3}
                alt="img"
               
                className="projectimg"
              />
              <p
                 className="projecttxt"
                style={{
                 
                  fontWeight: "bold",
                  paddingTop: "1rem",
                }}
              >
                3D Walkthroughs
              </p>
            </div>
            <div
              class="grid-item"
              style={{
                display: "flex",
                justifyContent: "",
                alignItems: "center",
              }}
            >
              <img
                src={cp4}
                alt="img"
               
                className="projectimg"
              />
              <p
                 className="projecttxt"
                style={{
                 
                  fontWeight: "bold",
                  paddingTop: "1rem",
                }}
              >
                Metaverse
              </p>
            </div>{" "}
            <div
              class="grid-item"
              style={{
                display: "flex",
                justifyContent: "",
                alignItems: "center",
              }}
            >
              <img
                src={cp5}
                alt="img"
               
                className="projectimg"
              />
              <p
                 className="projecttxt"
                style={{
                 
                  fontWeight: "bold",
                  paddingTop: "1rem",
                }}
              >
                Virtual Reality
              </p>
            </div>{" "}
            <div
              class="grid-item"
              style={{
                display: "flex",
                justifyContent: "",
                alignItems: "center",
              }}
            >
              <img
                src={cp6}
                alt="img"
               
                className="projectimg"
              />
              <p
                 className="projecttxt"
                style={{
                 
                  fontWeight: "bold",
                  paddingTop: "1rem",
                }}
              >
                Experience Centers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currentproject;
