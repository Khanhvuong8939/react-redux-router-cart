import * as Types from './../constants/ActionTypes';
import { findIndexById } from './../utils/utils';
var initialState = [];

const products = (state = initialState, action) => {
    var { products, product } = action;
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = products;
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            var index = findIndexById(state, product.id);
            state[index] = product;
            return [...state];
        case Types.DELETE_PRODUCT:
            //var index = findIndexById(state, action.id);
            //if (index !== -1) state.splice(index, 1)
            return state.filter(el => el.id !== action.id) // another way to delete without find index
        default: return [...state]
    }
}

export default products;
