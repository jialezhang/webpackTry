import React, { PropTypes } from 'react';
import Login from '../components/Login';
import DocumentTitle from 'react-document-title';
import { RouteHandler } from 'react-router';

export default class App {

  render() {
    return (
      <div className='Login'>
        <Login />
        <hr />
      </div>
    );
  }
}
