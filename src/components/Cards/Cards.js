import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <CardComponent
          className={styles.infected}
          cardTitle='Infected'
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle='Total number of active COVID-19 cases.'
        />
        <CardComponent
          className={styles.recovered}
          cardTitle='Recovered'
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle='Total number of recoveries from COVID-19.'
        />
        <CardComponent
          className={styles.deaths}
          cardTitle='Deaths'
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle='Total number of deaths related to COVID-19.'
        />
      </Grid>
    </div>
  );
};

export default Cards;
