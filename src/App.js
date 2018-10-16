import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";


const Pie = (props) => {
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

  return(
    <Chart
      chartType="PieChart"
      data={[["Age", "Weight"], ["Dog Lovers", props.lovers ], ["people who don't like dogs", props.haters]]}
      options={pieOptions}
      graph_id="PieChart"
      width={"100%"}
      height={"400px"}
      legend_toggle
    />
  )
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pie lovers={9} haters={2}/>
      </div>
    );
  }
}

export default App;
