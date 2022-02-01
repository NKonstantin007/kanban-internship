import { Box, TextField } from '@mui/material';
import { useCallback } from 'react';
import { useTextState } from '../store/textState/useTextState';

export function TextInput() {
  const { text, setText } = useTextState();

  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setText(event.target.value);
    },
    [setText],
  );

  return (
    <Box>
      <TextField type="text" value={text} onChange={onChange} />
      <br />
    </Box>
  );
}
