import React from 'react'
import { Button, Grid } from 'semantic-ui-react'
import Header from './Global/Header'

class Home extends React.Component {
  render() {
    const { setActiveTable } = this.props
    return (
      <div>
        <Header />
        <Button primary value="snowReport" onClick={(e) => {setActiveTable(e)}}>
          Snow Report
        </Button>
        <Button secondary value="resortForecast" onClick={(e) => {setActiveTable(e)}}>
          Resort Forecast
        </Button>
      </div>
    )
  }
}

export default Home;