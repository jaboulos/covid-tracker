import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  //1.04
  const [fetchedCountries, setFetchedCountries] = useState([]);
  // pass in 2nd argument to only call useEffect when state changes
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  return (
    <FormControl className={styles.formControl}>
      {/* 1.10 */}
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value=''>Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
