import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NumberFormat from "react-number-format";

import Form from "./Form";
import Expense from "./Expense";
import Info from "./Info";

const reducer = (accumulator, currentValue) => accumulator + currentValue;

export default function Day1() {
  const [expenseData, setExpenseData] = useState([
    { id: Math.random(), name: "Food Chicken", amount: 100 },
    { id: Math.random(), name: "Transport", amount: 75 }
  ]);

  const [buttonActive, setButtonActive] = useState(true);

  const lastExpense = expenseData.map(ed => ed.amount);

  const [data, setData] = useState({
    initialIncome: 2000,
    transaction: "",
    expense: null,
    totalExpense: null
  });

  const handleOnChange = name => e => {
    setData({ ...data, [name]: e.target.value });
  };

  useEffect(() => {
    setData(ps => {
      return { ...ps, totalExpense: lastExpense.reduce(reducer) };
    });

    if (data.expense === "" || data.transaction === "") {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [data.expense, data.transaction]);

  const handleSubmit = e => {
    e.preventDefault();
    setData(ps => {
      return {
        ...ps,
        totalExpense: data.totalExpense + parseInt(data.expense)
      };
    });

    setExpenseData(ps => {
      return [
        ...ps,
        { id: Math.random(), name: data.transaction, amount: data.expense }
      ];
    });
  };

  const Numbering = v => {
    return (
      <NumberFormat
        value={v}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rp. "}
      />
    );
  };

  return (
    <>
      <Container fluid className="mt-5">
        <Row className="justify-content-md-center">
          <Col sm={12} md={4} className="d-flex justify-content-center mb-2">
            <Info
              income={Numbering(data.initialIncome)}
              expense={Numbering(data.totalExpense)}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={12} md={6} className="d-flex justify-content-center mb-2">
            <Form
              handleSubmit={handleSubmit}
              handleOnChange={handleOnChange}
              buttonActive={buttonActive}
            />
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center">
            <Expense expensesData={expenseData} />
          </Col>
        </Row>
        <br />
        {JSON.stringify(data, null, 2)}
      </Container>
    </>
  );
}
