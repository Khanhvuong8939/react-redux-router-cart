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

export const actAddProductRequest = product => {
    return dispatch => {
        callApi('POST', 'products', product)
            .then(res => {
                dispatch(actAddProduct(res.data));
            })
            .catch(err => console.log(err));
    }
}

export const actAddProduct = product => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actEditProductItemRequest = id => {
    return dispatch => {
        callApi('GET', `products/${id}`, null)
            .then(res => {
                dispatch(actEditProduct(res.data))
            })
            .catch(err => console.log(err))
    }
}

export const actEditProduct = product => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = product => {
    return dispatch => {
        callApi('PUT', `products/${product.id}`, product)
            .then(res => {
                dispatch(actUpdateProduct(res.data))
            })
            .catch(err => console.log(err))

    }
}

export const actUpdateProduct = product => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}