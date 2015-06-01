import React, { PropTypes } from 'react';
import Navbar from './components/Nav';
import { Header, GetJob, FindMen, Footer } from './components/homepage';
import DocumentTitle from 'react-document-title';
import { RouteHandler } from 'react-router';

export default class App {

  render() {
    return (
      <DocumentTitle title='Sample App'>
        <div className='App'>
          <Navbar />
          <hr />
          <RouteHandler />
        </div>
      </DocumentTitle>
    );
  }
}
