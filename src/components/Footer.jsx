import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
  footer: {
    paddingBottom: 20,
    display: "flex",
    justifyContent: "center",
    color: theme.palette.white,
  },
})

const Footer = ({ classes }) => {
  return (
    <footer id="contact" className={classes.footer}>
      © Copyright 2017. Made by Si Hua Cao Liu
    </footer>
  )
}

export default withStyles(styles)(Footer)
