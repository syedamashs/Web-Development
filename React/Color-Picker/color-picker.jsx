import React , {useState} from 'react';

export default function Colorpicker(){

    const [color,setcolor] = useState();

    function handlecolor(event){
        setcolor(event.target.value);
    }

    return(
        <div className='color-container'> 
        <h1>Color-Picker</h1>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color</label>
        <input type="color" value={color}  onChange={handlecolor}/>
        </div>
    );

};
