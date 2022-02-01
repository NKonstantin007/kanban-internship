import ErrorIcon from '@mui/icons-material/Error';
import { CircularProgress, Avatar as MuiAvatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { useCurrentUser } from '../hooks/useCurrentUser';

export const Avatar = () => {
  const { isLoading, isError, data: user } = useCurrentUser();

  if (isLoading) {
    return <CircularProgress size={40} />;
  }

  if (isError) {
    return <ErrorIcon sx={{ fontSize: 40 }} color="error" />;
  }

  return user == null ? null : (
    <MuiAvatar sx={{ bgcolor: deepOrange[500] }}>
      {user.name.charAt(0)}
    </MuiAvatar>
  );
};
