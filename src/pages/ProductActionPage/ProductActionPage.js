import React, { Component } from 'react';

class ProductActionPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            price: '',
            status: false
        }
    }

    onChange = e => {
        this.setState({[e.target.name] : e.target.value})
    }
0
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        var { name, price, status } = this.state;
        var match = this.props.match;
        console.log(match.params.id)
        return (
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">ADD PRODUCT</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name='name' onChange={this.onChange} value={name} />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" className="form-control" name='price' onChange={this.onChange} value={price} />
                            </div>
                            <div className="form-group">
                                <label className='mr-10'>available:    </label>
                                <input type="checkbox" name='status' value={status}/>
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