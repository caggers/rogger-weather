import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { OPTIONS, getDate } from '../util'

import SnowTable from './SnowTable'
import ResortTable from './ResortTable'
import BaseTable from './BaseTable'

class DataTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snowReports: undefined,
      resortForecast: undefined
    }
  }

  componentWillReceiveProps(nextProps) {
    const { snowReports } = nextProps

    if (snowReports !== this.props.snowReports) {
      const snowArray = Object.values(snowReports)
      this.setState({ snowReports: snowArray })
    }
  }

  handleSelectResort = (e, val) => {
    this.props.handleSelectResort(val.value)
    const resortName = val.value

    const forecastDate = getDate()

    this.setState({ resortSelected: true, resortName, forecastDate })
  }

  render() {
    const { activeTable, resortForecast } = this.props
    const { snowReports, resortName, forecastDate } = this.state
    return (
      <div>
        {activeTable && activeTable === 'snowReport' && (
          <SnowTable data={snowReports} />
        )}
        {activeTable && activeTable === 'resortForecast' && (
          <div>
            <Dropdown
              options={OPTIONS}
              placeholder="Select a Spot"
              fluid
              selection
              onChange={(e, val) => this.handleSelectResort(e, val)}
            />
          </div>
        )}

        {resortForecast !== undefined && activeTable === 'resortForecast' && (
          <div>
            <ResortTable
              data={resortForecast}
              resortName={resortName}
              forecastDate={forecastDate}
              showUpperTable={e => this.showUpperTable(e)}
            />
            <BaseTable data={resortForecast} />
          </div>
        )}
      </div>
    )
  }
}

export default DataTable
