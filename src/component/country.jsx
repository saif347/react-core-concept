import { useState } from "react"

export default function Country ({country, handleVisitedCountries}){
    const {name, flags, population, area} = country
    // console.log(country)
    const [visited, setVisited] = useState(false)

    const handleVisited =()=>{
        setVisited(!visited)
    }
    return(
        <div style={{backgroundColor: visited? 'orange' : ''}} className="box">
            <h3>name: {name.common} </h3>
            <img style={{width: '100px'}} src={flags.png} alt="" />
            <p>population: {population} </p>
            <p>area: {area} </p>
            <button onClick={handleVisited}>{visited? 'visited' : 'wanna go'}</button>

            <button onClick={()=>handleVisitedCountries(country)}>mark visited</button>

        </div>
    )
}