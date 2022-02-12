import {
  Box,
  Paper,
  Typography,
  Container,
  Avatar,
  Stack,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
// import { getProjectList } from '@/data/projects';
// import { useProjectList } from '../hooks/useProjectList';

export function Home() {
  // const [projectsList, setProjectsList] = useProjectList(getProjectList());

  return (
    <Box>
      <Box height={40} sx={{ paddingBottom: 20 }}>
        <Paper variant="outlined" sx={{ height: 40 }} square>
          <Box
            px={5}
            py={1.5}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box>(Logo) Asperiod</Box>
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Boris"
                sx={{
                  bgcolor: deepOrange[500],
                  width: 24,
                  height: 24,
                  fontSize: 14,
                }}
              >
                B
              </Avatar>
              <Box>Boris</Box>
            </Stack>
          </Box>
        </Paper>
      </Box>
      <Container maxWidth="lg">
        <Paper variant="outlined" square>
          <Typography variant="h6" align="center">
            My Projects
          </Typography>
          projectsList.map(...)
        </Paper>
      </Container>
    </Box>
  );
}
