import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../helpers/GlobalType";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ArcElement,
} from "chart.js";

import Card from "../../UI/Card/Card";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { dataPie } from "../../../DummyData/DummyData";
import ST from "./ChartPie.module.scss";
function ChartPie({
  data,
  options,
  className,
  heading,
}: propsType & {
  data: ChartData<"pie", number[], unknown>;
  options?: ChartOptions<"pie">;
  heading?: string;
}) {
  ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
  ChartJS.defaults.set("plugins.datalabels", {});
  return (
    <Card className={classNameMaker(className)}>
      <div className={classNameMaker(ST.heading_card)}>
        <h2> {heading ? heading : ""}</h2>
      </div>
      <div className={classNameMaker(ST.ChartPie)}>
        <Pie data={data} options={options}></Pie>
      </div>
    </Card>
  );
}

export default ChartPie;
