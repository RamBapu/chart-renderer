import "./HighChartsStyles.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { data } from "./config";

function App() {
  const numberOfCharts = 4;
  const optionsArray: any[] = [];
  data.map((dataEl) => {
    let options = {
      chart: { type: "area"},
      accessibility: {
        description: dataEl.description,
      },
      title: {
        text: dataEl.label,
      },
      subtitle: {
        text: dataEl.subLabel,
      },
      xAxis: {
        title: {
          text: dataEl.xAxisTitle,
        },
        categories: dataEl.xAxisCategories,
      },
      yAxis: {
        title: {
          text: dataEl.yAxisTitle,
        },
      },
      tooltip: {
        pointFormat: dataEl.toolTipPointFormat,
      },
      legend: {
        enabled: dataEl.legendToggle,
      },
      plotOptions: dataEl.plotOptions,
      series: dataEl.series,
    };
    optionsArray.push(options);
  });

  return (
    <div className="App">
      <div className="data-container"> 
      {optionsArray.map((optionsEl) => (
        <HighchartsReact containerProps={{ style: { width: "300px", height: "300px" } }}highcharts={Highcharts} options={optionsEl} />
      ))}
      </div>
    </div>
  );
}

export default App;
