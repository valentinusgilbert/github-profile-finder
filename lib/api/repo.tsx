import { getDataViaApi } from './axiosConfig';

export const getRepoListByUsername = async (username: string) => {
  try {
    const data = await getDataViaApi(`/users/${username}/repos?sort=asc`);
    return data;
  } catch (error) {
    console.error('Error fetching repository list:', error);
    throw error;
  }
};

export const getRepoReadme = async (owner: string, repo: string) => {
  try {
    const data = await getDataViaApi(`/repos/${owner}/${repo}/readme`);
    return data;
  } catch (error) {
    console.error('Error fetching repository details:', error);
    throw error;
  }
};
