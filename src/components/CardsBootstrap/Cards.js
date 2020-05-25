import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import { ArrowRight, Heart, BoxArrowInUpRight, Star } from 'react-bootstrap-icons';

import Logo from './ubuntu.png'

export default function Cards() {
  return (
    <>
      <Container className="mt-2">
          <CardGroup style={{ width: '20rem', height: '9rem' }} className="shadow p-0 mb-5 bg-white rounded">
            <Row>
              <Col>
                <Card.Body style={{ paddingLeft: 15 }}>
                  <Card.Img variant="top" src={Logo} style={{ width: '100px', height: '100px' }} />
                </Card.Body>
              </Col>
              <Col>
                <Card.Body style={{ paddingLeft: 0 }}>
                  <Card.Title><h4>Ubuntu</h4></Card.Title>
                  <Card.Subtitle className="mb-1 text-muted">9888 Members</Card.Subtitle>
                  <div style={{ paddingTop: '10px' }}>
                  <Card.Link href="#">
                    <Heart color="royalblue" size={14} />
                    {" "}
                    <span style={{ fontSize: 14 }}>96%</span>
                  </Card.Link>
                  <Card.Link href="#" className="float-right">
                    <BoxArrowInUpRight color="royalblue" size={14} />
                    {" "}
                    <Star color="royalblue" size={14} />
                  </Card.Link>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </CardGroup>
      </Container>
    </>
  )
}
