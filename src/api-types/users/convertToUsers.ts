import { User } from '@/types/user';

export type UserApiModel = {
  _id: string;
  name: string;
  email: string;
  avatarLink: string;
  projectIds: string[];
  boardIds: string[];
};

export const convertToUser = (userApiModel: UserApiModel): User => {
  const { _id, ...rest } = userApiModel;

  return {
    id: _id,
    ...rest,
  };
};

export const convertToUsers = (userApiModel: UserApiModel[]): User[] => {
  return userApiModel.map(convertToUser);
};
