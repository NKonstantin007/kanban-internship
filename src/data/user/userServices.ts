import { UserApiModel, convertToUsers, convertToUser } from '@/api-types/users';
import { http } from '@/data/http';
import { User } from '@/types/user';

export const getALLUsers = async (): Promise<User[]> => {
  const { data } = await http.get<UserApiModel[]>('/users');
  return convertToUsers(data);
};

export const getUserById = async (id: string): Promise<User> => {
  const { data } = await http.get<UserApiModel>(`/users/${id}`);
  return convertToUser(data);
};
