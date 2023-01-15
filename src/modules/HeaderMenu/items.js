import { nanoid } from 'nanoid';

export const items = [
  {
    id: nanoid(),
    to: '/',
    name: 'Home',
  },
  {
    id: nanoid(),
    to: '/movies',
    name: 'Movies',
  },
];
