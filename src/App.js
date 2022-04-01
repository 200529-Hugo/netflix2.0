// import logo from './logo.svg';
import './App.css';
import Row from "./Row.js"
import requests from "./requests.js";
import Banner from "./Banner.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        {/* <Link>home</Link> */}
        <Navbar />
       <Banner />
      <Row title="Netflix originals"
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow={true}
       /> 
      <Row title="Trendig now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedey Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries}/>
      <Footer />
    </div>
  );
}

export default App;