import React, { useEffect, useState } from "react";
import hand from "../assets/handpart.png";
import move from "../assets/movin.gif";
import name1 from "../assets/name 1.png";
import name2 from "../assets/name2.png";
import icon1 from "../assets/builicon1.png";
import icon2 from "../assets/builicon2.png";

import nam3 from "../assets/nam3.png";
import nam4 from "../assets/nam4.png";
import icon3 from "../assets/bl1.png";
import icon4 from "../assets/bl2.png";
import "./styles/Builders.css";


const Builders = () => {
  const [isVisible, setIsVisible] = useState(false);


  return (
   
      <div className="bulmain "  style={{margin:"0"}} id="clients">
        <div
          className="bulmain2"
          style={{
            // width: "77.77%",
            marginLeft: "auto",
            marginRight: "auto",
          
            
          }}
        >
          <h2
            className="build-text"
            style={{ color: "white", paddingTop: "2rem", 
            backgroundColor:"rgba(10, 9, 10, 0.77)",margin:"0", }}
          >
            Trusted by over 120+ Developers
          </h2>


<div className="container-fluid" style={{backgroundColor:"rgba(10, 9, 10, 0.77)"}}>
  <div className="row">
  <div className="col-4 handbg" style={{margin:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
           <div
              className={`handandbui ${isVisible ? "visible" : ""}`}
              style={{
                // border:"2px red solid",
                marginBottom:"55%",
                display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"
              }}
            >
              <img
                src={move}
                alt=""
                style={{
                  width: "120%",
               }}
              />
             
            </div>
        </div>
        <div  className="col-8" style={{marginTop:"auto",marginBottom:"auto"}}>
        <div
              className="companies"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
               marginTop:"auto",
               marginBottom:"auto"
               
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin:"0",
                    // border:"2px red solid"
                  }}
                >
                  <img src={icon1} style={{ width: "40%", height: "40%" }} />
                  <img
                    src={name1}
                    style={{
                      width: "60%",
                      height: "30%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <img src={icon2} style={{ width: "40%", height: "40%" }} />
                  <img
                    src={name2}
                    style={{
                      width: "60%",
                      height: "30%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin:"0",
                    // border:"2px red solid"
                  }}
                >
                  <img src={icon3} style={{ width: "40%", height: "40%" }} />
                  <img
                    src={nam3}
                    style={{
                      width: "60%",
                      height: "30%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <img src={icon4} style={{ width: "40%", height: "40%" }} />
                  <img
                    src={nam4}
                    style={{
                      width: "60%",
                      height: "30%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
              </div>
             <h5 style={{color:"white",marginLeft:"auto",marginRight:"50px",marginTop:"10px"}}>& More.....</h5> 
              {/* <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={icon1} style={{ width: "30%", height: "30%" }} />
                  <img
                    src={name1}
                    style={{
                      width: "50%",
                      height: "20%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "1rem",
                  }}
                >
                  <img src={icon2} style={{ width: "30%", height: "30%" }} />
                  <img
                    src={name2}
                    style={{
                      width: "50%",
                      height: "20%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={icon1} style={{ width: "30%", height: "30%" }} />
                  <img
                    src={name1}
                    style={{
                      width: "50%",
                      height: "20%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "1rem",
                  }}
                >
                  <img src={icon2} style={{ width: "30%", height: "30%" }} />
                  <img
                    src={name2}
                    style={{
                      width: "50%",
                      height: "20%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                   <img src={icon1} style={{ width: "30%", height: "30%" }} />
                  <img
                    src={name1}
                    style={{
                      width: "50%",
                      height: "20%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "1rem",
                  }}
                >
                  <img src={icon2} style={{ width: "30%", height: "30%" }} />
                  <img
                    src={name2}
                    style={{
                      width: "50%",
                      height: "20%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                   <img src={icon1} style={{ width: "30%", height: "30%" }} />
                  <img
                    src={name1}
                    style={{
                      width: "50%",
                      height: "20%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "1rem",
                  }}
                >
                  <img src={icon2} style={{ width: "30%", height: "30%" }} />
                  <img
                    src={name2}
                    style={{
                      width: "50%",
                      height: "20%",
                      marginLeft: "0.5rem",
                    }}
                  />
                </div>
              </div> */}
            </div>
        </div>
  </div>
</div>
         

       

        
        </div>
       
      </div>
  
  );
};

export default Builders;
