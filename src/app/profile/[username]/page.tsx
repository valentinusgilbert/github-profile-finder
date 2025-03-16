'use client'
import React from 'react';
import Page from '../../../components/shared/pages';
import { useUser } from '../../../../lib/composable/useUser';
import SearchInput from "../../../components/shared/searchInput"; // Import SearchInput component
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
        <SearchInput />
        <div className="profile__container">
          <ProfileData username={username} />
          <RepoListData username={username} />
        </div>

      </div>
    </Page>
  );
}