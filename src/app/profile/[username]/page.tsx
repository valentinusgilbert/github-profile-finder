'use client'
import React from 'react';
import Page from '../../../components/shared/pages';
import { UserProvider } from '../../../../lib/context/UserContext';
import { RepoProvider, useRepoContext } from '../../../../lib/context/RepoContext';
import SearchInput from "../../../components/shared/searchInput";
import "../../../../styles/global.scss";
import './styles.scss'
import ProfileData from './_components/profileData';
import RepoListData from './_components/RepoListData';

export default function UsernamePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = React.use(params);

  return (
    <UserProvider>
      <RepoProvider>
        <Page>
          <div className="profile">
            <SearchInput />
            <div className="profile__container">
              <ProfileData username={username} />
              <RepoContent username={username} />
            </div>
          </div>
        </Page>
      </RepoProvider>
    </UserProvider>
  );
}

function RepoContent({ username }: { username: string }) {
  const { isSeeRepoDetail } = useRepoContext();

  return isSeeRepoDetail ? (
    <div className="repo-detail">
      <h2>aa</h2>
    </div>
  ) : (
    <RepoListData username={username} />
  );
}