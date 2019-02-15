import { combineReducers } from 'redux';

import products from './products'
import itemProductEdit from './itemProductEdit'

const appReducers = combineReducers({
    products,
    itemProductEdit
});

export default appReducers;