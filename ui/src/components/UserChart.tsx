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

const UserChart: React.FC = () => {
  // let data: google.visualization.DataTable();

  const [data, setData] = useState<(string | number)[][]>([
    ['Test Name', 'Grade'],
  ]);

  const getData = async () => {
    const id: number = (await authApi.getId()) as number;
    const results: Result[] = (await userApi.getAllTestResult(id)) as Result[];

    console.log('api response:');
    console.log(results);

    if (results.length === 0) {
      return;
    }

    let newData = [...data];

    for (let i = results.length - 10; i < results.length; i++) {
      data.push([unixToDatetime(results[i].dateCreated), results[i].score]);
    }

    setData(newData);
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
    <>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </>
  );
};

export default UserChart;
