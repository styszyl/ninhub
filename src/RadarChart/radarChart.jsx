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

const RadarChart = ({ data }) => {
  const chartData = {
    labels: ["Endurance", "Support", "Power", "Aoe", "Control"],
    datasets: [
      {
        label: "Value", // Etykieta zestawu danych, widoczna w legendzie
        data: [4, 3, 4, 5, 2], // Tablica wartości punktów w zestawie danych
        backgroundColor: "rgba(252, 147, 47, 0.7)", // Kolor wypełnienia obszaru pod linią
        borderColor: "rgba(252, 147, 47, 0.9)", // Kolor obramowania linii
        borderWidth: 1, // Grubość obramowania linii
        // borderCapStyle: "butt", // Styl zakończenia linii (możliwe wartości: 'butt', 'round', 'square')
        // borderDash: [], // Długości i przerwy dla kresek w linii
        // borderDashOffset: 0.0, // Przesunięcie kreski linii
        // borderJoinStyle: "miter", // Styl łączenia segmentów linii (możliwe wartości: 'miter', 'round', 'bevel')
        // pointBorderColor: "rgba(255, 99, 132, 1)", // Kolor obramowania punktów
        // pointBackgroundColor: "#fff", // Kolor wypełnienia punktów
        pointBorderWidth: 2, // Grubość obramowania punktów
        // pointHoverRadius: 5, // Rozmiar punktów po najechaniu kursorem
        // pointHoverBackgroundColor: "rgba(255, 99, 132, 1)", // Kolor punktów po najechaniu kursorem
        // pointHoverBorderColor: "rgba(220,220,220,1)", // Kolor obramowania punktów po najechaniu kursorem
        // pointHoverBorderWidth: 2, // Grubość obramowania punktów po najechaniu kursorem
        pointRadius: 2, // Rozmiar punktów
        // pointHitRadius: 10, // Dystans, na którym punkty reagują na zdarzenia
        // pointStyle: "circle", // Styl punktów (możliwe wartości: 'circle', 'triangle', 'rect', 'rectRounded', 'rectRot', 'cross', 'crossRot', 'star', 'line', 'dash')
        // showLine: true, // Określa, czy wykres powinien być rysowany jako linia
        // spanGaps: true, // Określa, czy powinny być ignorowane brakujące wartości danych i linia powinna przejść przez nie
        // backdropColor: "red"
      },
    ],
  };
  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
        max: 5,
        stepSize: 1,
      }
    },
    elements: {
      line: {
        borderWidth: 2,
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
