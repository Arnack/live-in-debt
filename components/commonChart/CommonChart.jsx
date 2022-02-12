import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const CommonChart = ({ data, categories, label, type }) => {
  const options = {
    chart: {
      type: type || "spline",
    },
    title: {
      text: label,
    },
    xAxis: {
      categories,
    },
    yAxis: {
      label: "",
    },
    series: [
      {
        name: label,
        data,
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
