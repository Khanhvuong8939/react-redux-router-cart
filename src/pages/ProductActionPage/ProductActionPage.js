import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddProductRequest, actEditProductItemRequest, actUpdateProductRequest } from './../../actions/index';

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
        var { id } = this.props.match.params;
        if (id) {
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        var { id, name, price, status } = nextProps.editingItem;
        this.setState({
            id,
            txtName: name,
            txtPrice: price,
            chkbStatus: status
        });
    }

    onChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value })
    }

    onSubmit = e => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        var product = {
            id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if (id === '') {
            this.props.onAddProduct(product);
        } else {
            this.props.onUpdateProduct(product);
        }
        history.goBack();
    }

    render() {
        var { id, txtName, txtPrice, chkbStatus } = this.state;
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

const mapStateToProps = state => {
    return {
        editingItem: state.itemProductEdit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: id => {
            dispatch(actEditProductItemRequest(id))
        },
        onUpdateProduct: product => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);