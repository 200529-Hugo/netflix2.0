import React from "react";

const KEY_API = "4a3df646f07f4da444876af8342211e9"
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const TRAILER_API = "http://api.themoviedb.org/3/movie/"

const Movie = ({id, title, poster_path, overview, vote_average}) => (
    <div className="movie">
        <script>
            TRAILER_API+id+"/videos?api_key="+ KEY_API
        </script>
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
            {id}
            {TRAILER_API+id+"/videos?api_key="+ KEY_API}
            <iframe src={test} title=""></iframe>
        </div>
    </div>
)


export default Movie