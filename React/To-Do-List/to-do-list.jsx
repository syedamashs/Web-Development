import React, { act, useState } from 'react';

export default function Todo(){

    const [tasks , settasks] = useState([]);
    const [newtask, setnewtask] = useState('');

    function addtask(){

        if(newtask.trim()!==""){
            settasks(t => [...t, newtask]);
            setnewtask('');
        }
    }

    function removetask(index){
        const updatedtasks = tasks.filter((_,i)=> i!=index);
        settasks(updatedtasks);
    }

    function handletaskchange(event){
        setnewtask(event.target.value);
    }

    function moveup(index){
        if(index>0){
        const updatedtasks = [...tasks];
        [updatedtasks[index],updatedtasks[index-1]] = [updatedtasks[index-1],updatedtasks[index]];
        settasks(updatedtasks);
        }
    }

    function movedown(index){
        if(index < tasks.length - 1){
        const updatedtasks = [...tasks];
        [updatedtasks[index],updatedtasks[index+1]] = [updatedtasks[index+1],updatedtasks[index]];
        settasks(updatedtasks);
        }
    }

    function handleKeyDown(e){
        if(e.key === 'Enter'){
            addtask();
        }
    }

    return(

        <div className='to-do-list'>

        <h1>To-Do-List</h1>

        <div >
            <input 
                type="text" 
                value={newtask} 
                placeholder='Enter the Task...' 
                onChange={handletaskchange}
                onKeyDown={handleKeyDown}
                />

            <button className='add-button' onClick={addtask}>Add</button><br />

            <ol>
                {tasks.map((task,index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => removetask(index)}>Delete</button>
                        <button className='move-button' onClick={() => moveup(index)}>👆</button>
                        <button className='move-button' onClick={() => movedown(index)}>👇</button>
                        
                    </li>)}
            </ol>
            
        </div>
        </div>
    );
}

