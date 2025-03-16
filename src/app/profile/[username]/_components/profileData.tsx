import React from 'react';
import { FaUser, FaBuilding, FaMapMarkerAlt, FaEnvelope, FaBlog, FaCheck, FaTimes } from 'react-icons/fa';
import './profileData.scss';

interface User {
  avatar_url: string;
  login: string;
  name: string | null; // Allow name to be string or null
  bio?: string | null; // Allow bio to be string, null, or undefined
  followers: number;
  following: number;
  company?: string | null; // Allow company to be string, null, or undefined
  location?: string | null;
  email?: string | null;
  blog?: string | null;
  hireable?: string | null;
}

export default function ProfileData({ user }: { user: User }) {
  return (
    <div className="profile__data">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="profile__data-avatar" />
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
  );
}
