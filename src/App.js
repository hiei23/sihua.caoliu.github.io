import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import './App.css';

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
      backgroundColor: theme.palette.dawnPink,
    }
  }
)

export default withStyles(styles)(App);
