import React, { Component } from 'react'
import SnowTable from './SnowTable'
import ResortTable from './ResortTable'
import { Dropdown } from 'semantic-ui-react'
import { OPTIONS } from '../util'

class DataTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snowReports: undefined,
      selectedResort: undefined
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
    const { activeTable, selectedResort} = this.props
    const { snowReports  } = this.state
    return (
      <div>
        {activeTable && activeTable === 'snowReport' && (
          <SnowTable data={snowReports} />
        )}
        {activeTable && activeTable === 'resortForecast' && (
          <Dropdown
            options={OPTIONS}
            placeholder="Select a Spot"
            fluid
            selection
            onChange={(e, val) => this.props.handleSelectResort(e, val.value)}
          />
        )}
        {selectedResort !== undefined && activeTable === 'resortForecast' &&
          <ResortTable selectedResort={selectedResort}/>
        }
      </div>
    )
  }
}

export default DataTable
