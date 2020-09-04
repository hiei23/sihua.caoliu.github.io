import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Header = () => {
  return(
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button component={Link} to="/">Home</Button>
        <Button component={Link} to="/about">About</Button>
        <Button component={Link} to="/portfolio">Portfolio</Button>
        <Button component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)
