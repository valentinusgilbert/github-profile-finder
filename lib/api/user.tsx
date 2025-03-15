import { getDataViaApi } from './axiosConfig';

export const getUserByUsername = async (username: string) => {
  try {
    const data = await getDataViaApi(`/users/${username}`);
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
