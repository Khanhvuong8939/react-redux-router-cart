import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFecthProductsRequest = () => {
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

export const actDeleteProductRequest = id => {
    return dispatch => {
        return callApi('DELETE', `products/${id}`, null)
            .then(res => {
                dispatch(actDeleteProduct(id))
            })
            .catch(err => console.log(err))
    }
}

export const actDeleteProduct = id => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}