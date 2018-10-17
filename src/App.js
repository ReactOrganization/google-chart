import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";


const Pie = ({ cost, savings }) => {
  const loan = (cost - savings)
  const pieOptions = {
    title: "",
    pieHole: 0,
    slices: [
      {
        color: "#777fe4",
        offset: 0.1 
      },
      {
        color: "blue"
      }
    ],
    pieSliceText: "value",
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    pieSliceText: "label",
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%"

    },
    fontName: "Roboto"
  };

  return(
    <div>
      <div>
        {cost}
      </div>
      <Chart
        chartType="PieChart"
        data={[["Car cost", "Loan"], ["Car cost", cost ], ["Loan", loan ]]}
        options={pieOptions}
        graph_id="PieChart"
        width={"100%"}
        height={"400px"}
        legend_toggle
      />
    </div>

  )
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pie cost={15} savings={2}/>
      </div>
    );
  }
}

export default App;
