import {
    CLEAR_SELECTED_CATEGORY,
    GET_CATEGORIES,
    SELECTED_CATEGORY,
    RESET_DATA_LIMIT ,
    INCREMENT_DATA_LIMIT
} from '../Actions/categories.action'

const initialState = {
    categories: [],
    dataLimit: 10,
    selectedCategory: null
}

export const categoriesReducer = (state = initialState, action) => {
    switch ( action.type ){
        case GET_CATEGORIES:
            return {...state, categories: [...action.payload]}
        case SELECTED_CATEGORY:
            return {...state, selectedCategory: action.payload}
        case CLEAR_SELECTED_CATEGORY:
            return {...state, selectedCategory: null}
        case INCREMENT_DATA_LIMIT:
            return {...state, dataLimit: state.dataLimit + 10}
        case RESET_DATA_LIMIT:
            return {...state, dataLimit: 10}
        default:
            return state
    }
}