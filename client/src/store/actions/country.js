import axios from "axios"

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRY = 'GET_COUNTRY'
export const GET_ALLCOUNTRIES = 'GET_ALLCOUNTRIES'
export const GET_NAME = 'GET_NAME'
export const GET_ACTIVIDAD = 'GET_ACTIVIDAD'

export function getcountries (){
    return function (dispatch){
        return axios.get("http://localhost:3001/countries/country")
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
        return axios.get(`http://localhost:3001/countries/ARG`)
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
        return axios.get("http://localhost:3001/countries/allCountries")
            .then( (response) => {
                dispatch({
                    type: GET_ALLCOUNTRIES,
                    payload : response.data,

                })
            })
    }
}


export function getCountryxName (nameBusqueda){
    return function (dispatch){
        return axios.get(`http://localhost:3001/countries/c/countries?name=${nameBusqueda}`)
            .then( (response) => {
                dispatch( {
                    type: GET_NAME,
                    payload : response.data,

                })
            })
    }
}

export function getActivitys (){
    return function (dispatch) {
        return axios.get('http://localhost:3001/tourists/actividad')
        .then ( (response) => {
            dispatch( {
                type: GET_ACTIVIDAD,
                payload : response.data,

            })
        })
    }
}

