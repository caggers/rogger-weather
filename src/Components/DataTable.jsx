import React, { Component } from 'react'
import SnowTable from './SnowTable'
import ResortTable from './ResortTable'

class DataTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snowReports: undefined
    }
  }

  componentWillReceiveProps() {
    const { snowReports } = this.props
    if (snowReports !== undefined) {
      const snowArray = Object.values(snowReports)
      this.setState({ snowReports: snowArray })
    }
  }

  render() {
    const { resortReport, activeTable } = this.props
    const { snowReports } = this.state
    return (
      <div>
        {activeTable && activeTable === 'snowReport' && (
          <SnowTable data={snowReports} />
        )}
        {activeTable && activeTable === 'resortForecast' && (
          <ResortTable data={resortReport} />
        )}
      </div>
    )
  }
}

export default DataTable
