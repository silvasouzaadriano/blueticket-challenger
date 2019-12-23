import faker from 'faker';
import { factory } from 'factory-girl';

import User from '../src/app/models/User';
import File from '../src/app/models/File';

const date = new Date();

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(6, 10),
});

factory.define('File', File, {
  name: 'rocketseat.jpeg',
  path: 'example/rocketseat.jpeg',
  type: 'banner',
  created_at: date,
  updated_at: date,
});

export default factory;
