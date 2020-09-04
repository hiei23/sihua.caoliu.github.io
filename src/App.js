import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './components/Routes'

class App extends Component {
  render() {
    return (
      <div className={this.props.classes.app}>
        <Header />
          <Routes />
        <Footer />
      </div>
    );
  }
}
const styles = (theme) => (
  {
    app:{
      height: '100%',
      backgroundColor: theme.palette.yellow,
    },
  }
)

export default withStyles(styles)(App);
