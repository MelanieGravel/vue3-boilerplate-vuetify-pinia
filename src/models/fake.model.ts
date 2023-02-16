import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import { randomIntFromInterval } from '../utils';

export interface FakeItem {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  createdAt: Date;
  deletedAt?: Date;
}

export function generateFakeData(): FakeItem {
  return {
    id: uuidv4(),
    quantity: randomIntFromInterval(1,10),
    name: faker.name.fullName(),
    description: faker.lorem.sentences(2),
    createdAt: new Date(),
  };
}