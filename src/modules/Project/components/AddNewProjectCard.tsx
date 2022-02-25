import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Typography,
  Card,
  CardContent,
  Stack,
  CardActionArea,
} from '@mui/material';
import { green, lightGreen } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';

export function AddNewProjectCard({ onClick }: { onClick: () => void }) {
  return (
    <Card
      variant="outlined"
      sx={{
        margin: '0px 5px 10px 5px',
        maxWidth: 'calc(50% - 20px)',
        flexShrink: 0,
        backgroundColor: lightGreen[50],
        borderColor: lightGreen[300],
      }}
    >
      <CardActionArea sx={{ height: '100%' }} onClick={() => onClick()}>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <SvgIcon sx={{ color: green[400] }}>
              <AddCircleIcon />
            </SvgIcon>
            <Typography>Add a project</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
