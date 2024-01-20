import React from 'react';
import MainComponent from '../../components/main';

import RowComponent from '../../components/rowComponent';
import requests from '../../utils/request';

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
