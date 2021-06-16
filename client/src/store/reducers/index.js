import { GET_COUNTRIES, GET_COUNTRY, GET_ALLCOUNTRIES,GET_NAME, GET_ACTIVIDAD } from '../actions/country'

const initialState = {
    country : [],
    countryDetail: undefined,
    allCountries : [],
    countryName : [],
    listAct : []

}


const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_COUNTRIES:
            
           return {
               ...state,
               country : action.payload
           }

           case GET_COUNTRY:
            return {
                ...state,
                countryDetail : action.payload
            } 

            case GET_ALLCOUNTRIES :
                return{
                    ...state,
                    allCountries : action.payload
                }
            case  GET_NAME :
                return{
                    ...state,
                    countryName : action.payload
                }
            case GET_ACTIVIDAD :
                return {
                    ...state,
                    listAct : action.payload
                }

                    
        default :
        return {
            ...state
        }
    }
}

export default reducer;