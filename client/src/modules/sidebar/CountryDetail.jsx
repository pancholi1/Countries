import {useParams}  from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getcountry } from '../../store/actions/country';
import './CountryDetail.css'



function CountryDetail() {
    const dispatch = useDispatch();
    const countryDetail = useSelector(state => state.countryDetail)
    const {id} = useParams()

        useEffect(()=>{
           dispatch (getcountry(id))
        },[])

    return(

        <div className= "Centrar">
           
           
            {typeof countryDetail === "object" && (
            <div className="divContenedor">
                <img src={countryDetail.img} className="Tamaño" alt=""/>
               <div className="divflex">
                   <div>Country:  {" "+countryDetail.name}</div>
                   <div>ID:   {" "+id}</div>
                   <div>Capital:  {" "+countryDetail.capital}</div>
                   <div>Subregion: {" "+countryDetail.subregion}</div>
                   <div>Area:{" "+countryDetail.area}</div>
                   <div>Population :{" "+countryDetail.population}</div>
              
               </div>
               
                <ul>
    
                    {countryDetail.tourists.length > 0  ? countryDetail.tourists.map( e => {
                    return <li key = {e.id}className="liacti">
                        
                        <span className="liacti">Activity : {e.name}</span>
                        <span className="liacti">Difficulty :{e.duration}</span>
                        <span className="liacti">Season : {e.season}</span>
                    </li>
                    }): <h4>No tiene actividad turistica</h4> }
                </ul>
                  
                </div>)}

        </div>
    )
}

export default CountryDetail