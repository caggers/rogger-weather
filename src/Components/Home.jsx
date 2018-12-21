import React from 'react'
import { Button, Grid, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import Header from '../Global/Header'
import DataTable from './DataTable'
import { getForecast, OPTIONS } from '../util'

const StyledContainer = styled.div`
  padding-top: 50px;
`

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedResort: {}
    }
  }

  handleSelectResort = async (value) => {
    const option = OPTIONS.filter(item => {
      return item.value === value ? item : null
    })


    const id = option[0].id

    const resortForecast = await getForecast(id, 1).then(req => req.data)

    this.setState({ resortForecast })
  }

  render() {
    const { setActiveTable, activeTable, snowReports } = this.props

    const { resortForecast } = this.state
  
    return (
      
      <div>
        <Header />
        <StyledContainer>
          <Container>
            <Grid stackable textAlign="center">
              <Grid.Row>
                <Grid.Column width={8} textAlign="center">
                  <Button
                    primary
                    value="snowReport"
                    onClick={e => {
                      setActiveTable(e)
                    }}
                  >
                    Snow Report
                  </Button>
                </Grid.Column>
                <Grid.Column width={8} textAlign="center">
                  <Button
                    secondary
                    value="resortForecast"
                    onClick={e => {
                      setActiveTable(e)
                    }}
                  >
                    Resort Forecast
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <DataTable
                activeTable={activeTable}
                snowReports={snowReports}
                handleSelectResort={this.handleSelectResort}
                resortForecast={resortForecast}
              />
              <Grid.Row divided />
            </Grid>
          </Container>
        </StyledContainer>
      </div>
    )
  }
}

export default Home
