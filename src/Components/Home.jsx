import React from 'react'
import { Button, Grid, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import Header from '../Global/Header'
import DataTable from './DataTable'

const StyledContainer = styled.div`
  padding-top: 50px;
`

class Home extends React.Component {
  render() {
    const {
      setActiveTable,
      activeTable,
      snowReport,
      resortReport,
      snowReports
    } = this.props
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
                snowReport={snowReport}
                resortReport={resortReport}
                snowReports={snowReports}
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
