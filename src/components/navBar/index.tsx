import React from 'react';
import Button from '../button';
import { UserAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContextType } from '../../types/AuthContextType';

const NavBar = () => {
  const { user, logOut } = UserAuth() as AuthContextType;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute z-[100] flex w-full items-center justify-between p-4 md:px-8">
      <Link to="/">
        <h1 className="cursor-pointer text-4xl font-normal uppercase text-red-600">Netflix</h1>
      </Link>
      {user?.email ? (
        <div className="flex gap-4">
          <Link to="/account">
            <Button>Account</Button>
          </Link>
          <Button variant="red" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link to="/login">
            <Button>Sign In</Button>
          </Link>
          <Link to="signup">
            <Button variant="red">Sign Up</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
