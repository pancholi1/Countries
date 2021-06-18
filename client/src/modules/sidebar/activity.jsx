import React, {Fragment, useState} from 'react';
import axios from 'axios';
import { useSelector} from 'react-redux';
import { Multiselect } from 'multiselect-react-dropdown'
import './activity.css'






const Activity = () => {
    const allCountriesGlobal = useSelector( state =>  state.allCountries)
    const [options] =useState(allCountriesGlobal)

    const prueba = (e) => {
        console.log(e)
        const newArray = [];
        for (let i = 0; i < e.length; i++) {
           newArray.push(e[i].id)   
        }
       setDatos({...datos,
        pais: newArray}) 
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
        setDatos(datos);
    
    }



    

    return (
        <Fragment>
            <h1 className="text-act">Create activity</h1>
            <form  onSubmit={enviarDatos} className="form">

                <div >
                    <input type="text" placeholder="Name of the activity" className="inputform" onChange={handleInputChange} name="name"></input>
                </div>
                <div >
                    <label className="labelform" > Difficulty  </label>
                    <input type="range" min="1" max="5" placeholder="difficulty" onChange={handleInputChange} name="duration"></input>
                </div>

                <select name="season" className="selectform" onChange={handleInputChange}>
                    <option >Season</option>
                    <option value="verano">Verano</option>
                    <option value="primavera">Primavera</option>
                    <option value='otoño'>Otoño</option>
                    <option value="invierno">Invierno</option>
                </select>
            
                <div style={{width:"50%"}}>     
                    <Multiselect options={options} displayValue="name"  onSelect={prueba} selectedValues="name"></Multiselect>
                </div>


                <button type="submit" className="botonform"  >Send</button>
              
            </form>
            
        </Fragment>
    );
}
 
export default Activity;


