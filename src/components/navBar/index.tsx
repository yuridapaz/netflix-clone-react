import React from 'react';
import Button from '../button';

const NavBar = () => {
  return (
    <div className="absolute z-[100] flex w-full items-center justify-between p-4">
      <h1 className="cursor-pointer text-4xl font-normal uppercase text-red-600">Netflix</h1>
      <div className="flex gap-4">
        <Button>Sign In</Button>
        <Button variant="red">Sign Up</Button>
      </div>
    </div>
  );
};

export default NavBar;
