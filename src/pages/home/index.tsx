import React, { useEffect } from 'react';
import MainComponent from '../../components/main';
import requests from '../../utils/request';
import axios from 'axios';

const Home = () => {
  return (
    <div className="h-full min-h-screen w-full">
      <MainComponent />
    </div>
  );
};

export default Home;
