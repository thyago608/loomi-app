import { ApexOptions } from "apexcharts";

export const chartForMonthOptions: ApexOptions = {
  chart: {
    events: {
      click: function (chart, w, e) {
        // console.log(chart, w, e)
      },
    },
    foreColor: "#111",
    fontFamily: "Ubuntu",
    background: "#FFF",
    toolbar: {
      show: false,
    },
  },
  title: {
    text: "Pedidos por mês",
    style: {
      fontFamily: "Ubuntu",
      fontSize: "16",
      color: "#333333",
    },
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      columnWidth: "45%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    labels: {
      style: {
        fontWeight: "bold",
      },
    },
  },
  colors: ["#2b2d3d"],
};

export const chartForMonthSeries = [
  {
    data: [
      {
        x: "JAN",
        y: 0,
      },
      {
        x: "FEV",
        y: 0,
      },
      {
        x: "MAR",
        y: 0,
      },
      {
        x: "ABR",
        y: 0,
      },
      {
        x: "MAI",
        y: 0,
      },
      {
        x: "JUN",
        y: 0,
      },
      {
        x: "JUL",
        y: 0,
      },
      {
        x: "AGO",
        y: 0,
      },
      {
        x: "SET",
        y: 0,
      },
      {
        x: "OUT",
        y: 0,
      },
      {
        x: "NOV",
        y: 0,
      },
      {
        x: "DEZ",
        y: 0,
      },
    ],
  },
];
