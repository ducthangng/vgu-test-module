import React from 'react';
import { Chart } from 'react-google-charts';

const UserChart: React.FC = () => {
  const data = [
    ['Test Name', 'Grade'],
    ['September 09', 4.5],
    ['September 11', 5.5],
    ['Octorber 15', 6.5],
    ['Octorber 29', 7.5],
    ['Octorber 31', 8.5],
  ];

  const options = {
    title: 'User Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default UserChart;
