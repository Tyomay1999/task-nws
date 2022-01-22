import { combineReducers } from "redux";
import { productReducer } from './product.reducer'
import { commonReducer } from './common.reducer'
import { categoriesReducer } from './categories.reducer'

export const rootReducers = combineReducers( {
    productReducer,
    commonReducer,
    categoriesReducer
} )