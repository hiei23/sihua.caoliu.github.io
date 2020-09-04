import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SocialMediaIconList from './SocialMediaIconList'

const styles = (theme) => (
  {
    footer: {
      left: 0,
      bottom: 0,
      borderTop: `2px solid ${theme.palette.navy}`,
      backgroundColor: `${theme.palette.navy}`,
      textAlign: 'center',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    icon:{
      height: 32,
      width: 32,
      color: `${theme.palette.white}`
    }
  }
)

const Footer = ({classes}) => {
  return(
    <footer className={classes.footer}>
      <Toolbar>
        <Typography paragrpah="true">
          Contact me
        </Typography>
        <SocialMediaIconList />
      </Toolbar>
    </footer>
  )
}

export default withStyles(styles)(Footer)
