import styled from 'styled-components';

export const Container = styled.div``;
export const GistList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const GistListItem = styled.li`
  width: 250px;
  box-shadow: 0px 0px 8px 0px #eaeaea;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  margin-left: 5px;
`;
export const GistItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BadgeContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;
export const Badge = styled.div`
  color: white;
  background: #4c4cbd;
  border: 1px solid #6969c1;
  border-radius: 5px;
  padding: 5px;
  font-size: 10px;
  margin-right: 3px;
  min-width: 10px;
`;
export const Avatar = styled.img`
  border-radius: 30px;
  max-width: 50px;
`;
export const GistUrl = styled.a``;
export const Description = styled.p`
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 240px;
`;
export const Button = styled.button`
  background: gray;
  border: none;
  width: 115px;
  color: white;
  height: 30px;
  margin-top: 5px;
`;
export const ForkedUsersContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const NoUsers = styled.div`
  margin: 10px 0;
  font-size: 13px;
`;
