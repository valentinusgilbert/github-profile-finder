'use client'
import { useState } from 'react';
import { getUserByUsername } from '../api/user';
import { User } from '../models/user';

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchUser = async (username: string) => {
    console.log('Fetching user with username:', username); // Added console log
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

  return {
    user,
    loading,
    error,
    fetchUser,
    setUser,
  };
};
