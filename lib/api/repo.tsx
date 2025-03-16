import { getDataViaApi } from './axiosConfig';

export const getRepoListByUsername = async (username: string) => {
  try {
    const data = await getDataViaApi(`/users/${username}/repos?per_page=5&sort=asc`);
    return data;
  } catch (error) {
    console.error('Error fetching repository list:', error);
    throw error;
  }
};
