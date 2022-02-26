import {
  Box,
  Paper,
  Typography,
  Container,
  Stack,
  CircularProgress,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import { PROJECT_PAGE } from '@/constants/routes';
import { useDialogState } from '@/hooks/useDialogState';
import { useSimpleDialog } from '@/hooks/useSimpleDialog';
import { Project, NewProject } from '@/types/projects';
import { useProjects, useDeleteProject, useCreateProject } from '../hooks';
import { AddNewProjectCard } from './AddNewProjectCard';
import { AddProjectDialog } from './AddProjectDialog';
import { DeleteProjectDialog } from './DeleteProjectDialog';
import { ProjectCard } from './ProjectCard';

export function Main() {
  const { projects, refetchProjects, isLoadingProjects } = useProjects();

  const refetch = () => {
    refetchProjects();
  };

  const { deleteProject, isDeleting, isDeleteError } = useDeleteProject({
    onSuccess: refetch,
  });

  const { createProject, isCreating, isCreateError } = useCreateProject({
    onSuccess: refetch,
  });

  const [deletableProjectId, setDeletableProjectId, deleteProjectDialog] =
    useDialogState<string>();

  const createProjectDialog = useSimpleDialog();

  const history = useHistory();

  return (
    <Box>
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ px: '5px' }}>
          <Typography variant="h5" align="center" py={5}>
            My Projects
          </Typography>
          {isLoadingProjects && (
            <Stack direction="row" sx={{ mb: 2 }} spacing={2}>
              <CircularProgress size={18} /> <Typography>Загрузка</Typography>
            </Stack>
          )}
          <Stack direction="row" flexWrap="wrap">
            <AddNewProjectCard onClick={() => createProjectDialog.open()} />
            {projects.map((project: Project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                onClick={() => history.push(`${PROJECT_PAGE}/${project.id}`)}
                onDeleteClick={() => {
                  setDeletableProjectId(project.id);
                  deleteProjectDialog.open();
                }}
              />
            ))}
          </Stack>
        </Paper>
      </Container>
      <DeleteProjectDialog
        open={deleteProjectDialog.isOpen}
        handleClose={() => deleteProjectDialog.close()}
        onClickDeleteButton={() => deleteProject(deletableProjectId!)}
        isDeleting={isDeleting}
        isDeleteError={isDeleteError}
      />
      <AddProjectDialog
        open={createProjectDialog.isOpen}
        handleClose={() => createProjectDialog.close()}
        onClickAddButton={(formData: NewProject) => createProject(formData)}
        isCreating={isCreating}
        isCreateError={isCreateError}
      />
    </Box>
  );
}
