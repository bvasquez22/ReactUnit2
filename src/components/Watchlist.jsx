import MovieCard from "./MovieCard";

const Watchlist = ({ watchlist, removeMovie }) => {
  const movieDisplay = watchlist.map((movie, index) => {
    return <MovieCard movie={movie} removeMovie={removeMovie} watchlist={watchlist}/>;
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
