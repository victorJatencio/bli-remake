import React, {useState} from 'react';
import "./ProductNameInput.css";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function ProductNameInput() {
  const [product, setProduct] = useState('');

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  return (
    <div className="productNameInput">
      <FormControl className="productInput__form">
        <InputLabel id="select__productName">Enter Product Name</InputLabel>
        <Select
          labelId="product-name"
          id="product__name"
          value={product}
          onChange={handleChange}
        >
          <MenuItem value={'Kodak 150'}>Kodak 150</MenuItem>
          <MenuItem value={'Kodak 150AC'}>Kodak 150AC</MenuItem>
          <MenuItem value={'Kodak 1392 Model 4'}>Kodak 1392 Model 4</MenuItem>
          <MenuItem value={'Kodak Asset Manager Software'}>Kodak Asset Manager Software</MenuItem>
          <MenuItem value={'Kodak BBH Sidekick 1200'}>Kodak BBH Sidekick 1200</MenuItem>

        </Select>
      </FormControl>
    </div>
  )
}

export default ProductNameInput
