import { db } from '../api/db';

const seedData = async () => {
  const users = await db.users.toArray();

  if (users.length) {
    return;
  }

  db.users.bulkAdd([
    {
      username: 'hadi_sy',
      firstName: 'abdul',
      lastName: 'hadi',
      middleInitial: 'sy',
      suffix: 'Ph.D',
      displayName: 'Hadi',
      jobTitle: 'paralegal',
      active: true,
      photo: '',
    },
    {
      username: 'steve_g',
      firstName: 'Steve',
      lastName: 'Rogers',
      middleInitial: 'ab',
      suffix: 'M.D',
      displayName: 'Steve',
      jobTitle: 'senior partner',
      active: false,
      photo: '',
    },
  ]);
};

export default seedData;
