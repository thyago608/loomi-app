import { ApexOptions } from "apexcharts";

export const ChartTransactionsPerCustomerOptions: ApexOptions = {
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
    customLegendItems: ["Cliente Retornando", "Novo Cliente"],
    inverseOrder: true,
  },
  colors: ["#7BB686", "#9FD8D5"],
};

export const ChartTransactionsPerCustomerSeries = [45, 55];
