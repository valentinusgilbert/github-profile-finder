'use client'
import React from 'react';
import Page from '../../../components/shared/pages';
import { useUser } from '../../../../lib/composable/useUser';
import { FaUser, FaBuilding, FaMapMarkerAlt, FaEnvelope, FaBlog, FaCheck, FaTimes } from 'react-icons/fa'; // Import additional icons from react-icons
import "../../../../styles/global.scss";
import './styles.scss'
import ProfileData from './_components/profileData';
import RepoListData from './_components/RepoListData';

export default function usernamePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = React.use(params);
  const { user, loading } = useUser();

  return (
    <Page>
      <div className="profile">
        <ProfileData username={username} />
        <RepoListData username={username} />
      </div>
    </Page>
  );
}