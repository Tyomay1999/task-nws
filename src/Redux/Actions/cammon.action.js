import axios from "axios";

export const CHANGE_LOADING = "CHANGE LOADING"

export const changeLoading = payload => {
    return {
        type: CHANGE_LOADING,
        payload
    }
}

export const axiosMiddleware = ( method, url ) => {
    const config = {
        method,
        url,
        headers: {
            'Content-Type': 'Application/json'
        }
    }
    return axios(config)
}