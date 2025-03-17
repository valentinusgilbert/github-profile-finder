'use client'
import React, { useEffect } from 'react';
import { FaUser, FaBuilding, FaMapMarkerAlt, FaEnvelope, FaBlog } from 'react-icons/fa';
import './scss/profileData.scss';
import { useUserContext } from '../../../../../lib/context/UserContext';

export default function ProfileData({ username }: { username: string }) {
  const { loading, user, fetchUser } = useUserContext();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchUser(username);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [username]);

  if (!user || loading) {
    return (
      <div className="profile__data">
        <div className="skeleton skeleton-avatar"></div>
        <div className="skeleton-wrapper">
          <div className="skeleton skeleton-name"></div>
          <div className="skeleton skeleton-id"></div>
          <div className="skeleton skeleton-bio"></div>
          <div className="profile__data-follow">
            <div className="skeleton skeleton-follow"></div>
            <div className="skeleton skeleton-follow"></div>
          </div>
          <div className="skeleton skeleton-row"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile__data">
      <img 
        src={user.avatar_url || 'https://placehold.co/300x300'} 
        alt={`${user.login}'s avatar`} 
        className="profile__data-avatar" 
      />
      <div className="profile__data-details">
        <div className='profile__data-name'>
          {user.name}
          <span className='profile__data-name-id'>  
            {user.login}
          </span>
        </div>
        {user.bio && (
          <div className="profile__data-name-bio">
            {user.bio}
          </div>
        )}
        <div className="profile__data-follow">
          <FaUser /> 
          <div className="profile__data-follow-text">
            <p className="profile__data-follow-number">
              {user.followers}
            </p>
            Followers
          </div>
          <span className="dot-separator"/>
          <div className="profile__data-follow-text">
            <p className="profile__data-follow-number">
              {user.following}
            </p>
            Following
          </div>
        </div>
        <div className="profile__data-container">
          {user.company && (
            <div className="profile__data-container__row">
              <FaBuilding/>
              <div className="profile__data-container__row-text">
                {user.company}
              </div>
            </div>
          )}
          {user.location && (
            <div className="profile__data-container__row">
              <FaMapMarkerAlt/>
              <div className="profile__data-container__row-text">
                {user.location}
              </div>
            </div>
          )}
          {user.email && (
            <div className="profile__data-container__row">
              <FaEnvelope/>
              <div className="profile__data-container__row-text">
                {user.email}
              </div>
            </div>
          )}
          {user.blog && (
            <div className="profile__data-container__row">
              <FaBlog/>
              <a href={user.blog} className="profile__data-container__row-text blog-link" target="_blank" rel="noopener noreferrer">
                {user.blog}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
