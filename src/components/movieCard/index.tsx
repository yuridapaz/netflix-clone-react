import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
  const like = false;
  return (
    <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
        className="block h-auto w-full"
      />
      <div className="absolute left-0 top-0 h-full w-full text-white opacity-0 transition-all  hover:bg-black/75 hover:opacity-100">
        <p className="flex h-full items-center justify-center whitespace-normal text-xs font-bold  md:text-sm">
          {movie?.title}
        </p>
        <p className="absolute right-2 top-2 md:right-4 md:top-4">
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
