import React, { Component } from 'react'
import { getData, getForecast } from './util'
import Home from './Components/Home'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTable: null
    }
  }

  setData = async () => {
    const snowReports = {
      // Westendorf: await getData('snowreport', 222036).then(req => req.data),
      // Kitzbuhl: await getData('snowreport', 222013).then(req => req.data),
      // Emlau: await getData('snowreport', 222023).then(req => req.data),
      // Saalbach: await getData('snowreport', 222018).then(req => req.data)
    }

    const resortForecasts = {
      Westendorf: await getForecast(222036, 3, 6).then(req => req.data),
      Kitzbuhl: await getForecast(222013, 3, 6).then(req => req.data),
      Emlau: await getForecast(222023, 3, 6).then(req => req.data),
      Saalbach: await getForecast(222018, 3, 6).then(req => req.data),
      Jochberg: await getForecast(54884231, 3, 6).then(req => req.data)
    }

    this.setState({
      snowReports,
      resortForecasts
    })
  }

  setActiveTable = e => {
    const value = e.target.value
    this.setState({ activeTable: value })
  }

  handleSelectResort = (e, value) => {
    const { resortForecasts } = this.state

    const selectedResort = Object.keys(resortForecasts)
      .filter(key => key === value)
      .reduce((obj, key) => {
        obj[key] = resortForecasts[key]
        return obj
      }, {})

    this.setState({ selectedResort })
  }

  componentDidMount() {
    this.setData()
  }

  render() {
    const { activeTable, snowReports, selectedResort } = this.state
    return (
      <div>
        <Home
          setActiveTable={this.setActiveTable}
          activeTable={activeTable}
          snowReports={snowReports}
          handleSelectResort={this.handleSelectResort}
          selectedResort={selectedResort}
        />
      </div>
    )
  }
}
