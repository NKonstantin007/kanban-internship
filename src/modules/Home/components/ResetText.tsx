import { Button } from '@mui/material';
import { useTextState } from '../store/textState/useTextState';

export function ResetText() {
  const { resetText } = useTextState();
  return (
    <Button variant="outlined" onClick={resetText}>
      Reset text
    </Button>
  );
}
