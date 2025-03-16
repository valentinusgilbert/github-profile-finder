'use client'
import { useState } from 'react';
import { getRepoListByUsername } from '../api/repo';
import { Repo } from '../models/repo';

export const useRepo = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchRepos = async (username: string) => {
    console.log('Fetching repos for username:', username); // Added console log
    setLoading(true);
    setError(null);
    try {
      const repoData = await getRepoListByUsername(username);
      setRepos(repoData);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    repos,
    loading,
    error,
    fetchRepos,
    setRepos,
  };
};
