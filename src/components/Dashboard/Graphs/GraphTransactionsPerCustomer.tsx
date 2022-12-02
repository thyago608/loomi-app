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
    background: "#FFF",
  },

  title: {
    text: "Transações por tipo de cliente",
    style: {
      fontFamily: "Ubuntu",
      fontSize: "16",
      color: "#333333",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    customLegendItems: [
      "Cliente Retornando",
      "Novo Cliente",
    ],
    inverseOrder: true,
  },
  colors: ["#7BB686", "#9FD8D5"],
};

const series = [45, 55];

export function GraphTransactionsPerCustomer() {
  return (
    <Charts
      options={options}
      series={series}
      type="donut"
      width={400}
      height={400}
    />
  );
}
