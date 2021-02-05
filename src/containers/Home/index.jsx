import React from 'react';
import styled from 'styled-components';
// Hooks
import useGetUserGists from 'src/hooks/api/useUserGists';
// Components
import Search from './Search';
import GistGrid from './GistGrid';

const Container = styled.div`
  padding: 30px;
`;

export default function Home() {
  // API Hooks
  const { userGists, setUsername, getForkUsers } = useGetUserGists();

  return (
    <Container>
      <Search setUsername={setUsername} />
      <GistGrid data={userGists} getForkUsers={getForkUsers} />
    </Container>
  );
}
