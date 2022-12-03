import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Charts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type GraphProps = {
  width: number;
  height: number;
  options: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  type:
    | "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "treemap";
};

export function Graph({
  width,
  height,
  options,
  type,
  series,
}: GraphProps) {
  return (
    <Charts
      type={type}
      width={width}
      height={height}
      options={options}
      series={series}
    />
  );
}
