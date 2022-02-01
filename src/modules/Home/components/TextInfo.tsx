import { Box, Typography } from '@mui/material';
import { useTextState } from '../store/textState/useTextState';

export function TextInfo() {
  const { textLength, isTextEmpty } = useTextState();
  return (
    <Box>
      <Typography>Character Count: {textLength}</Typography>
      <Typography>Text is empty: {isTextEmpty.toString()}</Typography>
    </Box>
  );
}
