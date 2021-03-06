import React from 'react';
import styled from 'styled-components';
// Hooks
import useGetUserGists from 'src/hooks/api/useUserGists';
// Components
import Search from './Search';
import GistGrid from './GistGrid';
// Styles
const Container = styled.div`
  padding: 30px;
`;

export default function Home() {
  // API Hooks
  const { userGists, setUsername, getForkUsers } = useGetUserGists();

  return (
    <Container>
      {/* Search Component */}
      <Search setUsername={setUsername} />
      {/* Gist list */}
      <GistGrid data={userGists} getForkUsers={getForkUsers} />
    </Container>
  );
}
