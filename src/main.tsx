import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/index';
import AuthContextProvider from './context/AuthContext.js';
import HomePage from './pages/Home/index.js';
import LoginPage from './pages/Login/index.js';
import SignupPage from './pages/SignUp/index.js';
import AccountPage from './pages/Account/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
    ],
  },

  //TODO: Sign in
  //TODO: Sign up
  //TODO: Movie Description ? Maybe an modal.
  //TODO: Movie Page and TV Show Page
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
);
