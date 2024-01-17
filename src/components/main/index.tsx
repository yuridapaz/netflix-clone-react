import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../../utils/request';
import Button from '../button';

const MainComponent = () => {
  const [movieList, setMovieList] = useState([]);

  const currentMovie = movieList[Math.floor(Math.random() * movieList.length)];

  console.log(currentMovie);

  useEffect(() => {
    const getMovieData = async () => {
      axios.get(requests.popularMovies).then((response) => {
        setMovieList(response.data.results);
      });
    };
    getMovieData();
  }, []);

  return (
    <div className="h-[550px] w-full text-white">
      <div className="h-full w-full">
        <div className="absolute h-[550px] w-full bg-gradient-to-r from-black"></div>
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original${currentMovie?.poster_path}`}
          alt={currentMovie?.title}
        />
        <div className="absolute top-[20%] w-full p-4 md:p-8">
          <h1 className="text-3xl font-bold md:text-5xl"> {currentMovie?.title} </h1>
          <div className="my-4 md:my-6">
            <Button variant="secondary">Play</Button>
            <Button variant="outline" className="ml-6">
              Watch Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
