import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AddCard } from './AddCard';
import { Title } from './Title';

const cardImgLink =
  'https://oir.mobi/uploads/posts/2020-02/1582086149_16-p-zamki-italii-21.jpg';

export function Boards() {
  return (
    <Box
      width="100%"
      height="100%"
      padding="20px"
      background-color="#121212"
      min-height="100vh"
    >
      <Box
        width="1075px"
        margin="0px auto"
        display="grid"
        grid-template-columns="repeat(3, 345px)"
        grid-gap="20px"
      >
        <Title />
        <AddCard />
        {[0, 1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              sx={{ maxWidth: 345, maxHeight: 450 }}
              style={{ backgroundColor: '#fefefe' }}
              key={item}
            >
              <CardHeader
                title={
                  <Typography color="#1d1d1d" variant="h6">
                    Administrator
                  </Typography>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon style={{ fill: '#1d1d1d' }} />
                  </IconButton>
                }
              />
              <CardMedia
                component="img"
                height="194"
                image={cardImgLink}
                alt="card photo"
              />
              <CardContent>
                <Typography component="p" variant="body1" color="#1d1d1d">
                  There should be information regarding the boards and the users
                  who are connected to them. To see more details, you need to go
                  inside.
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle1"
                  color="#1d1d1d"
                  marginTop="10px"
                >
                  Принимает участие {item} пользователей
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
