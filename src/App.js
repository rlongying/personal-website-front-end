import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseLine from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// customize components
import Header from './components/header';
import Home from './pages/home';
import Project from './pages/project';
import Blog from './pages/blog';
import Widgets from './pages/widgets';

// styles
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
      light: '#303030',
      dark: '#000',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/widgets">
            <Widgets />
          </Route>
          <Route path="/blogs">
            <Blog />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
