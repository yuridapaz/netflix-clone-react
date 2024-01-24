import { User, UserCredential } from 'firebase/auth';

export type AuthContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
};
