'use client'
import React, { useEffect } from 'react';
import { FaUser, FaBuilding, FaMapMarkerAlt, FaEnvelope, FaBlog, FaCheck, FaTimes, FaFolderOpen } from 'react-icons/fa';
import './scss/RepoListData.scss';
import { useUser } from '../../../../../lib/composable/useUser';
import { useRepo } from '../../../../../lib/composable/useRepo';

export default function ProfileData({ username }: { username: string }) {
  const { loading: repoLoading, repos, fetchRepos } = useRepo();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchRepos(username);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [username]);

  if (repoLoading || repos.length === 0) {
    return <div className='repo-list' >
      <div className="repo-list__title">User Repositories</div>
      {(repos.length === 0) && (
        <div className="repo-list__empty">
          <FaFolderOpen className="repo-list__empty-icon"/>
          No Repositories
        </div>
      )}
    </div>;
  }

  return (
    <div className='repo-list'>
      <div className="repo-list__title">User Repositories</div>
      <div className="repo-list__container">
      {repos.map(repo => (
        <div className="repo-list__data" key={repo.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="repo-list__detail">
            <div className="repo-list__detail-header">
              <h3>{repo.name}</h3>
              <span className="repo-list__badge">{repo.visibility}</span>
            </div>
            {repo.description && (
              <span className="repo-list__description">
                {repo.description}
              </span>
            )}
            <p className="repo-list__description">Language: {repo.language ? repo.language : '-'}</p>
          </div>
          <div className="repo-list__button">
            <button>See Details</button>
          </div>
        </div>
      ))}
      </div>
     
    </div>
  );
}
