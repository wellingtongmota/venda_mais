import React, { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  RadialLinearScale,
  ArcElement,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

function updateChart(chart) {
  chart.update();
}

const PolarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    updateChart(chart);
  }, []);

  const options = {
    scales: {
      r:
      {
        min: 0,
        max: 5,
        ticks:
        {
          stepSize: 1
        }
      }
    },
    colors: {
      forceOverride: true
    }
  }

  return <Chart ref={chartRef} type='polarArea' options={options} data={data} style={{ maxWidth: '95%' }} />;
}

export default PolarChart