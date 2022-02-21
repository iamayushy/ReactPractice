import { useState } from 'react';
import './App.css';
import { Boiler } from './components/Boiler';
import { Temp } from './components/Temp';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const App = () => {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c')

    const handleCelsiusChange = (temperature) => {
      setScale('c');
      setTemperature(temperature)
    }

    const handleFarChange = (temperature) => {
      setScale('f');
      setTemperature(temperature)
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  return (
    <div className="clean">
      <Temp scale = 'c' onTemperatureChange = {handleCelsiusChange} temperature = {celsius}/>
      <Temp scale = 'f' onTemperatureChange = {handleFarChange} temperature = {fahrenheit}/>
      <Boiler 
        celsius = {parseFloat(celsius)}
      />
    </div>
  );
}

export default App;
