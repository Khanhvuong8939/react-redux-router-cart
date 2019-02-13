import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';

class HomePage extends Component {
    render() {
        var productList = this.props.products;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-success mb-10">Add Product</button>
                <ProductList >
                    {this.showProductItem(productList)}
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
                    />
                );
            })
        }
        return result;
    }
}

var mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(HomePage);