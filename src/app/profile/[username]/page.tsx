'use client'
import React, { useEffect } from 'react';
import RootLayout from "../../layout";
import { useUser } from '../../../../lib/composable/useUser';
import "../../../../styles/global.scss";

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
    <div>
      <h1>Profile: {username}</h1>
      <div>
        <p>name: {user.name}</p>
        <p>Bio: {user.bio}</p>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
}