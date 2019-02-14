import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom'
import { findIndexById } from './../../utils/utils';

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        callApi('GET', 'products', null).then(res => {
            this.setState({ products: res.data })
        }).catch(err => console.log(err))
    }

    render() {
        //var products = this.props.products;
        var { products } = this.state;

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
        callApi('DELETE', `products/${id}`, null)
            .then(res => { console.log('delete success') })
            .catch(err => console.log(err));
        let {products} = this.state;
        let index = findIndexById(products, id);
        if(index !== -1) {
            products.splice(index, 1)
            this.setState({products})
        }
    }
}

var mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(HomePage);