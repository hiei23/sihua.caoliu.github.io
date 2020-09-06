import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { PROJECTS } from "./Content"
import Project from "./Project"

const styles = () => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    lineHeight: 1.5,
  },
})

const Portfolio = ({ classes }) => {
  const projects = PROJECTS.map((item) => {
    return <Project key={item.title} projectItem={item} />
  })
  return (
    <section id="portfolio">
      <Typography variant="h4">Projects</Typography>
      <div className={classes.container}>{projects}</div>
    </section>
  )
}

export default withStyles(styles)(Portfolio)
