import React from "react";
import {useState} from "react";

export const Buttons = () =>{

    const[count, setCount,] = useState(0);
    const[count2, setCount2,] = useState(0);

    function countClicks(){
        setCount(count +1);
    }

    function resetClicks(){
        setCount(0)
        setCount2(0)
    }

    function countClicks2(){
        setCount2(count2 +1)
    }

    return(
        <div>
            <button onClick={countClicks}>Grains of rice given {count} times!</button>
            <button onClick={countClicks2}>Water drops given {count2} times!</button>
            <button onClick={resetClicks}>Steal food</button>
        </div>
    );
}