import { EDIT_PRODUCT } from './../constants/ActionTypes';

const initialState = {};

const itemProductEdit = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_PRODUCT:
            return action.product;
        default: return state;
    }
}

export default itemProductEdit;