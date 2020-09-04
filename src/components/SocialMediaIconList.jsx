import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles';
import { GithubCircle, LinkedinBox, Email } from 'mdi-material-ui/'
import { CONTACT_INFO } from './Content'

const styles = (theme) => (
  {
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

const SocialMediaIconList = ({classes}) => {
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

export default withStyles(styles)(SocialMediaIconList)
