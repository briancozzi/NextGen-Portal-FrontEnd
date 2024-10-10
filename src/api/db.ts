// db.ts
import Dexie, { type EntityTable } from 'dexie';
import { User } from './users/types';
import { Page } from './pages/types';

const db = new Dexie('NextGen-db') as Dexie & {
  users: EntityTable<User, 'id'>;
  pages: EntityTable<Page, 'id'>;
};

// Schema declaration:
db.version(1).stores({
  users: '++id, firstName, lastName',
  pages: '++id, name, slug, userId',
});

export { db };
