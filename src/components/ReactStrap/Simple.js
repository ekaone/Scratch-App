import React from 'react'
import { 
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
 } from "reactstrap";
 import { Bar, Line } from 'react-chartjs-2';


// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'blue',
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    // custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

export default function Simple() {
  return (
    <div>
      <Card className="text-white bg-info">
        <CardBody className="pb-0">
          <ButtonGroup className="float-right">
            <ButtonDropdown id='card1'>
              <DropdownToggle caret className="p-0" color="transparent">
                <i className="icon-settings"></i>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem disabled>Disabled action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <div className="text-value">9.823</div>
          <div>Members online..</div>
        </CardBody>
        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
          <Line data={cardChartData1} options={cardChartOpts1} height={70} />
        </div>
      </Card>
    </div>
  )
}
