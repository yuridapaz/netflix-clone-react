import React from 'react';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import { MdOutlinePlayCircle } from 'react-icons/md';
// import { IoIosAddCircleOutline } from 'react-icons/io';
// import { FiThumbsUp } from 'react-icons/fi';
import { MovieDataType } from '../../types/MovieDataType';

type MovieCardProps = {
  movie: MovieDataType;
  index: number;
};

const MovieCard = ({ movie, index }: MovieCardProps) => {
  const like = false;
  return (
    <>
      <div className="$ relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px] ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="block h-auto w-full"
        />
      </div>
    </>
  );
};

export default MovieCard;
