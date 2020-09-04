import React, {Fragment, Component} from 'react';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import GALLERY from '../images/gallery'

const styles = (theme) => ({
  content: {
    margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  card:{
    marginTop: 25,
    width: 400,
    maxWidth: 400,
    backgroundColor: `${theme.palette.pomegranate}`,
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    boxShadow: '-2px 4px 2px -2px rgba(184,180,186,1)'
  },
  media: {
    border: `1px solid ${theme.palette.blumine}`,
    height: 500,
    width: 400,
    borderRadius: 5,
  },
  listItem: {
    lineHeight: 1.7,
    color: `${theme.palette.blumine}`,
    fontWeight: 500,
  },
  actions:{
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const FeaturesList = ({items, classes}) => {
  const mappedFeatures = items.map((feature,i) => {
    return (<li key={i} className={classes.listItem}>{feature}</li>)
  })
  return (
    <Fragment>
      <ul>
        {mappedFeatures}
      </ul>
    </Fragment>

  )
}

class Project extends Component {
  constructor(props){
    super(props);
    this.state = { expanded: false };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  }
  render (){
    const {projectItem, classes} = this.props
    const cardDescription = projectItem.description.join('')
    return (
      <Card className={classes.card} key={projectItem.title}>
        <CardMedia
          className={classes.media}
          image={GALLERY[projectItem.imageName]}
          title={projectItem.title}
        />
        <CardContent className={classes.content} >
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            color="primary" >
            {projectItem.title}
          </Typography>
          <Typography paragraph color="secondary">
            {cardDescription}
          </Typography>
        </CardContent>
        <CardActions className={classnames(classes.actions, classes.content)} disableActionSpacing>
          <Typography
            component="h2"
            variant="h6"
            color="primary">
            Features
          </Typography>
          <IconButton
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <FeaturesList items={projectItem.features} classes={classes} />
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}

export default withStyles(styles)(Project)
