import React, { useState } from 'react';
import './index.css'; 

const App = () => {
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c94b98f050ad1524f96fa067b2ea412c`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        setResult(
          'Temperature at your city ' + city +" is " +'\n' + Math.round(celsius) + ' °C'
        );
      });
  };

  return (
    <div className='center'>
      <div className='overlay'></div> {/* Overlay for readability */}
      <div className='card'>
        <div className='card-body'>
          <h2 className='card-title'>Weather-App</h2><br/>
          <h4>Know Temperature of Your City by One Step</h4><br/>
          <form onSubmit={submitHandler}>
            <input
              type='text'
              name='city'
              value={city}
              onChange={changeHandler}
            />
            <br />
            <br />
            <input type='submit' value='Get Temperature' />
          </form>
          <h2>{result}</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
