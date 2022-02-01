import { SomeEntity } from '../types/someEntity';

// Shared api services
export function getSomeData(): SomeEntity {
  return {
    a: 'a',
    b: 'b',
  };
}
