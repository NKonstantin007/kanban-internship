import { UserApiModel, convertToUsers } from '@/api-types/users';
import { http } from '@/data/http';
import { User } from '@/types/user';

const USER_BASE_PATH = '/users';

export const getALLUsers = async (): Promise<User[]> => {
  const { data } = await http.get<UserApiModel[]>(USER_BASE_PATH);
  return convertToUsers(data);
};
