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
import RepoDetailData from './_components/RepoDetailData';

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
    <RepoDetailData />
  ) : (
    <RepoListData username={username} />
  );
}