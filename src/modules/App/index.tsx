import { createTheme, CssBaseline, ThemeProvider, Box } from '@mui/material';
import { hot } from 'react-hot-loader/root';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Login from '../Auth/components/Login';
import SignUp from '../Auth/components/SignUp';
import { Home } from '../Home';

const queryClient = new QueryClient();

const theme = createTheme({
  spacing: 4,
});

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            display="flex"
            width="100%"
            height="100vh"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/auth" component={SignUp} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Router>
          </Box>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default hot(App);
