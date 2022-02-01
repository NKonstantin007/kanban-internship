import { selector } from 'recoil';
import { textState } from './textState';

export const textLengthSelector = selector({
  key: 'textLength',
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export const isTextEmptySelector = selector({
  key: 'isTextEmpty',
  get: ({ get }) => {
    return get(textLengthSelector) === 0;
  },
});
