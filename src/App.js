import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';

//This is the website
function App() {
	return (
		<div className="app">
			{/* This is the nav from Nav.js */}
			<Nav />

			{/* This is the banner from Banner.js */}
			<Banner />

			{/* This is the row with Netflix Originals from Row.js */}
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />

			{/* This is the row with trending movies from Row.js */}
			<Row title="Trending" fetchUrl={requests.fetchTrending} />

			{/* This is the row with top rated movies from Row.js */}
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

			{/* This is the row with acction movies from Row.js */}
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

			{/* This is the row with comedy movies from Row.js */}
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

			{/* This is the row with horror movies from Row.js */}
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

			{/* This is the row with romantic movies from Row.js */}
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

			{/* This is the row with documentaries from Row.js */}
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

			{/* This is the footer from footer.js */}
			<Footer />
		</div>
	);
}

export default App;
