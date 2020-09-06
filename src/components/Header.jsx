import React from "react"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"

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
}

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button href="#about">About</Button>
        <Button href="#portfolio">Portfolio</Button>
        <Button href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)
