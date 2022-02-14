import {
  Box,
  Paper,
  Typography,
  Container,
  Avatar,
  Stack,
  Dialog,
  Button,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { deepOrange, red } from '@mui/material/colors';
import { getProjectList } from '@/data/projects';
import { ProjectData } from '@/types/projects';
import { useDeleteState, useProjectList } from '../hooks';
import { AddNewProject } from './AddNewProject';
import { ProjectInfo } from './ProjectInfo';

export function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projectsList, _] = useProjectList(getProjectList());

  const [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deletableProjectId,
    setDeletableProjectId,
    deleteModalVisible,
    setModalDeleteVisible,
  ] = useDeleteState();

  function clickDelete(projectId: string): void {
    setDeletableProjectId(projectId);
    setModalDeleteVisible(true);
  }

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
                onDeleteClick={() => clickDelete(item.id)}
              />
            ))}
          </Stack>
        </Paper>
      </Container>
      <Dialog
        open={deleteModalVisible}
        onClose={() => setModalDeleteVisible(false)}
      >
        <DialogContent>Delete the project?</DialogContent>
        <DialogActions>
          <Button onClick={() => setModalDeleteVisible(false)}>Cancel</Button>
          <Button
            onClick={() => setModalDeleteVisible(false)}
            autoFocus
            sx={{ color: red[500] }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
