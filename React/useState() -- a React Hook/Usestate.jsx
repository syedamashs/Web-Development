//Counter Program using useState() ..

import React , {useState} from 'react';

export default function Usestate(){

    const [counter ,setcounter] = useState(0);

    const dec = () => {
        setcounter(counter-1);
    }

    const ress = () =>{
        setcounter(0);
    }

    const inc = () =>{
        setcounter(counter+1);
    }


    return(
        <div>
            <p>{counter}</p>
            <button onClick={dec}>Decrement</button>
            <button onClick={ress}>Reset</button>
            <button onClick={inc}>Increment</button>
        </div>
    );
};
