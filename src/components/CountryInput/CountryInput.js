import React, {useState} from 'react';
import "./CountryInput.css";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function CountryInput() {
  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="countryInput">
      <FormControl className="countryInput__form">
        <InputLabel id="select-country">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          onChange={handleChange}
        >
          <MenuItem value={'United States'}>United States</MenuItem>
          <MenuItem value={'Canada'}>Canada</MenuItem>
          <MenuItem value={'UK'}>UK</MenuItem>

        </Select>
      </FormControl>
    </div>
  )
}

export default CountryInput
