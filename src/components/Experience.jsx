import React ,{useState} from "react";
import eye from "../assets/eye1.gif";
import globe from "../assets/globe.gif";
import man from "../assets/man.png";
import "./styles/Experience.css";
import li from "../assets/li-item.gif";
import Modalform from "./Forms/Modalfoms";
import { Modal } from "react-bootstrap";


const Experience = () => {

  const [isDetailsVisible, setIsDetailsVisible] = useState(true);

  const toggleDetails = () => {
    setIsDetailsVisible(true);
    setIsDetailsVisibleLi1(false);
    setIsDetailsVisibleLi2(false);
    setIsDetailsVisibleLi3(false);
  };

  const [isDetailsVisibleLi1, setIsDetailsVisibleLi1] = useState(false);

  const toggleDetailsLi1 = () => {
    setIsDetailsVisibleLi1(true);
    setIsDetailsVisibleLi2(false);
    setIsDetailsVisibleLi3(false);
    setIsDetailsVisible(false)
  };

  const [isDetailsVisibleLi2, setIsDetailsVisibleLi2] = useState(false);

  const toggleDetailsLi2 = () => {
    setIsDetailsVisibleLi2(true);
    setIsDetailsVisibleLi1(false);
    setIsDetailsVisibleLi3(false);
    setIsDetailsVisible(false)
  };

  const [isDetailsVisibleLi3, setIsDetailsVisibleLi3] = useState(false);

  const toggleDetailsLi3 = () => {
    setIsDetailsVisibleLi3(true);
    setIsDetailsVisibleLi1(false);
    setIsDetailsVisibleLi2(false);
    setIsDetailsVisible(false)
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className="expe-bg container-fluid"
      style={{
        textAlign: "center",
        color: "white",
        paddingTop: "2rem",
        position: "relative",
       
        
      }}
    >


      <h2 className="exptxt" style={{ fontWeight: "bold" }}>
        Experience centers
      </h2>
      <h5
        className="trsnpara"
        style={{
          padding: "0.5rem",
          display: "block",
          cursor: "pointer" 
        }}
      >
        Transform your sales with cutting edge technology
      </h5>
     
      <div className="row heisec"  style={{paddingBottom:"0rem"}}>
        <div
          // className="col-sm-6 col-md-5"
          className="col-7 expcaptions"
          style={{
            // border: "2px red solid",
            // width: "35%",
            // marginLeft: "5%",
            textAlign: "left",
          }}
        >
          <div >

          <div style={{ marginTop: "0rem" }}>
              <span className="eye"></span>

              <h5 style={{display:"inline", 
              fontWeight: "bold", color: "black", cursor: "pointer"  }} onClick={toggleDetails} >
            Projection Mapping
          </h5>
          {isDetailsVisible && (
           <>
          <ul
            className="custom-list"
            style={{
              marginTop: "1%",
              width: "80%",
              // fontSize: "90%",
              marginLeft: "20%",
              color: "black",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            <li> 
            {/* <img src={li} style={{height:"10%",width:"3%",borderRadius:"50px"}}/> */}
              Digital life Miniature Model</li>
            <li>Projects & Amenities Highlights</li>
            <li>Day & Night View Simulation</li>
          </ul>

          <button className="learn-btn"  onClick={handleShowModal}>Learn more</button>
          <Modal show={showModal} 
          onHide={handleCloseModal} 
           dialogClassName="custom-modal-dialog"
            contentClassName="custom-modal-content" >
              <Modalform data1="Contact Our Experts to know more about" data2="Cutting Edge Technology"  />
            </Modal>
           </> )}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <span className="eye"></span>

              <h5
                style={{
                  display:"inline",
                  
                  fontWeight: "bold",
                  cursor: "pointer" ,
                  color: "black",
                }}
                onClick={toggleDetailsLi1}
              >
                Smart Displays
              </h5>

              {isDetailsVisibleLi1 && (
           <>
          <ul
            className="custom-list"
            style={{
              marginTop: "1%",
              width: "80%",
              fontSize: "90%",
              marginLeft: "20%",
              color: "black",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            <li> 
            {/* <img src={li} style={{height:"10%",width:"3%",borderRadius:"50px"}}/> */}
              Present with Complete Control</li>
            <li>Large Scale Viewing Experience</li>
            <li>Get Better Engagement</li>
          </ul>

         
          <button className="learn-btn"  onClick={handleShowModal}>Learn more</button>
          <Modal show={showModal} 
          onHide={handleCloseModal} 
           dialogClassName="custom-modal-dialog"
            contentClassName="custom-modal-content" >
              <Modalform data1="Contact Our Experts to know more about" data2="Cutting Edge Technology"  />
            </Modal> </> )}
            </div>
            <div style={{ marginTop: "2rem" }}>
              <span className="eye"></span>
             
              <h5
                style={{
                  display:"inline",
                  
                  fontWeight: "bold",
                  color: "black",
                  cursor: "pointer" 
                }}
                onClick={toggleDetailsLi2}
              >
               Controller Experience
              </h5>
              {isDetailsVisibleLi2 && (
           <>
          <ul
            className="custom-list"
            style={{
              marginTop: "1%",
              width: "80%",
              fontSize: "90%",
              marginLeft: "20%",
              color: "black",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            <li> 
            {/* <img src={li} style={{height:"10%",width:"3%",borderRadius:"50px"}}/> */}
              High end multi touch Experience</li>
            <li>Gamified Project exploration</li>
            <li>4K quality content</li>
          </ul>

         
          <button className="learn-btn"  onClick={handleShowModal}>Learn more</button>
          <Modal show={showModal} 
          onHide={handleCloseModal} 
           dialogClassName="custom-modal-dialog"
            contentClassName="custom-modal-content" >
              <Modalform data1="Contact Our Experts to know more about" data2="Cutting Edge Technology"  />
            </Modal></> )}

            </div>
            <div style={{ marginTop: "2rem" }}>
              <span className="eye"></span>
             
              <h5
                style={{
                  display:"inline",
                  
                  fontWeight: "bold",
                  color: "black",
                  cursor: "pointer" 
                }}
                onClick={toggleDetailsLi3}
              >
                Virtual Reality Experience
              </h5>

              {isDetailsVisibleLi3 && (
           <>
          <ul
            className="custom-list"
            style={{
              marginTop: "1%",
              width: "80%",
              fontSize: "90%",
              marginLeft: "20%",
              color: "black",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            <li> 
            {/* <img src={li} style={{height:"10%",width:"3%",borderRadius:"50px"}}/> */}
              Oculus Quest 2 VR experience</li>
            <li>Tablet view for sales control</li>
            <li>Real scale interior showcase</li>
          </ul>

          
          <button className="learn-btn"  onClick={handleShowModal}>Learn more</button>
          <Modal show={showModal} 
          onHide={handleCloseModal} 
           dialogClassName="custom-modal-dialog"
            contentClassName="custom-modal-content" >
              <Modalform data1="Contact Our Experts to know more about" data2="Cutting Edge Technology" />
            </Modal> </> )}
            </div>
          </div>
        </div>
        <div 
        // className="col-xs-4 col-md-5 expbg" 
        className="col-4 expbg"
        style={{paddin:"0",margin:"0"}} >
        {/* <div className="video-background">
      <video autoPlay loop muted>
      <source src={video} type="video/mp4" /> 
      </video>
     </div> */}
         
        </div>
      </div>
    </div>
  );
};

export default Experience;
