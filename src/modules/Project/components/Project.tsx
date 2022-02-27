import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Paper,
  Button,
  Typography,
  Container,
  Stack,
  CircularProgress,
} from '@mui/material';
import { useState, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ALL_PROJECTS_PAGE, BOARD_PAGE } from '@/constants/routes';
import { useDialogState } from '@/hooks/useDialogState';
import { useProjects } from '@/hooks/useProjects';
import { Board, NewBoard } from '@/types/board';

import {
  useBoards,
  useDeleteBoard,
  useCreateBoard,
  useUpdateBoard,
} from '../hooks';
import { AddNewBoardCard } from './AddNewBoardCard';
import { BoardCard } from './BoardCard';
import { BoardFormDialog } from './BoardFormDialog';
import { DeleteBoardDialog } from './DeleteBoardDialog';

export function Project() {
  const { projects, isLoadingProjects } = useProjects();

  const { projectId } = useParams<{ projectId: string }>();

  const { boards, refetchBoards, isLoadingBoards } = useBoards();

  const boardsInProject = useMemo(
    () => boards.filter((board) => board.projectId === projectId),
    [boards, projectId],
  );

  const refetch = () => {
    refetchBoards();
  };

  const { deleteBoard, isDeleting, isDeleteError } = useDeleteBoard({
    onSuccess: refetch,
  });

  const { createBoard, isCreating, isCreateError } = useCreateBoard({
    onSuccess: refetch,
  });

  const { updateBoard, isUpdating, isUpdateError } = useUpdateBoard({
    onSuccess: refetch,
  });

  const [deletableBoardId, setDeletableBoardId, deleteBoardDialog] =
    useDialogState<string>();

  const [currentBoard, setCurrentBoard, boardFormDialog] =
    useDialogState<Board>();

  const history = useHistory();

  const [isCreate, setCreate] = useState<boolean>(true);

  return (
    <Box>
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ px: '5px' }}>
          {isLoadingProjects || (
            <Typography variant="h5" align="center" py={5}>
              {projects.find((project) => project.id === projectId)?.name}
            </Typography>
          )}
          {isLoadingBoards && (
            <Stack direction="row" sx={{ mb: 2 }} spacing={2}>
              <CircularProgress size={18} /> <Typography>Loading</Typography>
            </Stack>
          )}
          <Button
            onClick={() => history.push(ALL_PROJECTS_PAGE)}
            sx={{ mb: 2, ml: '5px' }}
            variant="outlined"
            startIcon={<ArrowBackIcon />}
          >
            Back to Projects
          </Button>
          <Stack direction="row" flexWrap="wrap">
            <AddNewBoardCard
              onClick={() => {
                boardFormDialog.open();
                setCreate(true);
              }}
            />
            {projectId &&
              !!boardsInProject.length &&
              boardsInProject.map((board: Board) => (
                <BoardCard
                  key={board.id}
                  name={board.name}
                  onClick={() => history.push(`${BOARD_PAGE}/${board.id}`)}
                  onEditClick={() => {
                    setCurrentBoard(board);
                    setCreate(false);
                    boardFormDialog.open();
                  }}
                  onDeleteClick={() => {
                    setDeletableBoardId(board.id);
                    deleteBoardDialog.open();
                  }}
                />
              ))}
          </Stack>
          {!!boardsInProject.length || (
            <Box sx={{ textAlign: 'center' }}>
              <img
                src="data:image/png;base64,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"
                alt="Empty"
              />
              <Typography variant="h6" align="center">
                No here boards. Create one
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>
      <DeleteBoardDialog
        open={deleteBoardDialog.isOpen}
        handleClose={() => deleteBoardDialog.close()}
        onClickDeleteButton={() => deleteBoard(deletableBoardId!)}
        isDeleting={isDeleting}
        isDeleteError={isDeleteError}
      />
      <BoardFormDialog
        open={boardFormDialog.isOpen}
        handleClose={() => boardFormDialog.close()}
        onClickAddButton={(formData: NewBoard) => createBoard(formData)}
        onClickEditButton={(board: Board) => updateBoard(board)}
        currentBoard={currentBoard}
        projectId={projectId}
        isCreate={isCreate}
        isCreating={isCreating}
        isCreateError={isCreateError}
        isUpdating={isUpdating}
        isUpdateError={isUpdateError}
      />
    </Box>
  );
}
