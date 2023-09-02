import React,{useState} from "react";
import "./styles/Metaverse.css";
import gif1 from "../assets/metaverse/gif1.gif";
import gif2 from "../assets/metaverse/gif2.gif";
import gif3 from "../assets/metaverse/gif3.gif";
import boy from "../assets/metaverse/boy.png";
import Modalform from "./Forms/Modalfoms";
import { Modal } from "react-bootstrap";

const images = [gif1, gif2, gif3];

const Metaverse = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-fluid metabg" id="meta">
      <div className="container-fluid boyimg">
        <div
         className="plnbg"
          style={{
            paddingTop: "4rem",
            // width: "77.77%",
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
            paddingBottom: "2rem",
            position: "relative",
          }}
        >
         
          <div>
            <div
              style={{
                textAlign: "center",
                marginTop: "0rem",
                paddingBottom:"1rem"
              }}
            >
              <h2 style={{fontWeight:"bold"}}>Build Your Metaverse</h2>

              <h5 style={{ fontWeight:"500"}}>
                Our team specializes in creating immersive and collaborative
                spaces
              </h5>
            </div>
            <div className="container">
            <div className="row rowcon">
  <div className="col-12  col-md-5 col-lg-4 gifbg" style={{display:"flex",justifyContent:"center",alignItems:"center"}}></div>
  {/* <div className="col gifbg"></div> */}
  <div
    className="col-12  col-md-6 metcontent "
    // className="col metcontent"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding:"1rem"
      // paddingTop:"1rem"
    }}
  >
    <div>
      <p
        style={{
          letterSpacing: "3px",
          fontWeight: "bolder",
          margin: "0",
        }}
        className="metxt"
      >
        BE THE FIRST TO
      </p>
      <h4 style={{ letterSpacing: "0rem", fontWeight: "bold" }}>
        Transform your Project Experience
      </h4>
    </div>
    <div>
      <p style={{ marginTop: "2rem" }}>
        Metaverse has become more than a buzz word today. Companies around
        the globe are investing millions of dollars in their transformation
        towards the next digital evolution. Why stand back when we can help
        you with your Metaverse transformation?
      </p>

      <button className="learn-btn1"
      onClick={handleShowModal}>Learn more</button>
      <Modal show={showModal} 
      onHide={handleCloseModal} 
       dialogClassName="custom-modal-dialog"
        contentClassName="custom-modal-content" >
          <Modalform data1="Contact Our Experts to build your" data2="Metaverse" />
        </Modal>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metaverse;
