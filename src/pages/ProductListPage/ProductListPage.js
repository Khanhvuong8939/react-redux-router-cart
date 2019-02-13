import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        callApi('GET', 'products', null).then(res => {
            console.log(res)
            this.setState({ products: res.data })
        })
    }

    render() {
        //var products = this.props.products;
        var { products } = this.state;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-success mb-10">Add Product</button>
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