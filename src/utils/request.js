const requests = {
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_KEY_ADRRESS}&language=en-US&page=1`,
  topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_KEY_ADRRESS}&language=en-US&page=1`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_KEY_ADRRESS}&language=en-US&page=1`,
};

export default requests;
