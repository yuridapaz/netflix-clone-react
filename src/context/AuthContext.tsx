import React, { useContext, useEffect } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { AuthContextType } from '../types/AuthContextType';

type ContextProps = {
  children: string | JSX.Element | JSX.Element[];
};

export const AuthContext = React.createContext<AuthContextType | {}>({});

export const AuthContextProvider = ({ children }: ContextProps) => {
  const [user, setUser] = React.useState<User | {}>({});

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
