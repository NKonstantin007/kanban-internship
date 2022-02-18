import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function AddCard(): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#fefefe' }}>
      <CardActionArea>
        <CardContent>
          <Box
            height="419px"
            width="100%"
            display="flex"
            justify-content="center"
            align-items="center"
            flex-direction="column"
          >
            <Typography color="#1d1d1d" variant="h6">
              Create new board
            </Typography>
            <Typography color="#1d1d1d" variant="h1">
              +
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
