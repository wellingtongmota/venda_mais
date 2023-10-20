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
import { PolarArea } from 'react-chartjs-2';

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
  chart?.update();
}

const PolarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    updateChart(chart);
  }, []);

  const options = {
    layout: {
      // padding: 0
    },
    scales: {
      r:
      {
        min: 0,
        max: 5,
        ticks:
        {
          stepSize: 1,
          color: '#000',
          // fundos dos números 1, 2, 3, 4 e 5
          // backdropPadding: {
          //   x: 5,
          //   y: 4
          // }
        },
        grid: {
          color: '#9DB2BF'
        }
      },
    },
    plugins: {
      legend: {
        // display: false,
        // align: 'start',
        // justify: 'top',
        // position: 'bottom',
        // fullSize: true,
        labels: {
          color: '#fff',
        }
      }
    }
  }

  return <PolarArea ref={chartRef} options={options} data={data} style={{ maxWidth: '95%' }} />;
}

export default PolarChart