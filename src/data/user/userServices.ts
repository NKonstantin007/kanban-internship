import { User } from '../../types/user';
import { http } from '../http';

const USERS_BASE_PATH = '/users';

export const getUsers = async (): Promise<User[]> => {
  const { data } = await http.get<User[]>(USERS_BASE_PATH);
  return data;
};
