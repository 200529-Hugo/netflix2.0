import React,{ useState, useEffect } from "react"
import axios from "./axios.js";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"

const base_url="http://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}){
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
        autoplay: 1,

        }
    }
    const handleClick = (movie) => {
        console.log("hello")
        var hover = document.getElementById("hover");
        hover.style.display = "block";
        if (trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || "")
            .then(url =>{
                const urlParams = new URLSearchParams (new  URL(url).search);
                setTrailerUrl(urlParams.get("v"))

            }).catch((error)=>console.log(error))
        }
    }

    return(
        <div class="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie =>(
                    
                <img key={movie.id} onClick={() => handleClick(movie)} class={`image ${isLargeRow && "imageLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                
            ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}

        </div>
    )
}
export default Row
