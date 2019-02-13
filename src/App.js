import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <a className="navbar-brand">SHOPPING</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Link</a>
            </li>
          </ul>
        </nav>


        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

              <button type="button" className="btn btn-success mb-10">Add Product</button>

              <div className="panel panel-primary">
                <div className="panel-heading">Panel heading</div>
                <div className="panel-body">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                  </table>


                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
