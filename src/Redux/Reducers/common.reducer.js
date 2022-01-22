import { CHANGE_LOADING } from '../Actions/cammon.action'

const initialState = {
    loading: true
}

export const commonReducer = (state = initialState, action) => {
    switch ( action.type ){
        case CHANGE_LOADING:
            return {...state, loading: action.payload}
        default:
            return state
    }
}