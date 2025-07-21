import React , {useState} from 'react';

export default function Onchange(){

    const [name,setname] = useState("Guest");

    const  handlechange = (event) => {
        setname(event.target.value);
    }

    return(
        <div>
        <input value={name} onChange={handlechange} />
        <p>Name: {name}</p>
        </div>
    );
};
