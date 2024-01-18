import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from '../movieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const RowComponent = ({ rowTitle, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const scrollLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 200;
  };
  const scrollRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <>
      <h1 className="p-4 font-bold text-white md:text-xl">{rowTitle}</h1>
      <div className="group relative flex items-center">
        <MdChevronLeft
          onClick={scrollLeft}
          size={35}
          className="absolute z-10 hidden h-full  cursor-pointer bg-black text-white opacity-50 hover:opacity-70 group-hover:block"
        />
        <div
          id={`slider`}
          className="no-scrollbar relative h-full w-full overflow-scroll scroll-smooth whitespace-nowrap"
        >
          {movies.map((movie, id) => (
            <MovieCard movie={movie} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={scrollRight}
          size={35}
          className="absolute right-0 z-10 hidden  h-full cursor-pointer bg-black text-white opacity-50 hover:opacity-70 group-hover:block"
        />
      </div>
    </>
  );
};

export default RowComponent;
