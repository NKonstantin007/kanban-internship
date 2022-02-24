import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';

export function ProjectCard({
  name,
  description,
  onDeleteClick,
  id,
}: {
  name: string;
  description: string;
  onDeleteClick: Function;
  id: string;
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
        <Button
          size="small"
          sx={{ color: red[500], py: '2px' }}
          onClick={() => onDeleteClick(id)}
        >
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
}
