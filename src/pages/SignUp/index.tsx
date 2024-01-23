import React, { useState } from 'react';
import TextInput from '../../components/textInput';
import Button from '../../components/button';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();

  return (
    <div className="h-screen w-full">
      <img
        src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
        alt=""
        className="absolute hidden h-full w-full object-cover sm:block"
      />
      <div className="fixed left-0 top-0 h-screen w-full bg-black/60" />
      <div className="fixed z-50 w-full px-4 py-36">
        <div className="mx-auto h-[600px] max-w-[450px] bg-black/75 text-white ">
          <div className="mx-auto max-w-[320px] py-16">
            <h1 className="text-3xl font-bold"> Sign Up </h1>
            <form action="" className="flex w-full flex-col gap-6 py-8">
              <TextInput fullWidth type="email" placeholder="Email" />
              <TextInput
                fullWidth
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <Button variant="red" fullWidth>
                Sign Up
              </Button>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p className="">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>
                <p className="">Need help ?</p>
              </div>
              <p className="py-4">
                <span className="mr-2 text-gray-600">Already subscribed to Netflix?</span>
                <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
