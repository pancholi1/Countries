import axios from "axios"

export const ACTIVITY = "ACTIVITY"

export function setActivity (objeto){
    return function (dispatch){
        return axios.post("http://localhost:3001/activity")
            .then( (response) => {
                dispatch({
                    type: ACTIVITY,
                    payload : response.data,

                })
            })
    }
}

axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
