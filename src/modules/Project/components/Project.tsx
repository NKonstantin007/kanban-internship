import { Box, Paper, Typography, Container, Stack } from '@mui/material';
import { Project } from '@/types/projects';
import { useDeleteState, useAddProjectForm } from '../hooks';
import { useProjects } from '../hooks/useProjects';
import { AddNewProjectCard } from './AddNewProjectCard';
import { AddProjectDialog } from './AddProjectDialog';
import { DeleteProjectDialog } from './DeleteProjectDialog';
import { ProjectCard } from './ProjectCard';

export function Project() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { projects } = useProjects();

  const [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deletableProjectId,
    setDeletableProjectId,
    deleteModalVisible,
    setModalDeleteVisible,
  ] = useDeleteState();

  function clickDelete(projectId: string) {
    setDeletableProjectId(projectId);
    setModalDeleteVisible(true);
  }

  const [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addFormData,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setAddFormData,
    addFormModalVisible,
    setAddFormModalVisible,
  ] = useAddProjectForm();

  return (
    <Box>
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ px: '5px' }}>
          <Typography variant="h5" align="center" py={5}>
            My Projects
          </Typography>
          <Stack direction="row" flexWrap="wrap">
            <AddNewProjectCard onClick={() => setAddFormModalVisible(true)} />
            {projects.map((item: Project) => (
              <ProjectCard
                key={item.id}
                name={item.name}
                description={item.description}
                id={item.id}
                onDeleteClick={() => clickDelete(item.id)}
              />
            ))}
          </Stack>
        </Paper>
      </Container>
      <DeleteProjectDialog
        open={deleteModalVisible}
        handleClose={() => setModalDeleteVisible(false)}
        onClickDeleteButton={() => setModalDeleteVisible(false)}
      />
      <AddProjectDialog
        open={addFormModalVisible}
        handleClose={() => setAddFormModalVisible(false)}
        onSubmit={(/* data: ProjectFormData */) => null}
        additionalAction={() => setAddFormModalVisible(false)}
      />
    </Box>
  );
}
