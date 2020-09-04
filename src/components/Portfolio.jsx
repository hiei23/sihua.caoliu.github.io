import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PROJECTS } from './Content'
import Project from './Project'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    lineHeight: 1.5,
    backgroundColor: `${theme.palette.blumine}`
  }
})

const Portfolio = ({classes}) => {
  const projects = PROJECTS.map(item => {
    return (<Project key={item.title} projectItem={item} />)
  })
  return(
    <div className={classes.container}>
      {projects}
    </div>
  )
}

export default withStyles(styles)(Portfolio)
