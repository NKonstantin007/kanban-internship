import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState } from './textState';
import { textLengthSelector, isTextEmptySelector } from './textStateSelectors';

export function useTextState() {
  const [text, setText] = useRecoilState(textState);
  const textLength = useRecoilValue(textLengthSelector);
  const isTextEmpty = useRecoilValue(isTextEmptySelector);

  const resetText = useCallback(() => {
    setText('');
  }, [setText]);

  return {
    text,
    textLength,
    isTextEmpty,
    setText,
    resetText,
  };
}
