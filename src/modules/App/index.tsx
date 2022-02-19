import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { hot } from 'react-hot-loader/root';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Auth } from '../Auth';
import { TopBar } from '../Auth/components/TopBar';
import { Home } from '../Home';
import { NewUser } from '../NewUser';
import { Registration } from '../Registration';

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
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Auth} />
              <Route path="/newuser" component={NewUser} />
              <Route exact path="/nav" component={TopBar} />
              <Route path="/signup" component={Registration} />
            </Switch>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default hot(App);
