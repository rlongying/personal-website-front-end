import React, { useState, useRef } from 'react';

import { makeStyles } from '@material-ui/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  popover: {
    backgroundColor: theme.palette.background.light,
    left: '0 !important',
    right: '0 !important',
    borderRadius: '0',
    maxWidth: '100%',
    '& li': {
      justifyContent: 'center',
      '& a': {
        color: theme.palette.background.contrastText,
      },
    },
  },
  iconBtn: {
    color: theme.palette.background.contrastText,
  },
}));

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton
        aria-controls="nav-menu"
        className={classes.iconBtn}
        fontSize=""
        onClick={toggleMenu}
        ref={anchorRef}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Menu
        id="nav-menu"
        anchorEl={anchorRef.current}
        keepMounted
        open={isOpen}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PopoverClasses={{ paper: classes.popover }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/blogs">Blog</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/widgets">Widget</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/projects">Project</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

// Navmenu.propTypes = {

// }

export default NavMenu;
