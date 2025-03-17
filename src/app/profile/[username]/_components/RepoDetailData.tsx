'use client'
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './scss/RepoDetailData.scss';
import { useRepoContext } from '../../../../../lib/context/RepoContext';

export default function RepoDetailData() {
  const { repos, selectedRepoName, setSeeRepoDetail } = useRepoContext();
  
  const repo = repos.find(r => r.name === selectedRepoName);

  console.log(repo);
  if (!repo) {
    return <FaArrowLeft className="repo-detail__back-icon" onClick={() => setSeeRepoDetail(false)} />
  }

  return (
    <div className='repo-detail'>
      <div className="repo-detail__header">
        <FaArrowLeft className="repo-detail__back-icon" onClick={() => setSeeRepoDetail(false)} />
        <h2>{repo.name}</h2>
        <span className="repo-detail__badge">{repo.visibility}</span>
      </div>
      <div className="repo-detail__content">
        <p>{repo.description}</p>
        <p>Language: {repo.language ? repo.language : '-'}</p>
        <div className="repo-detail__content-topic">
          {repo.topics && repo.topics.length > 0 ? (
            repo.topics.map((topic, index) => (
              <span key={index} className="repo-detail__content-topic-badge">{topic}</span>
            ))
          ) : (
            <p>No topics available</p>
          )}
        </div>
      </div>
    </div>
  );
}
