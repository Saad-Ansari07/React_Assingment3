import React from 'react';
import  { useState } from 'react';
import './room.css'

function Room() {
    const [islit, setlit] = useState(false);
    let [age, setage] = useState(19);
    let [temp, settemp] = useState(72);
    
    function onlit() {
        console.log('On button is clicked');
        setlit(!islit);
    }
    function offlit() {
        console.log('Off button is clicked');
        setlit(!islit);
    }
    function increaseAge() {
        console.log('Second button is clicked');
        setage(++age);
    }
    function increaseTemp() {
        console.log('Third button is clicked');
        settemp(++temp);
    }
    function decreaseTemp() {
        console.log('Fourth button is clicked');
        settemp(--temp);
    }
return (
<div className={`room ${islit? "lit": "dark"}`}>
    This is the room where it happens and it's {islit? "lit": "dark"} and my age is {age}
   <br/>
   The room temperature is {temp}
   <br/>
    <button onClick={onlit}>Toggle Light On</button>
    <br/>
    <button onClick={offlit}>Toggle Light Off</button>
    <br/>
    <button onClick={increaseAge}>Increase Age</button>
    <br/>
    <button onClick={increaseTemp}>Increase Temperaature</button>
    <br/>
    <button onClick={decreaseTemp}>Decrease Temperaature</button>
</div>
);
}
export default Room;
