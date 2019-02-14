import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFecthProductsRequest = dispatch => {
    return (dispatch) => {
        return callApi('GET', 'products', null)
            .then(res => {
                dispatch(actFecthProducts(res.data))
            })
            .catch(err => console.log(err))
    }
}

export const actFecthProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}