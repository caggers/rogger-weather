import React, { Component } from 'react'
import _ from 'lodash'
import { Table } from 'semantic-ui-react'

class ResortTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      column: null,
      direction: null,
      data: this.props.data,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({
        data: nextProps.data,
      })
    }
    console.log(this.state)
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending'
      })

      return
    }

    this.setState({
      forecast: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })
  }

  render() {
    
    const { column, data, direction } = this.state
    return (
      <div>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'temp_c' ? direction : null}
                onClick={this.handleSort('temp_c')}
              >
                Temp °C
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'feelslike_c' ? direction : null}
                onClick={this.handleSort('feelslike_c')}
              >
                Feels Like
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'freshsnow_cm' ? direction : null}
                onClick={this.handleSort('freshsnow_cm')}
              >
                Fresh Snow (cm)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'winddir_compass' ? direction : null}
                onClick={this.handleSort('winddir_compass')}
              >
                Wind Direction
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'windspd_kts' ? direction : null}
                onClick={this.handleSort('windspd_kts')}
              >
                Wind Speed (knots)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'windgst_kts' ? direction : null}
                onClick={this.handleSort('windgst_kts')}
              >
                Wind Gust (knots)
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'wx_desc' ? direction : null}
                onClick={this.handleSort('wx_desc')}
              >
                Weather Desc.
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(
              data,
              (
                { time, frzglvl_m, rain_mm, snow_mm, totalcloud_pct, vis_km },
                i
              ) => (
                <Table.Row key={i}>
                  <Table.Cell>{time}</Table.Cell>
                  <Table.Cell>{frzglvl_m} m</Table.Cell>
                  <Table.Cell>{rain_mm} mm</Table.Cell>
                  <Table.Cell>{snow_mm} mm</Table.Cell>
                  <Table.Cell>{totalcloud_pct} %</Table.Cell>
                  <Table.Cell>{vis_km} km</Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default ResortTable
