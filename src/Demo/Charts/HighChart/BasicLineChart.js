import React from "react";
import HighCharts from "highcharts";
import HighChartsReact from "highcharts-react-official";

import coloridea from "../../Config/coloridea";
import chartdata from "../../Config/chartdata";

const options = {
  chart: {
    type: "spline"
  },
  colors: coloridea.basiclinechart,
  title: {
    text: "Solar Employment Growth by Sector, 2010-2017"
  },
  subtitle: {
    text: chartdata.sourcelink
  },
  yAxis: {
    title: {
      text: "Number of Employees"
    }
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },
  series: [
    {
      name: "Installation",
      data: chartdata.linechartInstallationdata
    },
    {
      name: "Manufacturing",
      data: chartdata.linechartManufacturingdata
    },
    {
      name: "Sales & Distribution",
      data: chartdata.linechartSalesDistributiondata
    }
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom"
          }
        }
      }
    ]
  }
};

const BasicLinechart = () => {
  return <HighChartsReact HighCharts={HighCharts} options={options} />;
};

export default BasicLinechart;
