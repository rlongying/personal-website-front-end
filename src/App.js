import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseLine from '@material-ui/core/CssBaseline';

// customize components
import Header from './components/header';
import Home from './pages/home';
import Project from './pages/project';
import Blog from './pages/blog';
import Widgets from './pages/widgets';

// styles
import './index.css';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
