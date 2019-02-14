import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as Actions from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchProductRequest()
    }

    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='product/add' className="btn btn-success mb-10">Add Product</Link>
                <ProductList >
                    {this.showProductItem(products)}
                </ProductList>
            </div>
        );
    }

    showProductItem = productList => {
        var result = null;
        if (productList.length > 0) {
            result = productList.map((product, index) => {
                return (
                    <ProductItem
                        key={product.id}
                        index={index}
                        product={product}
                        deleteItem={this.deleteItem}
                    />
                );
            })
        }
        return result;
    }

    deleteItem = id => {
        this.props.deleteProductRequest(id)
    }
}

var mapStateToProps = state => {
    return {
        products: state.products
    }
}

var mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProductRequest: () => { dispatch(Actions.actFecthProductsRequest()) },
        deleteProductRequest: id => { dispatch(Actions.actDeleteProductRequest(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);