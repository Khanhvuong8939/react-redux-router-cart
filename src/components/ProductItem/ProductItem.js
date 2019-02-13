import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var {product, index} = this.props;
        var statusName = product.status ? 'avalailable' : 'not-available'
        var statusClass = product.status  ? 'success' : 'warning'
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
                    <button type="button" className="btn btn-warning mr-10">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
