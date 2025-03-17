'use client'
import React from 'react';
import Page from '../../../components/shared/pages';
import SearchInput from "../../../components/shared/searchInput"; // Import SearchInput component
import "../../../../styles/global.scss";

export default function usernamePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = React.use(params);

  return (
    <Page>
      <div className="profile">
      
      </div>
    </Page>
  );
}