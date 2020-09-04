import 'raf/polyfill';
import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot'
import './index.css';
import 'typeface-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
/*
`
Hippie Blue	#548BB3	Primary
Blumine	#185d88	Info
Fruit Salad	#4ea46e	Success
Brandy Punch	#cc9436	Warning
Pomegranate	#f44336	Danger
`
 */
const colors = {
  dawnPink: '#F9F4F2',
  hippieBlue: '#548BB3',
  hippiePink: '#A94466',
  cornflower: '#8ADBE9',
  blumine: '#185D88',
  fruitSalad: '#4ea46e',
  brandyPunch: '#cc9436',
  pomegranate: '#f44336',
  white: '#FFFFFF',
}

const options = {
  palette: {
    text:{
      primary: colors.white,
    },
    primary:  {
      main: colors.hippieBlue,
    },
    secondary:{
      main: colors.blumine
    },
    ...colors
  },
  typography: {
    useNextVariants: true,
  },
}
const theme = createMuiTheme(options)
render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
