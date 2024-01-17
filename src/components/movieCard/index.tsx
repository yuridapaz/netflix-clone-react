import React from 'react';

const MovieCard = () => {
  return (
    <div className="relative inline-block w-[160px] cursor-pointer sm:w-[200px] md:w-[240px] lg:w-[280px]">
      <img src="" alt="" className="block h-auto w-full" />
      <div className="absolute left-0 top-0 h-full w-full text-white opacity-0 transition-all  hover:bg-black/75 hover:opacity-100">
        <p className="flex h-full items-center justify-center whitespace-normal text-xs font-bold md:text-sm">
          Interstellar
        </p>
        <p className="absolute right-2 top-2 md:right-4 md:top-4">🩶</p>
      </div>
    </div>
  );
};

export default MovieCard;
