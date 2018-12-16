import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class ResortTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      forecast: props.selectedResort.forecast
    }
  }

  getForecast() {
    const {selectedResort} = this.props
    if(selectedResort !== undefined) {
      console.log(selectedResort)
    }
  }

  componentWillMount() {
    this.getForecast()
  }

  render() {
    // console.log(this.props);
    const {selectedResort} = this.props
    
    return (<div>hello</div>)
  }
}

export default ResortTable
