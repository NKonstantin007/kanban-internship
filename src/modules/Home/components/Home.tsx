import {
  Box,
  Paper,
  Typography,
  Container,
  Avatar,
  Stack,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { getProjectList } from '@/data/projects';
import { ProjectData } from '@/types/projects';
import { useProjectList } from '../hooks/useProjectList';
import { AddNewProject } from './AddNewProject';
import { ProjectInfo } from './ProjectInfo';

export function Home() {
  const [projectsList] = useProjectList(getProjectList());

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
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ px: '5px' }}>
          <Typography variant="h5" align="center" py={5}>
            My Projects
          </Typography>
          <Stack direction="row" flexWrap="wrap">
            <AddNewProject />
            {projectsList.map((item: ProjectData) => (
              <ProjectInfo
                key={item.id}
                name={item.name}
                description={item.description}
              />
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
