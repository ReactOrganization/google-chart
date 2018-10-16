import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

const pieOptions = {
  title: "",
  pieHole: 0,
  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    }
  ],
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
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="PieChart"
          data={[["Age", "Weight"], ["Dog Lovers", 7 ], ["people who don't like dogs", 1]]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
      </div>
    );
  }
}

export default App;
