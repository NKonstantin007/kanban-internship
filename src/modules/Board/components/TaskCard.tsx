import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  CardActions,
  Button,
} from '@mui/material';
import { grey } from '@mui/material/colors';

type TaskCardDescription = {
  name: string;
  description: string;
  assignedTo: string;
};

export function TaskCard({
  name,
  description,
  assignedTo,
}: TaskCardDescription) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ marginBottom: 2 }}>
          <Typography>{name}</Typography>
          <Typography variant="caption" color={grey[600]}>
            {description}
          </Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          <PersonIcon sx={{ fontSize: 18 }} />
          <Typography variant="body2">{assignedTo}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}
