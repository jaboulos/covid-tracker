import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  // need to make this async...@47
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData()); // state hook
    };

    fetchAPI();
  });

  const lineChart =
    // Handle async fetch data issue, until data is returned, render loading
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date), // 52
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Infected',
              borderColor: 'red',
              backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true,
            },
          ], // 53
        }}
      />
    ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
