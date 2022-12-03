import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Charts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type GraphType =
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

interface GraphProps {
  width: number;
  height: number;
  options: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  type: GraphType;
}

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
