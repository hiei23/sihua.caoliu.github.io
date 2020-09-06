import React from "react"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import { withStyles } from "@material-ui/core/styles"
import { ABOUT } from "./Content"
import READING_GUY from "../images/readingGuy.png"

const styles = (theme) => ({
  card: {
    marginTop: 25,
    backgroundColor: "transparent",
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },
  cardContent: {
    float: "left",
  },
  media: {
    height: 200,
    width: 300,
    float: "right",
  },
})

const Quote = ({ text, author }) => {
  return (
    <blockquote style={{ textAlign: "center" }}>
      <em>{`"${text}"`}</em>
      <p>{`by ${author.title} - ${author.name} `}</p>
    </blockquote>
  )
}

const Description = ({ paragraphs }) => {
  return paragraphs.map((paragraph, i) => {
    return <p key={i}>{paragraph}</p>
  })
}

const About = ({ classes }) => {
  const { paragraphs, quote } = ABOUT

  return (
    <>
      <Typography variant="h4">About</Typography>
      <Card id="about" className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Description paragraphs={paragraphs} />
          <p>Here are a few technologies I've been working with recently:</p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>HTML & (S)CSS</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
          <p>Favorite quote</p>
          <Quote text={quote.text} author={quote.author} />
        </CardContent>
        <CardMedia className={classes.media} image={READING_GUY} title="avatar" />
      </Card>
    </>
  )
}

export default withStyles(styles)(About)
