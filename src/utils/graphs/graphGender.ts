import { ApexOptions } from "apexcharts";

export const graphGenderOptions: ApexOptions = {
  chart: {
    events: {
      click: function (chart, w, e) {
        // console.log(chart, w, e)
      },
    },
    background: "#FFF",
  },
  title: {
    text: "Sessões por gênero",
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
    customLegendItems: ["Masculino", "Feminino"],
  },
  colors: ["#F7C982", "#393C56"],
};

export const graphGenderSeries = [45, 55];
