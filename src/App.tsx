import React from 'react';
import TextInput from './components/textInput';
import MovieCard from './components/movieCard';
import NavBar from './components/navBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
