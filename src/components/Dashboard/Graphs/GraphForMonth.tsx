import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Charts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
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

const series = [
  {
    data: [
      {
        x: "JAN",
        y: 15,
      },
      {
        x: "FEV",
        y: 40,
      },
      {
        x: "MAR",
        y: 20,
      },
      {
        x: "ABR",
        y: 30,
      },
      {
        x: "MAI",
        y: 20,
      },
      {
        x: "JUN",
        y: 30,
      },
      {
        x: "JUL",
        y: 10,
      },
      {
        x: "AGO",
        y: 15,
      },
      {
        x: "SET",
        y: 20,
      },
      {
        x: "OUT",
        y: 30,
      },
      {
        x: "NOV",
        y: 20,
      },
      {
        x: "DEZ",
        y: 25,
      },
    ],
  },
];

export function GraphForMonth() {
  return (
    <Charts
      options={options}
      series={series}
      type="bar"
      width={400}
      height={250}
    />
  );
}
