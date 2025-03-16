'use client'
import React, { useEffect } from 'react';
import Page from '../../../components/shared/pages';
import { useUser } from '../../../../lib/composable/useUser';
import { FaUser, FaBuilding, FaMapMarkerAlt, FaEnvelope, FaBlog, FaCheck, FaTimes } from 'react-icons/fa'; // Import additional icons from react-icons
import "../../../../styles/global.scss";
import './styles.scss'
import ProfileData from './_components/profileData';

export default function usernamePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = React.use(params);
  const { user, loading, fetchUser } = useUser();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchUser(username);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [username]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Page>
      <div className="profile">
        <ProfileData user={user} />
        <div className="profile__repo">

        </div>
      </div>
    </Page>
  );
}