import  { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getAllCountries, getcountries, getCountryxName, getActivitys }from '../../store/actions/country';
import {useDispatch, useSelector} from 'react-redux'
import './showCountry.css'
import React from 'react';
import Paginacion from './paginacion'


function CountriesShow (){
    
    const [countries, setCountries] = useState([]);


    async function fylterByActivitysFunction (e) {
        const value = parseInt(e.target.value)
        const fylterActivity = listActivitysGlobal.filter( (act) => act.id === value)
        if(fylterActivity) setCountries(fylterActivity[0].countries)
       
    }


    function fylterByAscFunction (e){       
        const stateFalse1 = allCountriesGlobal
        stateFalse1.sort((a, b) => {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0
        })
        setCountries([...stateFalse1])
    }

    function fylterByDesFunction (e){  
        const stateFalse2 = allCountriesGlobal
        stateFalse2.sort((a, b) => {
            if(a.name < b.name) return 1;
            if(a.name > b.name) return -1;
            return 0
        })
        setCountries([...stateFalse2])
    }
    function fylterByPoblacionPosFunction (e) {
        const stateFalse3 = allCountriesGlobal
        stateFalse3.sort((a, b) => {
            if(a.population < b.population) return 1;
            if(a.population > b.population) return -1;
            return 0
        })
        setCountries([...stateFalse3])
    }
    function fylterByPoblacionNegFunction (e) {   
        
        const stateFalse4 = allCountriesGlobal
        stateFalse4.sort((a, b) => {
            if(a.population < b.population) return -1;
            if(a.population > b.population) return 1;
            return 0
        })
        setCountries([...stateFalse4])
    }
    function fylterByNameFunction(e){  
        if(!e.target.value) setCountries(allCountriesGlobal);
        dispatch(getCountryxName(e.target.value))
        setCountries(countryxName)   
    }

    function fylterBycontinentFunction (event) {
        const filterByContinent = allCountriesGlobal.filter( e => e.region === event.target.value)
        setCountries(filterByContinent);
    }

    function prueba () {
        {console.log(countries)}
    }

   const dispatch = useDispatch();
   const countriesGlobalState = useSelector(state => state.country)
   const allCountriesGlobal = useSelector( state =>  state.allCountries)
   const countryxName = useSelector( state =>  state.countryName)
   const listActivitysGlobal = useSelector (state => state.listAct)

  

    useEffect(()=>{
        dispatch(getActivitys())
    },[dispatch])

   useEffect(()=>{
    dispatch(getAllCountries())
    }, [dispatch])

    useEffect(()=>{
       dispatch(getcountries())
    }, [dispatch])

    useEffect(()=>{
        setCountries(countriesGlobalState)
     }, [countriesGlobalState])


        return (
            <div>
                {console.log(countries)}
                <ul>
                    {
                        Array.isArray(countries) ? countries.map( country => {                      
                            return <li key= {country.alpha3Code} className="Cuadrado">
                                <Link to={`/home/${country.alpha3Code}`}>{country.name} </Link>
                                {country.region}
                                <img src={country.img} className="Imagenes"></img>
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

                <select name="Activitys" onChange={fylterByActivitysFunction} >
                  <option value=''>Select an option</option>
                    {
                        listActivitysGlobal.map((e) => {
                            return <option value={e.id}>{e.name}</option>
                            })
                    }
                </select>

               
                <input type="text" onChange={fylterByNameFunction}/>
                <hr/>
                <button onClick={fylterByAscFunction}  value= "1">Ascendiente</button>
                <button onClick={fylterByDesFunction} value= "2">Descendiente</button>
                <button onClick={fylterByPoblacionPosFunction} value= ""> Cant Poblacion Desendente</button>
                <button onClick={fylterByPoblacionNegFunction} value= ""> Cant Poblacion Ascendente </button>
                <button onClick= {prueba} >PRUEBA</button>
                <Paginacion></Paginacion>
                
            </div>
        )
}

export default CountriesShow ;


