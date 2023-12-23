import { useEffect, useState } from "react"
import Country from "./country"

export default function Countries (){
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },[])

    const handleVisitedCountries = country =>{
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    } 
    return(
        <div className="box">
            <h3>world tour: {countries.length}</h3>
            <div>
                <h4>visited countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
           <div className="students">
            {
                countries.map(country=> <Country key={countries.cca3} 
                    country={country}
                    handleVisitedCountries = {handleVisitedCountries}
                ></Country>)
            }
           </div>
        </div>
    )
}