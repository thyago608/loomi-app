import { ApexOptions } from "apexcharts";

export const graphForAgeOptions: ApexOptions = {
  chart: {
    events: {
      click: function (chart, w, e) {
        // console.log(chart, w, e)
      },
    },
    foreColor: "#111",
    background: "#FFF",
    toolbar: {
      show: false,
    },
  },
  title: {
    text: "Transações por idades",
    style: {
      fontSize: "16",
      color: "#333333",
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 3,
      horizontal: true,
      barHeight: "60",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    labels: {
      style: {
        fontWeight: "bold",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontWeight: "bold",
      },
    },
  },
  colors: ["#2b2d3d"],
};

export const graphForAgeSeries = [
  {
    data: [100, 500, 900, 1000, 600, 2000],
  },
];
