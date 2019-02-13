import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphone</td>
                <td>100</td>
                <td>
                    <span className="label label-success">true</span>
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
