import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <div className="alert alert-warning">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Not Found!</strong>
                    <h1>404 - NOT FOUND</h1>
                </div>
            </div>
        );
    }
}


export default NotFoundPage;