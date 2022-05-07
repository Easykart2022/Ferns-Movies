import React, { useEffect, useState } from "react";
import "./Latestmovies.css";
import axios from "../axios";
import { API_KEY } from "../constants";
import { imageUrl } from "../constants";

const Latestmovies = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`).then((response) => {
      console.log(response.data);
      setMovie(response.data.results);
    });
  }, []);

  return (
    <div>
      <h1>Latest Movie</h1>
      <div className="row">
      {movie.map((obj) => {
        return (
         
            <div className="card col-md-3 col-10">
            <img
              className="card-img-top"
              src={`${imageUrl + obj.backdrop_path}`}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{movie ? obj.title : ""}</h5>
              <p className="card-text">{movie ? obj.overview : ""}</p>
              </div>
              <a href="#" className="btn btn-primary">
                Click to View
              </a>
            
          
         </div>
        );
      })}
      </div>
    </div>
  );
};

export default Latestmovies;
