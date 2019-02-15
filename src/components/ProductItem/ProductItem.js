import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'avalailable' : 'not-available'
        var statusClass = product.status ? 'success' : 'warning'
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`products/${product.id}/edit`} className="btn btn-warning mr-10">Edit</Link>
                    <button type="button" className="btn btn-danger" onClick={() => this.deleteItem(product.id)}>Delete</button>
                </td>
            </tr>
        );
    }
    deleteItem = id => {
        this.props.deleteItem(id);
    }
}

export default ProductItem;
