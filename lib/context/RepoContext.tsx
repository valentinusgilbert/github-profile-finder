'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Repo } from '../models/repo';
import { getRepoListByUsername, getRepoReadme } from '../api/repo';

interface RepoContextType {
  repos: Repo[];
  loading: boolean;
  error: Error | null;
  selectedRepo: string | null;
  readme: string | null;
  isSeeRepoDetail: boolean;
  setSeeRepoDetail: (value: boolean) => void;
  fetchRepos: (username: string) => Promise<void>;
  fetchRepoReadme: (owner: string, repo: string) => Promise<void>;
  setRepos: (repos: Repo[]) => void;
}

const RepoContext = createContext<RepoContextType | undefined>(undefined);

export const RepoProvider = ({ children }: { children: ReactNode }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
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

  const fetchRepoReadme = async (owner: string, repo: string) => {
    setLoading(true);
    setError(null);
    try {
      const readmeData = await getRepoReadme(owner, repo);
      setReadme(readmeData);
      setSelectedRepo(repo);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RepoContext.Provider value={{ repos, loading, error, selectedRepo, readme, isSeeRepoDetail, setSeeRepoDetail, fetchRepos, fetchRepoReadme, setRepos }}>
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
