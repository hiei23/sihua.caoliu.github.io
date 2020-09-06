import React from "react"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import SocialMediaIconList from "./SocialMediaIconList"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
  contactSection: {
    left: 0,
    bottom: 0,
    borderTop: `2px solid ${theme.palette.navy}`,
    backgroundColor: `${theme.palette.navy}`,
    textAlign: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    height: 32,
    width: 32,
    color: `${theme.palette.white}`,
  },
})

const Contact = ({ classes }) => {
  return (
    <div className={classes.contactSection}>
      <Toolbar>
        <Typography paragrpah="true">Contact me</Typography>
        <SocialMediaIconList />
      </Toolbar>
    </div>
  )
}
export default withStyles(styles)(Contact)
