'use client'
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Repo } from '../models/repo';
import { getRepoListByUsername, getRepoReadme } from '../api/repo';

interface RepoContextType {
  repos: Repo[];
  loading: boolean;
  error: Error | null;
  selectedRepoName: string | null;
  readme: string | null;
  isSeeRepoDetail: boolean;
  setSeeRepoDetail: (value: boolean) => void;
  fetchRepos: (username: string) => Promise<void>;
  fetchRepoReadme: (owner: string, repo: string) => Promise<void>;
  setRepos: (repos: Repo[]) => void;
  setSelectedRepoName: (repo: string) => void;
  setReadme: (readme: string | null) => void;
}

const RepoContext = createContext<RepoContextType | undefined>(undefined);

export const RepoProvider = ({ children }: { children: ReactNode }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [selectedRepoName, setSelectedRepoName] = useState<string | null>(null);
  const [readme, setReadme] = useState<string | null>(null);
  const [isSeeRepoDetail, setSeeRepoDetail] = useState(false);

  const fetchRepos = async (username: string) => {
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

  const fetchRepoReadme = useCallback(async (owner: string, repo: string) => {
    setLoading(true);
    try {
      const readmeData = await getRepoReadme(owner, repo);
      const decodedContent = atob(readmeData.content);
      setReadme(decodedContent);
      console.log(readme)

    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <RepoContext.Provider value={{ repos, loading, error, selectedRepoName, readme, isSeeRepoDetail, setSeeRepoDetail, fetchRepos, fetchRepoReadme, setRepos, setSelectedRepoName, setReadme }}>
      {children}
    </RepoContext.Provider>
  );
};

export const useRepoContext = () => {
  const context = useContext(RepoContext);
  if (!context) {
    throw new Error('useRepoContext must be used within a RepoProvider');
  }
  return context;
};
