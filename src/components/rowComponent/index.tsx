import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from '../movieCard';

const RowComponent = ({ rowTitle, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h1 className="p-4 font-bold text-white md:text-xl">{rowTitle}</h1>
      <div className="relative flex items-center">
        <div
          id={`slider`}
          className="no-scrollbar relative h-full w-full overflow-scroll scroll-smooth whitespace-nowrap"
        >
          {movies.map((movie, id) => (
            <MovieCard movie={movie} key={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RowComponent;
