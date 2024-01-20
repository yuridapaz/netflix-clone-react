import React, { useEffect } from 'react';
import MainComponent from '../../components/main';
import MovieCard from '../../components/movieCard';
import RowComponent from '../../components/rowComponent';
import requests from '../../utils/request';

const filme = {
  adult: false,
  backdrop_path: '/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg',
  genre_ids: [36, 10752, 18],
  id: 753342,
  original_language: 'en',
  original_title: 'Napoleon',
  overview:
    'An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.',
  popularity: 2367.318,
  poster_path: '/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg',
  release_date: '2023-11-22',
  title: 'Napoleon',
  video: false,
  vote_average: 6.519,
  vote_count: 1226,
};

const Home = () => {
  return (
    <div className="h-full min-h-screen w-full">
      <MainComponent />
      <RowComponent rowID="1" fetchURL={requests.popularMovies} rowTitle={'Popular Movies'} />
      <RowComponent rowID="2" fetchURL={requests.topRatedMovies} rowTitle={'Top Rated Movies'} />
      <RowComponent rowID="3" fetchURL={requests.upcomingMovies} rowTitle={'Upcoming Movies'} />
    </div>
  );
};

export default Home;
