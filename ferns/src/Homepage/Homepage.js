import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    
    <div className="background col-md-12">
     
        <div className="row">
           <div className="welcome">
            <h3>Welcome to Mern Movies</h3>
            <p>Choose your favorite movie</p>
          </div>
        
        </div>
          
      
      <button onClick={() => navigate("/discover")}>Click to continue</button>
    </div>
  );
};

export default Homepage;
