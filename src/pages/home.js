import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import PortraitImg from '../static/images/portrait-light.png';
import SocialIcons from '../components/socialIcons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100vw',
    paddingTop: '20vh',
  },
  portrait: {
    [theme.breakpoints.up('sm')]: {
      width: '240px',
      height: '240px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '50vw',
      height: '50vw',
    },
    marginBottom: '20px',
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.root}>
      <Avatar
        alt="portrait"
        src={PortraitImg}
        variant="square"
        className={classes.portrait}
      />
      <Typography variant="h3">I am Ivan</Typography>
      <Typography variant="h6">Software Developer, Foodie</Typography>
      <SocialIcons fontSize="large" spacing="2em" />
    </Container>
  );
}

export default Home;
