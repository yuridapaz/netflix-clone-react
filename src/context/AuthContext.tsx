import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

interface IUser {
  email: string;
  password: string;
}

export type AuthContextType = {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  signUp: (email: string, password: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
};

type ContextProps = {
  children: string | JSX.Element | JSX.Element[];
};

export const AuthContext = React.createContext<AuthContextType | {}>({});

export const AuthContextProvider = ({ children }: ContextProps) => {
  const [user, setUser] = React.useState<IUser | {}>({});

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

export function UserAuth() {
  return useContext(AuthContext);
}
