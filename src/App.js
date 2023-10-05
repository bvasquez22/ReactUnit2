// import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";
import axios from "axios";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => setWatchlist([...watchlist, movie]);
  const removeMovie = (movie) => {
    const newState = watchlist.filter((movies) => {
      return movies !== movie;
    });
    setWatchlist(newState);
  };

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          addMovie={addMovie}
          removeMovie={removeMovie}
          movieList={movieList}
          page={page}
          setPage={setPage}
          watchlist={watchlist}
        />
        <Watchlist watchlist={watchlist} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
