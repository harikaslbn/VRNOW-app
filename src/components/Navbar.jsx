import React,{ useState, useEffect }  from "react";
import logo from "../assets/logo1.gif";
import "./styles/Navbar.css";
import scrollbtn from "../assets/scroll-down1.gif";
import btn1 from "../assets/button.png";
import scbtn from "../assets/scbtn.gif";
import nav from "../assets/nav.png";

import Builders from "./Builders";
import Experience from "./Experience";
import Why from "./Why";
import Products from "./Products";
import Plans from "./Plans";
import Metaverse from "./Metaverse";
import Casestudy from "./Casestudy";

import ProductsMobile from "./ProductsMobile";
import ProductsTab from "./ProductsTab";

import Testimonials from "./Testimonials";
import Form from "./Form";
import Currentproject from "./Currentproject";
import Team from "./Team";

import Modalform from "./Forms/Modalfoms";
import { Modal } from "react-bootstrap";

const Navbar = () => {

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setScreenSize('mobile');
      } else if (width >= 481 && width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('large');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const [showModal1, setShowModal1] = useState(false);

  const handleShowModal1 = () => {
    setShowModal1(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  

  return (
    <div >
      <div className="maincont" style={{margin:"0"}}>
      <div className="navbarsec" style={{ marginLeft: "auto", marginRight: "auto" }}>
             <nav
          className="navbar navbar-expand-sm navwid"
          style={{ backgroundColor: "black", color: "white" ,position:"fixed",zIndex:"1000",top:0}}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" style={{ width: "5rem" }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ color: "white", backgroundColor: "black" }}
            >
             

              <img src={nav} style={{}}/>
            </button>
            

            <div
              className="navtxt collapse navbar-collapse "
              id="navbarSupportedContent"
              style={{
                // marginRight: "1rem",
                fontWeight: "bold",
                // fontSize: "0.8rem",
              }}
            >
              <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#products"
                    style={{ color: "white", paddingRight: "1rem" }}
                  >
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#experience-centers"
                    style={{ color: "white", paddingRight: "1rem" }}
                  >
                    Experience Centers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#metaverse"
                    style={{ color: "white", paddingRight: "1rem" }}
                  >
                    Metaverse
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    style={{ color: "white", paddingRight: "1rem" }}
                  >
                    Digital Twin
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#case-studies"
                    style={{ color: "white", paddingRight: "1rem" }}
                  >
                    Case Studies
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#contact"
                    style={{ color: "white", paddingRight: "1rem" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
        <div
          className="man-bg"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2
            className="slide-in-h2"
            style={{ paddingTop: "5rem", paddingLeft: "2rem" }}
          >
            Interactive 3D Solutions for Real Estate
          </h2>

          <div
            className="btns"
            style={{ padding: "3rem", paddingLeft: "2rem" }}
          >
            <button className="btn1" onClick={handleShowModal}>Book A Demo</button>
            <Modal show={showModal} 
          onHide={handleCloseModal} 
           dialogClassName="custom-modal-dialog"
            contentClassName="custom-modal-content" >
              <Modalform data1="Contact Our Experts to " data2="Book a Demo"  />
            </Modal>
            <button className="btn2" onClick={handleShowModal1}>
              Play Demo Video
             <img src={btn1} alt="img" style={{height:"1.2rem",width:"1.2rem",marginLeft:"0.5rem"}}/>
            
   
            </button>
            <Modal show={showModal1} 
          onHide={handleCloseModal1} 
           dialogClassName="custom-modal-dialog"
            contentClassName="custom-modal-content" >
              <Modalform data1="Contact Our Experts to " data2="Book a Demo"  />
            </Modal>
          </div>
        </div>

        <div style={{ backgroundColor: "black", textAlign: "center", }}>
          <img src={scrollbtn} className="scbtn" />
        </div>
        {/* <div style={{ backgroundColor: "black", textAlign: "center" }}>
          <img src={scbtn} className="scbtn" />
        </div> */}
      </div>
      </div>

      <Builders />
      <section id="experience-centers">
      <Experience /> 
      </section> 
      <Why />
      <section id="products">
        {screenSize === 'mobile' && <ProductsMobile />}
        {screenSize === 'tablet' && <ProductsTab />}
        {screenSize === 'large' && <Products />}
      </section>
      <Plans/>
      <section id="metaverse">
      <Metaverse/> 
      </section>
      <section id="case-studies">
      <Casestudy/> 
      </section>
      <Testimonials/>
      <Form/>
      <Currentproject/>
      <section id="contact">
      <Team/>
      </section>
      
    </div>
  );
};

export default Navbar;
