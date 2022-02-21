import React from 'react'

export const Boiler = (props) => {
 if(props.celsius >= 100){
     return <p>The water boil.</p>
 }
 else{
     return <p>The water would not boil.</p>
 }
}
