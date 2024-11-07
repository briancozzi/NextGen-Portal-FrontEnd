import { db } from '@api/db';
import { GetUserRequest, GetUsersRequest, User } from '@api/users/types';

export const getUsers = async ({ filters, sort }: GetUsersRequest) => {
  const keyword = filters?.keyword ?? '';
  let query = db.users as any;
  if (keyword?.length) {
    query = query.filter(
      (user: User) => user.firstName.toLowerCase().includes(keyword) || user.lastName.toLowerCase().includes(keyword)
    );
  }

  let results = await query.toArray();

  if (filters?.title?.length && filters?.title !== 'All') {
    results = results.filter((user: User) => user.jobTitle === filters.title);
  }

  if (filters?.office?.length && filters?.office !== 'All') {
    results = results.filter((user: User) => user.office === filters.office);
  }

  if (sort) {
    results?.sort((a: any, b: any) => {
      const valueA = sort.key === 'name' ? `${a.firstName} ${a.lastName}` : a[sort.key];
      const valueB = sort.key === 'name' ? `${b.firstName} ${b.lastName}` : b[sort.key];
      return sort.direction === 'desc' ? valueB?.localeCompare(valueA) : valueA?.localeCompare(valueB);
    });
  }

  return results;
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
