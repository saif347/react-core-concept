import { useEffect, useState } from "react"

export default function Users (){
    const [users, setUsers]= useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res= res.json());
    },[])
    return (
        <div className="box">
            <h3>Users:</h3>
        </div>
    )
}