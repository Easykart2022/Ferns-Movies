import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Discover from './Discover/Discover';
import Homepage from './Homepage/Homepage';
import Latestmovies from './Latestmovies/Latestmovies';
import Navbar from './Navbar/Navbar';
import Popularmovies from './PopularMovies/Popularmovies';

function App() {
  return (
    <div>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/discover' element={<Discover/>} />
          <Route path='/popularmovies' element={<Popularmovies/>} />

          <Route path='/latestmovies' element={<Latestmovies/>} />


        </Routes>
   
    </div>
    
  );
}

export default App;
