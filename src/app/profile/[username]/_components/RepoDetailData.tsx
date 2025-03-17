'use client'
import React, { useEffect, useRef } from 'react';
import { FaArrowLeft, FaFile } from 'react-icons/fa';
import './scss/RepoDetailData.scss';
import { useRepoContext } from '../../../../../lib/context/RepoContext';
import { useUserContext } from '../../../../../lib/context/UserContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function RepoDetailData() {
  const { repos, selectedRepoName, setSeeRepoDetail, fetchRepoReadme, readme, setReadme } = useRepoContext();
  const { user } = useUserContext();
  
  const repo = repos.find(r => r.name === selectedRepoName);
  const hasFetchedReadme = useRef(false);

  useEffect(() => {
    if (repo && user && !hasFetchedReadme.current) {
      fetchRepoReadme(user.login, repo.name);
      hasFetchedReadme.current = true;
    }
    console.log(repo);
  }, [repo, user, fetchRepoReadme]);

  const handleClickBack = () => {
    setSeeRepoDetail(false);
    setReadme(null);
    hasFetchedReadme.current = false;
  };

  if (!repo) {
    return <FaArrowLeft className="repo-detail__back-icon" onClick={handleClickBack} />
  }

  return (
    <div className='repo-detail'>
      <div className="repo-detail__header">
        <FaArrowLeft className="repo-detail__back-icon" onClick={handleClickBack} />
        <h2>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-detail__link">
            {repo.name}
          </a>
        </h2>
        <span className="repo-detail__badge">{repo.visibility}</span>
      </div>
      <div className="repo-detail__content">
        {repo.description && <p>{repo.description}</p>}
        <p>Language: {repo.language ? repo.language : '-'}</p>
        <div className="repo-detail__content-topic">
          {repo.topics && repo.topics.length > 0 ? (
            repo.topics.map((topic, index) => (
              <span key={index} className="repo-detail__content-topic-badge">{topic}</span>
            ))
          ) : null}
        </div>
          <div className="repo-detail__readme">
            <div className="repo-detail__readme-title">
              Project README
              <FaFile className="repo-detail__readme-icon" />
            </div>
            {readme ? (
              <div className="repo-detail__readme-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {readme}
                </ReactMarkdown>
              </div>
            ) : (
                <div className="repo-detail__readme-empty">
                    No README available
                </div>
            )}
          </div>
      </div>
    </div>
  );
}
