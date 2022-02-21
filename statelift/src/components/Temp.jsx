// import React, { useState } from 'react'
// import { Boiler } from './Boiler';

const scaleName = {
    c: 'Celsius',
    f : 'Fahrenheit'
}


export const Temp = (props) => {
    // const [temperature, setTemperature] = useState('');

    const handleChange = (e) => {
        
        props.onTemperatureChange(e.target.value)
    }
  return (
    <fieldset>
        <legend>Enter temperature in {scaleName[props.scale]}</legend>
        <input 
            value={props.temperature}
            onChange = {handleChange}
        />
       
    </fieldset>
  )
}
