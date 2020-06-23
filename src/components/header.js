import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Navbar from './navbar';
import NavMenu from './navmenu';
import DevIcon from '../static/images/devicon.png';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.background.dark,
    '& a': {
      color: theme.palette.background.contrastText,
    },
  },
}));

function Header() {
  const matches = useMediaQuery('(min-width:600px');
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.header}>
      <Toolbar>
        <Grid item xs={10} md={4}>
          <Avatar alt="dev icon" src={DevIcon} />
        </Grid>
        <Grid item xs={2} md={8}>
          {matches ? <Navbar /> : <NavMenu />}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
