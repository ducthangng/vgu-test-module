import React, { useState, useEffect, PureComponent } from 'react';
import { Chart } from 'react-google-charts';
import { Result } from '../models/Result';
import { authApi } from '../api/authApi';
import { testApi } from '../api/testApi';
import { userApi } from '../api/userApi';
import { unixToDatetime } from '../utils/timeConvert';

let defaultData = [
  ['Test Name', 'Grade'],
  ['September 09', 4.5],
  ['September 11', 5.5],
  ['Octorber 15', 6.5],
  ['Octorber 29', 7.5],
  ['Octorber 31', 8.5],
];

interface GraphData {
  col1: string;
  col2: string | number;
}

const UserChart: React.FC = () => {
  // let data: google.visualization.DataTable();
  const data: (string | number)[][] = [['Test Name', 'Grade']];
  const getData = async () => {
    const id: number = (await authApi.getId()) as number;
    const results: Result[] = (await userApi.getAllTestResult(id)) as Result[];

    if (results.length === 0) {
      return;
    }

    results.forEach((result, index) => {
      console.log(index + 1 + ' :' + defaultData[index + 1].length);
      // defaultData[index + 1][0] = result.resultNote;
      // defaultData[index + 1][1] = result.score;

      if (index > defaultData.length) {
        // defaultData.push(defaultData[1]);
        return;
      }
    });

    console.log('data: ', data);
    console.log('data2: ', defaultData);
  };
  useEffect(() => {
    getData();
  }, []);
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
      data={defaultData}
      options={options}
    />
  );
};

export default UserChart;
