import React from 'react';
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
