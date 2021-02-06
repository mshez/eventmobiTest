import React, { useState } from 'react';
// Styles
import {
  Container,
  GistList,
  GistListItem,
  GistItemDetails,
  Avatar,
  Description,
  GistUrl,
  BadgeContainer,
  Badge,
  ForkedUsersContainer,
  NoUsers,
  Button,
} from './styled.components';

// Badges component
const Badges = ({ files }) => {
  return Object.values(files).map((fileValue) => (
    <Badge key={fileValue.filename}>{fileValue.language}</Badge>
  ));
};
// Forked user component
const ForkedUsers = ({ getForkUsers, itemId }) => {
  const [users, setUsers] = useState(null);

  // Fetch users handler
  const fetchUsers = async () => {
    const fetchedUsers = await getForkUsers(itemId);
    setUsers(fetchedUsers);
  };

  // If users are fetched and present
  if (users && users.length > 0) {
    return (
      <ForkedUsersContainer>
        {users.map((user) => {
          return (
            <a key={user.id} href={user.html_url}>
              <Avatar src={user.owner.avatar_url} />
            </a>
          );
        })}
      </ForkedUsersContainer>
    );
  }
  // If no users found
  if (users && users.length === 0) {
    return <NoUsers>No users found</NoUsers>;
  }
  return <Button onClick={() => fetchUsers()}>View Fork users</Button>;
};

export default function GistGrid({ data, getForkUsers }) {
  return (
    <Container>
      <GistList>
        {(data?.length > 0 &&
          data?.map((item) => (
            <GistListItem key={item.id}>
              <GistItemDetails>
                <Avatar src={item.owner.avatar_url} />
                <Description>{item.description}</Description>
                <GistUrl href={item.html_url} target="_blank">
                  Visit Gist
                </GistUrl>
                <ForkedUsers getForkUsers={getForkUsers} itemId={item.id} />
              </GistItemDetails>
              <BadgeContainer>
                <Badges files={item.files} />
              </BadgeContainer>
            </GistListItem>
          ))) || <div>No users found</div>}
      </GistList>
    </Container>
  );
}
