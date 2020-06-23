import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import PropTypes from 'prop-types'

function Navbar() {
  return (
    <Grid container direction="row" justify="space-evenly">
      <Link to="/">
        <Typography>Home</Typography>
      </Link>
      <Link to="/blogs">
        <Typography>Blog</Typography>
      </Link>
      <Link to="/widgets">
        <Typography>Widget</Typography>
      </Link>
      <Link to="/projects">
        <Typography>Project</Typography>
      </Link>
    </Grid>
  );
}

// Navbar.propTypes = {

// }

export default Navbar;
