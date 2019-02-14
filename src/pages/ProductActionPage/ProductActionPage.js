import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
class ProductActionPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }

    componentDidMount() {
        var match = this.props.match;
        let { id } = match.params;
        if (id !== '') {
            callApi('GET', `products/${id}`, null)
                .then(res => {
                    let { name, price, status } = res.data;
                    this.setState({
                        id,
                        txtName: name,
                        txtPrice: price,
                        chkbStatus: status
                    })
                }).catch(err => console.log(err))
        }
    }

    onChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value })
    }
    0
    onSubmit = e => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        if (id === '') {
            callApi('POST', 'products', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.goBack();
            }).catch(err => console.log(err))
        } else {
            callApi('PUT', `products/${id}`, {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.goBack();
            }).catch(err => console.log(err));
        }


    }

    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        var match = this.props.match;
        let { id } = match.params.id;
        return (
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">{id === '' ? 'ADD PRODUCT' : 'EDIT PRODUCT'}</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name='txtName' onChange={this.onChange} value={txtName} />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" className="form-control" name='txtPrice' onChange={this.onChange} value={txtPrice} />
                            </div>
                            <div className="form-group">
                                <label className='mr-10'>available:    </label>
                                <input type="checkbox" name='chkbStatus' checked={chkbStatus} value={chkbStatus} onChange={this.onChange} />
                            </div>

                            <button className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>

            </div>
        );
    }
}


export default ProductActionPage;