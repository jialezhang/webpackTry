import React, { PropTypes } from 'react';
import Register from '../components/Register';
import DocumentTitle from 'react-document-title';
import { RouteHandler } from 'react-router';

export default class App {
  static propTypes = {
    params: PropTypes.object.isRequired,
    query: PropTypes.object.isRequired
  };

  render() {
    return (
      <DocumentTitle title='注册'>
        <div className='Register'>
          <Register {...this.props} />
          <hr />
          <RouteHandler {...this.props} />
        </div>
      </DocumentTitle>
    );
  }
}
