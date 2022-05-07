import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Discover.css";
import axios from "../axios";
import { API_KEY } from "../constants";
import { imageUrl } from "../constants";

const Discover = () => {
  const [action, setAction] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
      console.log(response.data);
      setAction(response.data.results);
    });
  }, []);
  return (
    <div>
      

      <div className="banner">
        <div className="tabs">
          <button onClick={() => navigate("/popularmovies")}>
            Popular Movies
          </button>
          <button onClick={() => navigate("/latestmovies")}>
            Latest Movies
          </button>
        </div>
        <div className="row">
          <h1 className="heading">Action</h1>
          <div className="posters">
            {action.map((obj) => {
              return (
                <div>
                  
                  <img
                  className="poster"
                  src={`${imageUrl + obj.backdrop_path}`}
                  alt=""
                />
                </div>
                
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
