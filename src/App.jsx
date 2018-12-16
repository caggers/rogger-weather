import React, { Component } from 'react'
import './App.css'

import { getData } from './util'
import Home from './Home'

export default class App extends Component {

  setData = async () => {
    const snowReport = await getData('snowreport')
    const resortForecast = await getData('resortforecast')
    this.setState({
      snowReport,
      resortForecast
    })
  }

  setActiveTable = (e) => {
    const value = e.target.value
    this.setState({activeTable: value})
  }

  componentDidMount() {
    this.setData()
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Home setActiveTable={this.setActiveTable}/>
      </div>
    )
  }
}
