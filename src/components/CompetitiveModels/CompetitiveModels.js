import React, {useState} from 'react';
import "./CompetitiveModels.css";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function CompetitiveModels() {
  const [country, setCountry] = useState('');
  const [product, setProduct] = useState('');

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeProduct = (event) => {
    setProduct(event.target.value);
  };

  return (
    <div className="competitiveModels">
        <div className="country__input">
          <FormControl className="countryInput__form">
            <InputLabel id="select-country">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country}
              onChange={handleChangeCountry}
            >
              <MenuItem value={'United States'}>United States</MenuItem>
              <MenuItem value={'Canada'}>Canada</MenuItem>
              <MenuItem value={'UK'}>UK</MenuItem>

            </Select>
          </FormControl>
        </div>

        <div className="product__input">
          <FormControl className="productInput__form">
            <InputLabel id="select__productName">Enter Product Name</InputLabel>
            <Select
              labelId="product-name"
              id="product__name"
              value={product}
              onChange={handleChangeProduct}
            >
              <MenuItem value={'Kodak 150'}>Kodak 150</MenuItem>
              <MenuItem value={'Kodak 150AC'}>Kodak 150AC</MenuItem>
              <MenuItem value={'Kodak 1392 Model 4'}>Kodak 1392 Model 4</MenuItem>
              <MenuItem value={'Kodak Asset Manager Software'}>Kodak Asset Manager Software</MenuItem>
              <MenuItem value={'Kodak BBH Sidekick 1200'}>Kodak BBH Sidekick 1200</MenuItem>

            </Select>
          </FormControl>
        </div>

    </div>
  )
}

export default CompetitiveModels
