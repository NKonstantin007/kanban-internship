import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';

export function ProjectInfo({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        margin: '0px 5px 10px 5px',
        maxWidth: 'calc(50% - 20px)',
        flexShrink: 0,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography>{name}</Typography>
          <Typography variant="caption" color={grey[600]}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" sx={{ color: red[500], py: '2px' }}>
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
}
