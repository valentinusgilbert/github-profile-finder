'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaFolderOpen } from 'react-icons/fa';
import './scss/RepoListData.scss';
import { useUser } from '../../../../../lib/composable/useUser';
import { useRepo } from '../../../../../lib/composable/useRepo';

export default function ProfileData({ username }: { username: string }) {
  const { loading: repoLoading, repos, fetchRepos } = useRepo();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 5;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchRepos(username);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [username]);

  const handleSeeDetails = (repoName: string) => {
    router.push(`/repository/${repoName}`);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

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
      {currentRepos.map(repo => (
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
            <button onClick={() => handleSeeDetails(repo.name)}>See Details</button>
          </div>
        </div>
      ))}
      </div>
      <div className="repo-list__pagination">
        {Array.from({ length: Math.ceil(repos.length / reposPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
