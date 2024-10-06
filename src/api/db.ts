// db.ts
import Dexie, { type EntityTable } from 'dexie';
import { User } from './users/types';

const db = new Dexie('NextGen-db') as Dexie & {
  users: EntityTable<User, 'id'>;
};

// Schema declaration:
db.version(1).stores({
  users: '++id, firstName, lastName',
});

export { db };
