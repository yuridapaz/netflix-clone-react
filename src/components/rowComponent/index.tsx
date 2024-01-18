import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from '../movieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const RowComponent = ({ rowID, rowTitle, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const scrollLeft = () => {
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 200;
  };
  const scrollRight = () => {
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <>
      <h1 className="p-4 font-bold text-white md:px-8 md:text-xl">{rowTitle}</h1>
      <div className="group relative flex items-center ">
        <MdChevronLeft
          onClick={scrollLeft}
          className="absolute z-10 hidden h-full w-8 cursor-pointer bg-black text-white opacity-60 hover:opacity-90 group-hover:block md:w-12"
        />
        <div
          id={`slider` + rowID}
          className="no-scrollbar relative h-full w-full overflow-scroll scroll-smooth whitespace-nowrap  pl-2 md:pl-6"
        >
          {movies.map((movie, id) => (
            <MovieCard movie={movie} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={scrollRight}
          className="absolute right-0 z-10 hidden h-full w-8 cursor-pointer bg-black text-white opacity-60 hover:opacity-80 group-hover:block md:w-12"
        />
      </div>
    </>
  );
};

export default RowComponent;
