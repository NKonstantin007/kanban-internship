import { atom } from 'recoil';

type TextState = string;

export const textState = atom<TextState>({
  key: 'textState',
  default: '',
});
