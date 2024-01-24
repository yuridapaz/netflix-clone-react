import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MovieDataType } from '../../types/MovieDataType';

type MovieCardProps = {
  movie: MovieDataType;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const like = false;
  return (
    <div className="relative inline-block w-[160px] cursor-pointer p-2  sm:w-[200px] md:w-[240px] lg:w-[280px]">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
        className="block h-auto w-full"
      />
      <div className="absolute left-0 top-0 h-full w-full text-white opacity-0 transition-all  hover:bg-black/75 hover:opacity-100">
        <p className="flex h-full items-center justify-center whitespace-normal text-xs font-bold  md:text-sm">
          {movie?.title}
        </p>
        <p className="absolute right-4 top-4 md:right-5 md:top-5">
          {like ? (
            <FaHeart className="h-4 w-4 md:h-6 md:w-6" />
          ) : (
            <FaRegHeart className="h-4 w-4 md:h-6 md:w-6" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
