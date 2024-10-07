import { db } from '@api/db';
import { GetUserRequest, GetUsersRequest, User } from '@api/users/types';

export const getUsers = ({ filters }: GetUsersRequest) => {
  const keyword = filters?.keyword ?? '';

  if (keyword?.length) {
    return db.users
      .filter(
        (user) => user.firstName.toLowerCase().startsWith(keyword) || user.lastName.toLowerCase().startsWith(keyword)
      )
      .toArray();
  }

  return db.users.toArray();
};

export const getUser = async ({ id }: GetUserRequest): Promise<User | null> => {
  const users = await db.users.filter((user) => user.id === id).toArray();
  return users.length ? users[0] : null;
};

export const addUser = (user: User) => {
  return db.users.add({ ...user, id: undefined });
};

export const updateUser = async (user: User) => {
  await db.users.put(user);
  return user;
};
