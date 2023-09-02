import React,{useState} from "react";
import "../styles/Form.css";
// import watsaap from "../assets/form/watsap.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modalform = ({data1,data2}) => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // request to the API
    fetch(
      "https://rj7oitjr1l.execute-api.us-east-1.amazonaws.com/dev/write/tech@HomzNOffiz/HomzNOffiz@123/homznoffiz_website_data/blogs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55IjoiSG9tek5PZmZpeiIsImlhdCI6MTY5MDM2NTQyN30.RtVMBuberUfUT6pO4OkYE-3-eYGuUT3lTtn8MNpJna8",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        toast.success("Form submitted successfully!");
        // alert("Form submitted ");
        // console.log(formData);

        // Clear  form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // alert("An error ");
        toast.error("An error occurred. Please try again later.");
      });
  };


  const [formClosed, setFormClosed] = useState(false);
  const handleCloseModal = () => {
    setFormClosed(true);
  };

  return (
   <>
     {formClosed ? null : (
        <div className="container-fluidn modalbg" >


        <button
          type="button"
          className="btn-close"
          data-bs-dismiss=""
          aria-label="Close"
          onClick={handleCloseModal}
          style={{
            backgroundColor: "white",

            marginLeft: "95%",
            marginTop: "0rem",
          }}
        ></button>

<h5
              style={{
                padding: "0.2rem",
                paddingTop: "0.7rem",
                fontSize: "15px",
                fontWeight: "bold",
                textAlign:"center",
                color:"black"
                
              }}
            >
             {data1} 
              <span  style={{
                display:"block",
                padding: "0.2rem",
                paddingTop: "0.7rem",
                fontSize: "18px",
                fontWeight: "bold",
                color:"black",
                textDecoration:"underline"
              }}>
               {data2}
               </span>
            </h5>

            
            {/* <h5
              style={{
                padding: "0.2rem",
                paddingTop: "0.7rem",
                fontSize: "15px",
                fontWeight: "bold",
                textAlign:"center",
                color:"black"
                
              }}
            >
              Contact Our Experts to know more about  
              <span  style={{
                display:"block",
                padding: "0.2rem",
                paddingTop: "0.7rem",
                fontSize: "18px",
                fontWeight: "bold",
                color:"black",
                textDecoration:"underline"
              }}>
                Cutting Edge Technology
               </span>
            </h5> */}

     
  <div
    className=""
    style={{
      width: "90%",
      marginTop:"0",
      marginLeft: "auto",
      marginRight: "auto",
      color:"white"
    }}
  >
   
      
      <div
        className="col-12 "
        style={{ paddingTop: "3rem", paddingBottom: "1rem" }}
      >


        <form className="row g-3"   onSubmit={handleSubmit}>
          <div className="col-6">
            <label
              for="name"
              className="form-label"
              style={{
                margin: "0",
                 fontSize: "90%",
                fontWeight: "bold",
              }}
            >
              Name
            </label>
             <input required 
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                backgroundColor: "#191919",
                color: "white",
                border: "0",
                borderRadius: "5px",
                margin: "0",
              }}
            />
          </div>
          <div className="col-6">
            <label
              for="phone"
              className="form-label"
              style={{
                margin: "0",
                 fontSize: "90%",
                fontWeight: "bold",
              }}
            >
              Phone Number
            </label>
             <input required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              id="phone"
              style={{
                backgroundColor: "#191919",
                color: "white",
                border: "0",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="col-12">
            <label
              for="email"
              className="form-label"
              style={{
                margin: "0",
                 fontSize: "90%",
                fontWeight: "bold",
              }}
            >
              Email
            </label>
             <input required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              id="email"
              placeholder=""
              style={{
                backgroundColor: "#191919",
                color: "white",
                border: "0",
                borderRadius: "5px",
              }}
            />
          </div>


          <div className="col-12">
            <label
              for="msg"
              className="form-label"
              style={{
                margin: "0",
                 fontSize: "90%",
                fontWeight: "bold",
              }}
            >
              Message
            </label>
            <textarea
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              cols="50"
              className="form-control"
              id="msg"
              placeholder=""
              style={{
                backgroundColor: "#191919",
                color: "white",
                border: "0",
                borderRadius: "5px",
              }}
            ></textarea>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn "
              style={{
                backgroundColor: " #4600B9",
                borderRadius: "8px",
                color: "white",
                 fontSize: "90%",
                padding: "0.6rem",
                fontWeight: "bold",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  
</div>
     )}
   </>
   
   
  );
};

export default Modalform;
