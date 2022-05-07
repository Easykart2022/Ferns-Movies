import React, { useEffect, useState } from "react";
import "./Popularmovies.css";
import axios from "../axios";
import { API_KEY } from "../constants";
import { imageUrl } from "../constants";

const Popularmovies = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
      console.log(response.data.results[0]);
      setMovie(response.data.results);
    });
  }, []);

  return (
    
    <div>
      
      <h1>Popular Movie</h1>
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
              <p className="card-text">Released on : {movie ? obj.release_date : ""}</p>
              <p>Vote Average: {movie ? obj.vote_average : ""}</p>
              <p>Vote Count: {movie ? obj.vote_count : ""}</p>
              </div>
              <button className="btn btn-primary">
                Click to View
              </button>
            
          
         </div>
        );
      })}
      </div>
    </div>
  );
};

export default Popularmovies;
