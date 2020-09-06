import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Project from "./components/Portfolio"
import Contact from "./components/Contact"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <Project />
        <Contact />
        <Footer />
      </>
    )
  }
}
const styles = (theme) => ({})

export default withStyles(styles)(App)
