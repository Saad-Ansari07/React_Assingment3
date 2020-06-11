import React from 'react';
import  { useState } from 'react';
import './room.css'

function Room() {
    const [islit, setlit] = useState(false);
    let [age, setage] = useState(19);
    function uplit() {
        console.log('First button is clicked');
        setlit(!islit);
    }
    function increaseAge() {
        console.log('Second button is clicked');
        setage(++age);
    }
return (
<div className={`room ${islit? "lit": "dark"}`}>
    This is the room where it happens and it's {islit? "lit": "dark"} and my age is {age}
   <br/>
    <button onClick={uplit}>Toggle Light</button>
    <br/>
    <button onClick={increaseAge}>Increase Age</button>

</div>
);
}
export default Room;
