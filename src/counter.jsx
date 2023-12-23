import { useState } from "react"

export default function Counter (){
    const [count, setCount]= useState(0);

    const handleAdd = ()=>{
        const newCount = count + 1;
        setCount(newCount); 
    }
    const handleReduce = ()=>{
        const newCount = count - 1;
        setCount(newCount); 
        // if(newCount === 0){
        //     this.disabled = true;
        // }
        // else{
        //     this.disabled = false;
        // }
    }
    return (
        <div style={{border:'1px solid skyblue',
        borderRadius: '10px'}}>
            <h3>counter: {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}