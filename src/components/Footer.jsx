import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { GithubCircle, LinkedinBox, Email } from 'mdi-material-ui/'
import { CONTACT_INFO } from './Content'
import SocialMediaIconList from './SocialMediaIconList'

const styles = (theme) => (
  {
    footer: {
      left: 0,
      bottom: 0,
      borderTop: `2px solid ${theme.palette.navy}`,
      backgroundColor: `${theme.palette.navy}`,
      position: 'fixed',
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

const CONTACT_LOGOS = {
  github: GithubCircle,
  linkedIn: LinkedinBox,
  email: Email,
}

const SocialMediaMenu = ({classes}) => {
  const contactTypes = Object.keys(CONTACT_INFO)
  const socialMediaList = contactTypes.map(type => {
    const refTag = type === 'email'? `mailto:${CONTACT_INFO[type]}`: CONTACT_INFO[type]
    const Logo = CONTACT_LOGOS[type]
    return (
      <IconButton key={type} component='a' href={refTag} className={classes.icon}>
        <Logo className={classes.icon} />
      </IconButton>
    )
  })
  return socialMediaList
}

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
