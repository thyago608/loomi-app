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
    text: "Transações por idades",
    style: {
      fontFamily: "Ubuntu",
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
    categories: [
      "-18",
      "18-24",
      "25-34",
      "35-44",
      "45-54",
      "55-64",
      "65+",
    ],
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

const series = [
  {
    data: [100, 500, 900, 1000, 600, 2000],
  },
];

export function GraphForAge() {
  return (
    <Charts
      options={options}
      series={series}
      type="bar"
      width={500}
      height={300}
    />
  );
}
