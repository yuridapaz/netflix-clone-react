import React from 'react';
import TextInput from '../../components/textInput';
import Button from '../../components/button';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContextType, UserAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const { logIn } = UserAuth() as AuthContextType;
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

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
            <h1 className="text-3xl font-bold"> Sign In </h1>
            <form action="" className="flex w-full flex-col gap-6 py-8" onSubmit={handleLogin}>
              <TextInput
                fullWidth
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextInput
                fullWidth
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="red" fullWidth>
                Sign In
              </Button>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p className="">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>
                <p className="">Need help ?</p>
              </div>
              <p className="py-4">
                <span className="mr-2 text-gray-600">New to Netflix?</span>
                <Link to="/login">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
