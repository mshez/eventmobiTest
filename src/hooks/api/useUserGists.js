import useSwr from 'swr';
import { getUserGistsFetcher, getUserGistForksAPI } from 'src/services/gists';
import { useState } from 'react';

export default function useGetUserGists() {
  const [username, setUsername] = useState(null);
  const apiURL = (username && `/users/${username}/gists`) || null;

  const { data, error } = useSwr(apiURL, getUserGistsFetcher, {
    refreshInterval: 0,
    dedupingInterval: 10000,
    focusThrottleInterval: 10000,
  });

  const getForkUsers = async (gistId) => {
    try {
      const result = await getUserGistForksAPI(`/gists/${gistId}/forks`);
      if (result.status === 200) {
        if (result.data.length > 3) {
          return result.data.slice(Math.max(result.data.length - 3, 1));
        }
        return result.data;
      }
      return false;
    } catch (err) {
      console.error('Error in getUserGistForksAPI', err);
      return false;
    }
  };

  return {
    loading: !data,
    username,
    userGists: !error ? data : [],
    setUsername,
    getForkUsers,
  };
}
