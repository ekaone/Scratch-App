import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { useLocalState } from './useLocalState'

export default function Operator() {

  const [data, setData] = useLocalState("data", "");

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicCounter">
          <Form.Control type="number" placeholder="Enter number" onChange={(e) => setData(e.target.value)} />
          <Form.Text className="text-muted">
            Enter your number and see changes on front
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  )
}
