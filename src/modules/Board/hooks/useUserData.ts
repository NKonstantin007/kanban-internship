import React, { useState } from 'react';
import { User } from '@/types/user';

export function useUserData(
  initialUsers: User[],
): [User[], React.Dispatch<React.SetStateAction<User[]>>] {
  const [users, setUsers] = useState(initialUsers);
  return [users, setUsers];
}

export function useUserNames(initialUsers: {
  [id: string]: string;
}): [
  { [id: string]: string },
  React.Dispatch<React.SetStateAction<{ [id: string]: string }>>,
] {
  const [usersNames, setUsersNames] = useState(initialUsers);
  return [usersNames, setUsersNames];
}
