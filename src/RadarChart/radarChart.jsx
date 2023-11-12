import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

const RadarChart = ({ datasets }) => {
  const chartData = {
    labels: ["Endurance", "Support", "Damage", "AoE", "Crowd Control"],
    datasets: datasets,
  };
  const options = {
    scale: {
      r: {
        min: 0,
        max: 5
      },
      ticks: {
        stepSize: 1,
      }
    },
    elements: {
      line: {
        borderWidth: 5,
        fill: true,
        tension: 0,
      },
      point: {
        hoverRadius: 5,
        hoverBackgroundColor: 'white',
        hoverBorderColor: 'orange',
      },
    },
  };

  return <Radar className="smth" data={chartData} options={options} />;
};

export default RadarChart;
