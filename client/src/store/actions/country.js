import axios from "axios"

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRY = 'GET_COUNTRY'
export const GET_ALLCOUNTRIES = 'GET_ALLCOUNTRIES'

export function getcountries (){
    return function (dispatch){
        return axios.get("http://localhost:3001/country")
            .then( (response) => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload : response.data,

                })
            })
    }
}

export function getcountry (id){
    return function (dispatch){
        return axios.get(`http://localhost:3001/${id}`)
            .then( (response) => {
                dispatch( {
                    type: GET_COUNTRY,
                    payload : response.data,

                })
            })
    }
}

export function getAllCountries (){
    return function (dispatch){
        return axios.get("http://localhost:3001/allCountries")
            .then( (response) => {
                dispatch({
                    type: GET_ALLCOUNTRIES,
                    payload : response.data,

                })
            })
    }
}