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

const series = [45, 55];

export function GraphGender() {
  return (
    <Charts
      options={options}
      series={series}
      type="donut"
      width={400}
      height={250}
    />
  );
}
