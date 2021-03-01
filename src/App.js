import React from 'react';

// named imports
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import coronaImage from './images/image.png';

import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log(data);
  }

  handleCountryChange = async (country) => {
    // first fetch data
    // then set state
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} alt='COVIID-19' src={coronaImage} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
