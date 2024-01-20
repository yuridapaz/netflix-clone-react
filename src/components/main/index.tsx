import axios from 'axios';
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import requests from '../../utils/request';
import Button from '../button';

type MovieListDataType = {};

type MainComponentProps = {
  // movieList: ;
  // setMovieList: Dispatch<SetStateAction<MovieListDataType | undefined>>;
  // currentMovie: ;
  // truncateString: (str: string, size: number) => Promise<string>;
};

const MainComponent = () => {
  const [movieList, setMovieList] = useState([]);
  const currentMovie = movieList[Math.floor(Math.random() * movieList.length)];

  const truncateString = (str: string, size: number) => {
    if (str?.length > size) return str.slice(0, size) + '...';
    return str;
  };

  useEffect(() => {
    const getMovieData = async () => {
      axios.get(requests.popularMovies).then((response) => {
        setMovieList(response.data.results);
      });
    };
    getMovieData();
  }, []);

  return (
    <div className="h-[550px] w-full text-white  md:h-[600px] lg:h-[650px]">
      <div className="h-full w-full">
        <div className=" absolute h-[550px] w-full bg-gradient-to-r from-black md:h-[600px] lg:h-[650px]"></div>
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`}
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
          <p className="text-sm text-gray-400"> Released: {currentMovie?.release_date} </p>
          <p className="w-full py-2 text-gray-200 md:max-w-[70%] md:text-lg lg:max-w-[50%] xl:max-w-[35%]">
            {truncateString(currentMovie?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
