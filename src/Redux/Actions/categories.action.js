import { axiosMiddleware,changeLoading } from "./cammon.action";
import { GET_CATEGORIES_URL } from "../../config/apiUrls";

export const GET_CATEGORIES = "GET CATEGORIES"
export const SELECTED_CATEGORY = "SELECTED CATEGORY"
export const CLEAR_SELECTED_CATEGORY = "CLEAR SELECTED CATEGORY"
export const INCREMENT_DATA_LIMIT = "INCREMENT DATA LIMIT"
export const RESET_DATA_LIMIT = "RESET DATA LIMIT"


export const getCategories = payload => {
    return {
        type: GET_CATEGORIES,
        payload
    }
}

export const incrementLimit = () => {
    return { type: INCREMENT_DATA_LIMIT }
}
export const resetLimit = () => {
    return { type: RESET_DATA_LIMIT }
}

export const clearSelectedCategory = () => {
    return { type: CLEAR_SELECTED_CATEGORY }
}

export const selectCategory = payload => {
    return {
        type: SELECTED_CATEGORY,
        payload
    }
}

export const getCategoriesThunk = ( payload ) => {
    return async dispatch => {
        try {
            const url = GET_CATEGORIES_URL()
            const response = await axiosMiddleware( "GET", url )
            if ( response.status ) {
                await dispatch( getCategories( response?.data ) )
                await dispatch( changeLoading( false ) )
            }
        } catch ( err ) {
            throw err
        }
    }
}