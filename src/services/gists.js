import client from 'src/utils/axios';
import BASE_URL from 'src/utils/constants';

// Get User gist Gists fetcher for SWR
export const getUserGistsFetcher = async (url) => {
  const response = await client.get(`${BASE_URL}${url}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });
  if (response.status > 299) {
    throw new Error(response.data.message);
  }
  return response.data;
};

// Get user gist forks
export const getUserGistForksAPI = async (url) => {
  return client.get(`${BASE_URL}${url}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });
};
