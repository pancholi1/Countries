import { GET_COUNTRIES, GET_COUNTRY, GET_ALLCOUNTRIES } from '../actions/country'

const initialState = {
    country : [],
    countryDetail: undefined,
    allCountries : []
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
        default :
        return {
            ...state
        }
    }
}

export default reducer;