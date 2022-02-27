import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
} from '@mui/material';
import { red } from '@mui/material/colors';

export function BoardCard({
  name,
  onClick,
  onEditClick,
  onDeleteClick,
}: {
  name: string;
  onClick: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
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
      <CardActionArea onClick={() => onClick()}>
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={() => onEditClick()}>
          Edit
        </Button>
        <Button
          size="small"
          sx={{ color: red[500], py: '2px' }}
          onClick={() => onDeleteClick()}
        >
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
}
