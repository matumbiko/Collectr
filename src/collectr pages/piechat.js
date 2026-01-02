import { Pie } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);



const DebtPieChart = () => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        data: [1800, 700, 503, 3884, 2891], // example values
        backgroundColor: ["#2ecc71", "#a82b1dff","#1c4668ff", "#948b3696", "#401469ff"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left",
        onClick: null,
        },
      datalabels: {
      color: 'black',       // color of the labels
      font: { weight: 'bold', size: 8 },
      formatter: (value, context) => {
        return value; 
      },
    },
    },
  };

  return (
    <div style={{ height: "150px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default DebtPieChart;
