import React, {Fragment, useState} from 'react';
import axios from 'axios';
import { useSelector} from 'react-redux';
import { Multiselect } from 'multiselect-react-dropdown'






const Activity = () => {
    const allCountriesGlobal = useSelector( state =>  state.allCountries)
    const [options] =useState(allCountriesGlobal)

    const prueba = (e) => {
        console.log(e)
        const newArray = [];
        for (let i = 0; i < e.length; i++) {
           newArray.push(e[i].id)   
        }
        console.log(datos)
       setDatos({...datos,
        pais: newArray})
       console.log(datos)

    }



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
            [event.target.duration]: event.target.value,
            [event.target.season] : event.target.value
        })
     
    }


    const enviarDatos =  async(event) => {
        event.preventDefault()
        datos.duration = parseInt(datos.duration)
        await axios ({
            url : "http://localhost:3001/tourists/activity",
            method : 'POST',
            data : datos
        })
        return  setDatos(datos)
    }

    

    return (
        <Fragment>
        
            <h1>Formulario</h1>
            <form  onSubmit={enviarDatos} style={{margin:"50px"}}>
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
            
                <div style={{width:"50%"}}>
                    <h1>arriba</h1>
                    <Multiselect options={options} displayValue="name"  onSelect={prueba} selectedValues="name"></Multiselect>
                    <h2>Abajo</h2>
                </div>


                <button type="submit" >Enviar</button>
              
            </form>
            
        </Fragment>
    );
}
 
export default Activity;


