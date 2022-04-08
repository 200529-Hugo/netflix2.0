import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import "./Banner.css"

//function to make the big banner
function Banner() {
  const [movie, setMovie] = useState([]);

  //Gets data from api
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  //Places dots if text is too long
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  //The HTML of the banner
  return (
    <header className="banner"
      style={{
        //Image of banner
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {/* Gets the name of the movie */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* Cuts of the description if it is over 150 characters */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>

  )
}

export default Banner
