import { db } from './db';

const seedData = async () => {
  const users = await db.users.toArray();

  if (users.length) {
    return;
  }

  db.users.bulkAdd([
    {
      userName: 'hadi_sy',
      firstName: 'abdul',
      lastName: 'hadi',
      middleInitial: 'sy',
      suffix: 'Mr.',
      displayName: 'Hadi',
      jobTitle: 'Staff',
      active: true,
    },
    {
      userName: 'steve_g',
      firstName: 'Steve',
      lastName: 'Rogers',
      middleInitial: 'ab',
      suffix: 'Mr.',
      displayName: 'Steve',
      jobTitle: 'Staff',
      active: false,
    },
  ]);
};

export default seedData;
