import { ApexOptions } from "apexcharts";

export const graphRealProfitSeries = [
  {
    name: "Realizados",
    data: [20, 30, 20, 15, 30, 20, 10],
  },
  {
    name: "Cancelados",
    data: [15, 8, 10, 10, 25, 15, 5],
  },
];

export const graphRealProfitOptions: ApexOptions = {
  chart: {
    background: "#FFF",
    toolbar: {
      show: false,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
  },
  title: {
    text: "Pedidos realizados x pedidos cancelados",
    style: {
      fontFamily: "Ubuntu",
      fontSize: "16",
      color: "#333333",
    },
  },
  colors: ["#109E8E", "#F18F7F"],
  plotOptions: {
    bar: {
      columnWidth: "65%",
      horizontal: false,
      borderRadius: 2,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 700,
          },
        },
      },
    },
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    show: false,
  },
  stroke: {
    show: true,
    width: -5,
  },
  xaxis: {
    categories: [
      "JAN",
      "FEV",
      "MAR",
      "ABR",
      "MAI",
      "JUN",
      "JUL",
    ],
    labels: {
      style: {
        fontWeight: "bold",
      },
    },
  },
  fill: {
    opacity: 1,
  },
};
