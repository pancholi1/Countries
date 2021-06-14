import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries }from '../../store/actions/country';






const Activity = () => {
    
    //**********ESTADO CON PAISES************//

    
   
    const countriesGlobalState = useSelector(state => state.allCountries)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCountries())
     }, [dispatch])
 
 

    // **********FORMULARIO*************//

    const [datos, setDatos] = useState({
        name: 'fra',
        pais :[ 'Uruguay'],
        duration : 4,
        season : 'verano'
    })

    const handleInputChange = (event) => {   
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
            [event.target.pais] : event.target.value,
            [event.target.duration]: event.target.value,
            [event.target.season] : event.target.value
        })
      
    }

    const enviarDatos =  async(event) => {
        event.preventDefault()
        datos.duration = parseInt(datos.duration)
              await axios ({
                  url : "http://localhost:3001/activity",
                  method : 'POST',
                  data : datos
              })

              return  setDatos(datos)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form  onSubmit={enviarDatos}>
                <div >
                    <input type="text" placeholder="Nombre" onChange={handleInputChange} name="name"></input>
                </div>
                <div >
                    <input type="number" placeholder="Duracion" onChange={handleInputChange} name="duration"></input>
                </div>

                <select name="season" value='verano' onChange={handleInputChange}>
                    <option value="verano">Verano</option>
                    <option value="primavera">Primavera</option>
                    <option value='otoño'>Otoño</option>
                    <option value="invierno">Invierno</option>
                </select>
                 <select name="pais" multiple  onChange={handleInputChange}>
                    {countriesGlobalState.map( (e) => {
                        return <option value={[e.name]}> {e.name}</option>
                    })}
                </select> 

             
                
                
                
                <button type="submit" >Enviar</button>
            </form>
            <ul>
                <li>{datos.name}</li>
              
            </ul>
        </Fragment>
    );
}
 
export default Activity;


