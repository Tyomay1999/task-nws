import { axiosMiddleware, changeLoading } from "./cammon.action";
import { GET_PRODUCT_URL } from "../../config/apiUrls";

export const GET_PRODUCTS = "GET PRODUCTS"


export const getProducts = ( payload ) => {
    return {
        type: GET_PRODUCTS,
        payload
    }
}


export const getProductsThunk = ( payload ) => {
    return async dispatch => {
        try {
            const url = GET_PRODUCT_URL( payload?.limit, payload?.page, payload?.categoryId )
            const response = await axiosMiddleware( "GET", url )
            if ( response.status ) {
                 await dispatch(changeLoading(false))
                 await dispatch( getProducts( response?.data ) )
            }
        } catch ( err ) {
            throw err
        }
    }
}