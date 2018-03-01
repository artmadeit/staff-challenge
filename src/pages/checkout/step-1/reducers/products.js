import { FETCH_PRODUCTS } from '../actions'
const initialState = {loading: true, products: [], error: false}

export const products = (state = initialState, action) => {
    switch(action.type) {
        case `${FETCH_PRODUCTS}_PENDING`: 
            return {...state, loading: true}
        case `${FETCH_PRODUCTS}_REJECTED`: 
            return {...state, loading: false, error: action.payload}
        case `${FETCH_PRODUCTS}_FULFILLED`: 
            return {...state, loading: false, products: action.payload.data.items}
        default:
            return state
    }
}