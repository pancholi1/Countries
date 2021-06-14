import {useParams}  from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getcountry } from '../../store/actions/country';
import './CountryDetail.css'


function CountryDetail() {
    const dispatch = useDispatch();
    const countryDetail = useSelector(state => state.countryDetail)
    const {id} =useParams()


        useEffect(()=>{
           dispatch (getcountry(id))
        },[dispatch])

    return(
        <div className= "Centrar">
            {console.log(countryDetail)}
            {countryDetail ===undefined && <h1>Cargando...</h1>}
            {typeof countryDetail === "object" && (<div>
                <span>{countryDetail.name}</span>
                <img src={countryDetail.img} className="Tamaño" alt=""/>
                <span>{id}</span>
                <span>{countryDetail.capital}</span>
                <span>{countryDetail.subregion}</span>
                <span>{countryDetail.area}</span>
                <span>{countryDetail.population}</span>
                <ul>
                    {countryDetail.tourists.length > 0 ? countryDetail.tourists.map( e => {
                    return <li key = {e.id}>
                        <span>{e.name}</span>
                        <span>{e.duration}</span>
                        <span>{e.season}</span>
                     
                    
                    </li>
                    }): <h4>No tiene actividad turistica</h4>}
                </ul>

                </div>)}
        </div>
    )
// ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
// [ ] Código de país de 3 letras (id)
// [ ] Capital
// [ ] Subregión
// [ ] Área (Mostrarla en km2 o millones de km2)
// [ ] Población
// [ ] Actividades turísticas con toda su información asociada


}

export default CountryDetail