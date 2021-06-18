import  { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getcountries }from '../../store/actions/country';
import {useDispatch, useSelector} from 'react-redux'
import { getAllCountries,  getCountryxName, getActivitys }from '../../store/actions/country';
import './showCountry.css'
import React from 'react';
import ReactPaginate from 'react-paginate';



function CountriesShow (){
    
    const [countries, setCountries] = useState([]);

    const[pageNumber, setPageNUmber] = useState(0)


    ////////////////////////////////7

    const usersPerPage = 10
    const pageVisited = pageNumber * usersPerPage
 
     
    const displayUsers = countries.slice(pageVisited, pageVisited + usersPerPage).map((country) => {
        return(<ul className= "ul-ordenamiento">
                    <li className="Cuadrado">
                        <div>
                            <img src={country.img} className="Imagenes"></img>
                            
                            <Link to={`/nav/home/${country.id}`}>{country.name} </Link>
                            <div className="ordenamiento-region">{country.region }</div>
                        </div>
                    </li>            

                   
        </ul>)
    })
    const pageCount = Math.ceil(countries.length/usersPerPage);

    const changePage = ({selected}) => {
        setPageNUmber(selected)   
    }   


    //////////////////////////////////

    function fylterByActivitysFunction (e) {
        const value = parseInt(e.target.value)
         const fylterActivity = listActivitysGlobal.filter( (act) => act.id === value)
        if(fylterActivity.length >0) setCountries(fylterActivity[0].countries)     
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


    const dispatch = useDispatch();
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
         setCountries(allCountriesGlobal)
      }, [allCountriesGlobal])


        return (    
            <div>   
                


                <div className="botones">
                <input type="text"className="search" placeholder="search name..." onChange={fylterByNameFunction}/> 
                <select name='continentes' onChange={fylterBycontinentFunction} className="filtro" >   


                    <option value=''>Continente</option>
                    <option value='Americas'>Americas</option>
                    <option value='Europe'>Europe</option>
                    <option value='Asia'>Asia</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Africa'>Africa</option>
                    <option value='Polar'>Polar</option>
                </select> 
               <select name="Activitys" onChange={fylterByActivitysFunction} className="filtro">
                  <option value=''>Activitys</option>
                    {
                        listActivitysGlobal.map((e) => {
                            return <option value={e.id}>{e.name}</option>
                        })
                    }
                </select>  
                
                <button onClick={fylterByDesFunction}  className="boton2" >Z...a</button>
                <button onClick={fylterByAscFunction} className="boton2"  >A...z</button>
                <button onClick={fylterByPoblacionPosFunction} className="boton2" > Max. poblados</button>
                <button onClick={fylterByPoblacionNegFunction}  className="boton2" > Min. poblados </button>  

                </div>



                <div style={{padding: "20px"}}
                className="paginacion">
                  
                    <ReactPaginate 
                                previousLabel={"Previous"}
                                nextLabel={ "Next"}
                                pageCount = {pageCount}
                                onPageChange= {changePage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"PreviousBttn"}
                                nextLinkClassName={"NextBttn"}
                                disableInitialCallback={"paginationDisable"}
                                activeClassName={"paginationActive"}
                            />
                </div>
                <div className="grillas">
                    {displayUsers}
                </div>
            </div>
        )
}

export default CountriesShow ;


