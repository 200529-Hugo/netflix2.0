import React, { useState, useEffect } from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "./Row.css";

//BaseURL for images
const base_url = "https://image.tmdb.org/t/p/original"

//Creates the info for the row with title, genre and if it is a large row (used in the Netflix Original row)
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //Gets movies of the genre given in the Row in App.js
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //sets style of the trailer
  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    }
  }

  //Checks if the movie has a trailer or not
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }

  //creates HTML of the row
  return (
    <div className="row">
      {/* Row genre title */}
      <h2>{title}</h2>
      <div className="row_posters">
        {/* Image with additional info like if it is a large poster and if it has a trailer with handleClick() */}
        {movies.map(movie => {
          return <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} />
        })}
      </div>
      {/* Trailer div */}
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
