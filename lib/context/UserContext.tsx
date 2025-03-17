'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../models/user';
import { getUserByUsername } from '../api/user';
interface UserContextType {
  user: User | null;
  loading: boolean;
  error: Error | null;
  fetchUser: (username: string) => Promise<void>;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchUser = async (username: string) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await getUserByUsername(username);
      setUser(userData);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, error, fetchUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
