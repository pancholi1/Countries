import  { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getAllCountries, getcountries }from '../../store/actions/country';
import {useDispatch, useSelector} from 'react-redux'
import './showCountry.css'
import React from 'react';


function CountriesShow (){
    
    const [countries, setCountries] = useState([]);

    function fylterBycontinentFunction (event) {
        if(!event.target.value)
            setCountries(countriesGlobalState);
        const filterByContinent = countriesGlobalState.filter( e => e.region === event.target.value)
        setCountries(filterByContinent);
    } 

   const dispatch = useDispatch();
   const countriesGlobalState = useSelector(state => state.country)


    useEffect(()=>{
       dispatch(getcountries())
    }, [dispatch])

    useEffect(()=>{
        setCountries(countriesGlobalState)
     }, [countriesGlobalState])

    
//2

        return (
            <div>
                <ul>
                    {
                        Array.isArray(countries) ? countries.map( country => {
                            return <li key= {country.alpha3Code} className="Cuadrado">
                                <Link to={`/home/${country.alpha3Code}`}>{country.name} </Link>
                                {country.region}
                                <img src={country.flag} className="Imagenes"></img>
                            </li>
                        } ) : <h1>Cargando...</h1>
                    }
                </ul>
                <select name='continentes' onChange={fylterBycontinentFunction}  >
                    <option value=''>Select an option</option>
                    <option value='Americas'>Americas</option>
                    <option value='Europe'>Europe</option>
                    <option value='Asia'>Asia</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Africa'>Africa</option>
                    <option value='Polar'>Polar</option>
                </select>

                
            </div>
        )
}

export default CountriesShow ;


