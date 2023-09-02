import React,{useState} from "react";
import yes from "../assets/plans/yes.png";
import no from "../assets/plans/no.png";

import "./styles/Plans.css";
import Planform from "./Forms/Planfoms";
import { Modal } from "react-bootstrap";


const Plans = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const [showModal1, setShowModal1] = useState(false);

  const handleShowModal1 = () => {
    setShowModal(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };
// ---------
  const [showModal2, setShowModal2] = useState(false);

  const handleShowModal2 = () => {
    setShowModal2(true);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };
  // --------

  const [showModal3, setShowModal3] = useState(false);

  const handleShowModal3 = () => {
    setShowModal3(true);
  };

  const handleCloseModal3 = () => {
    setShowModal3(false);
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div
      className="plnbg"
        style={{
          padding:"2rem",
          
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
          //   height: "100vh",
          //   border: "2px red solid",
            // position: "relative",
        }}
      >
        <div style={{ display: "flex"}}>
          <div
            className="plan"
            style={{
              width: "30%",
              marginTop:"3rem",
              // height:"120%"
              // height: "15rem",
              // position:"absolute",
              // top:10,
              // left:"110%"
            }}
          ></div>
          <div  className="productsplan" style={{ textAlign: "center",marginTop:"4rem",paddingBottom:"2rem" }}>
            <h2 style={{fontWeight:"bold"}}>Product Plans</h2>

            <h5 style={{fontWeight:"500"}} >
              Essential and Advanced, choose the suitable plan for your choice
            </h5>
          </div>
        </div>
        <div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th style={{ backgroundColor: "rgba(25, 25, 25, 0.50)" ,borderTopLeftRadius:"0.8rem",borderTopRightRadius:"0.8rem"}}>
                    <h5 style={{ marginBottom: "1rem" }}>Essential</h5>
                    <button
                      style={{
                        backgroundColor: "#4600B9",
                        borderRadius: "6px",
                        padding: "5px",
                        color: "white",
                       
                        fontWeight: "bold",
                        border: "0",
                        // width:"60%"
                      }}
                      onClick={handleShowModal}
                      >
                        Book a demo
                      </button>
  
                      <Modal show={showModal} 
            onHide={handleCloseModal} 
             dialogClassName="custom-modal-dialog"
              contentClassName="custom-modal-content" >
                <Planform  />
              </Modal> 
                    <br />
                    <button
                      style={{
                        backgroundColor: "#191919",
                        borderRadius: "6px",
                        padding: "5px",
                        color: "white",
                        // width: "70%",
                        fontWeight: "500",
                        border: "0",
                        marginTop: "0.5rem",
                      }}
                      onClick={handleShowModal3}
                    >
                      View Essential demo
                    </button>
                    <Modal show={showModal3} 
            onHide={handleCloseModal3} 
             dialogClassName="custom-modal-dialog"
              contentClassName="custom-modal-content" >
                <Planform  />
              </Modal> 
                  </th>
                  <th style={{ }}>
                    <h5 style={{ marginBottom: "1rem" }}>Advanced</h5>
                    <button
                      style={{
                        backgroundColor: "#4600B9",
                        borderRadius: "6px",
                        padding: "5px",
                        color: "white",
                       
                        fontWeight: "bold",
                        border: "0",
                        // width:"60%"
                      }}
                      onClick={handleShowModal1}
                      >
                        Book a demo
                      </button>
  
                      <Modal show={showModal1} 
            onHide={handleCloseModal1} 
             dialogClassName="custom-modal-dialog"
              contentClassName="custom-modal-content" >
                <Planform />
              </Modal> 
                    <br />
                    <button
                      style={{
                        backgroundColor: "#191919",
                        borderRadius: "6px",
                        padding: "5px",
                        color: "white",
                        // width: "70%",
                        fontWeight: "500",
                        border: "0",
                        marginTop: "0.5rem",
                      }}
                      onClick={handleShowModal2}
                    >
                      View Advanced demo
                    </button>
                    <Modal show={showModal2} 
            onHide={handleCloseModal2} 
             dialogClassName="custom-modal-dialog"
              contentClassName="custom-modal-content" >
                <Planform />
              </Modal> 
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>Virtual Sales Tool</h6>
                    <p style={{ color: "grey" }}>
                      (Voice and Video conferencing add on for remote sales
                      pitches)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    Upto 30 Users
                  </td>
                  <td style={{ width: "25%" }}>Upto 100 Users </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Showcase All Sales Collaterals in One Place
                    </h6>
                    <p style={{ color: "grey" }}>
                      (Voice and Video conferencing add on for remote sales
                      pitches)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>Admin Dashboard</h6>
                    <p style={{ color: "grey" }}>
                      (Central View to manage your projecr Colleterals)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>Powerful Analytics</h6>
                    <p style={{ color: "grey" }}>
                      (Usage, Device and Engagemenet Analytics )
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Online Shareable Link{" "}
                    </h6>
                    <p style={{ color: "grey" }}>
                      (Link to share with home buyers)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>Website Embed Code</h6>
                    <p style={{ color: "grey" }}>
                      (Integrate to your website)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      360 Drown Shoot On Site{" "}
                    </h6>
                    <p style={{ color: "grey" }}>
                      (Pana from multiple sides of the project)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Interactive Masterplan In 3D
                    </h6>
                    <p style={{ color: "grey" }}>
                      (3D Project elevation embeddedon 360 Drown Image)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Floorplan Viewer With Compare Feature
                    </h6>
                    <p style={{ color: "grey" }}>
                      (pdf,jpg or png shared by client)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Neighbourhood Interractive Maps
                    </h6>
                    <p style={{ color: "grey" }}>
                      (Interactive nearby landmarks with routes)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>Offline Version</h6>
                    <p style={{ color: "grey" }}>
                      (Take the product offline for showcase)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Balcony Views From Different Floors
                    </h6>
                    <p style={{ color: "grey" }}>
                      (View balcony views)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Isometric Floor Plan View
                    </h6>
                    <p style={{ color: "grey" }}>
                      (Bird's eye view of uint plan)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                     
                      fontWeight: "bold",
                    }}
                  >
                    2 Unit Plans included;
                    <br /> more at additional cost
                  </td>
                  <td
                    style={{
                      width: "25%",
                     
                      fontWeight: "bold",
                    }}
                  >
                    All Units{" "}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      360 Virtual Tour of Interiors
                    </h6>
                    <p style={{ color: "grey" }}>
                      (High resolution Static renders & 360 Virtual tour)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                     
                      fontWeight: "bold",
                    }}
                  >
                    2 Unit Plans included;
                    <br /> more at additional cost
                  </td>
                  <td
                    style={{
                      width: "25%",
                     
                      fontWeight: "bold",
                    }}
                  >
                    All Units
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Amenities 3D Renders and 360 Renders
                    </h6>
                    <p style={{ color: "grey" }}>
                      (Static Renders and Amenities Virtual tour)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={no} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>Complete Project 3D</h6>
                    <p style={{ color: "grey" }}>
                      (Fully Interactive Detailed Project 3D)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={no} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Augmented Reality(AR) View
                    </h6>
                    <p style={{ color: "grey" }}>
                      (AR Floorplans and Project view)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={no} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Virtual Reality Viewing
                    </h6>
                    <p style={{ color: "grey" }}>
                      (VR headsets support for content)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={no} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>Touchscreen Support</h6>
                    <p style={{ color: "grey" }}>
                      (Support on touchscreen installation & Hardware)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={no} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>Complete Amenities 3D</h6>
                    <p style={{ color: "grey" }}>
                      (Fully interactive & immersive Amenities 3D view)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={no} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Project Walkthrough Video
                    </h6>
                    <p style={{ color: "grey" }}>
                      (Video walkthrough based on Script)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                    }}
                  >
                    <img src={no} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <h6 style={{ marginBottom: "0" }}>
                      Exterior And Interior Renders From Application
                    </h6>
                    <p style={{ color: "grey" }}>
                      (High res renders for marketing collaterals)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      backgroundColor: "rgba(25, 25, 25, 0.50)",
                      borderBottomLeftRadius:"0.8rem",
                      borderBottomRightRadius:"0.8rem"
                    }}
                  >
                    <img src={no} style={{ width: "1.5rem" }} />
                  </td>
                  <td style={{ width: "25%" }}>
                    <img src={yes} style={{ width: "1.5rem" }} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
