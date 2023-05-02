import React from 'react';

const MovieCard = ({ movie, addMovie, list, removeMovie }) => {
 const inWatchlist = list && list.filter((mov) => mov.id === movie.id);
 
const button = inWatchlist && inWatchlist.length === 0 ? (
    <button onClick={() => addMovie(movie)}>Add to List</button>
) : (
    <button onClick={() => removeMovie(movie)}>Remove</button>
);

 return (
  <div className="movie-card">
   <div>
   <img  alt="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
    <h3>{movie.original_title}</h3>
   </div>
  {button}
  </div>
 );
};

export default MovieCard;
