import React, { Component } from 'react'
import './App.css'

import { indigo, orange } from '@material-ui/core/colors'

import { getData } from './util'
import Home from './Home';


const styles = theme => ({
  palette: {
    primary: indigo,
    secondary: orange
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

export default class App extends Component {

  setData = async () => {
    const snowReport = await getData('snowreport')
    const resortForecast = await getData('resortforecast')
    this.setState({
      snowReport,
      resortForecast
    })
    console.log(snowReport)
    console.log(resortForecast)
  }

  setActiveTable = (e) => {
    const value = e.target.value
    console.log(value)
    this.setState({activeTable: value})
    // console.log(this.state);
  }

  componentDidMount() {
    this.setData()
  }

  render() {
    return (
      <div>
        <Home styles={styles} setActiveTable={this.setActiveTable}/>
      </div>
    )
  }
}
