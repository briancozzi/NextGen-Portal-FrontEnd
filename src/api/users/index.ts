import { db } from '@api/db';

export const getUsers = () => {
  return db.users.toArray();
};
