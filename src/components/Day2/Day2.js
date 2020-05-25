import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Cards from './Cards'
import Operator from './Operator'
import { useLocalState } from './useLocalState'

const Front = () => {

  const [data, setData] = useLocalState("data", "")

  return(
    <center>
    <Button href="/operator" target="blank" variant="primary">Open operator page</Button>
    <p />
    <Row>
      <Col>
        <Cards 
          color={"light"} 
          header={"Complain"}
          title={"Counter"}
          number={ data !== "" ? parseInt(data) : setData(10) }
          />
      </Col>
    </Row>
    </center>
  )
}

export default function Day2() {
  return (
    <>
    <Container fluid className="mt-2">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Front} />
          <Route path="/operator" component={Operator} />
        </Switch>
      </Router>
      </Container>
    </>
  )
}
