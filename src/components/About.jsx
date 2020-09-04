import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ABOUT } from './Content'

const styles = (theme) => (
  {
    container: {
      backgroundColor: `${theme.palette.white}`,
      textAlign: 'center',
      height: 'auto'
    }
  }
)

const Quote = ({text, author}) => {
  return (
    <blockquote>
      <em>{`"${text}"`}</em>
      <p>{`by ${author.title} - ${author.name} `}</p>
    </blockquote>
  )
}

const Description = ({paragraphs}) => {
  return paragraphs.map((paragraph,i)=> {
    return (<p key={i}>{paragraph}</p>)
  })
}

const About = ({classes}) => {
  const { paragraphs, quote } = ABOUT

  return(
    <section className={classes.container}>
      <Description paragraphs={paragraphs} />
      <Quote text={quote.text} author={quote.author} />
    </section>
  )
}

export default withStyles(styles)(About)
