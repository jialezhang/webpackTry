import React, { Component, PropTypes, findDOMNode } from 'react';

export default class Header extends Component{
  render() {
    return (
      <header>
        <div className="header-content">
          <div className="header-content-inner">
            <h1>传说中的主标题</h1>
            <hr />
            <p>可怜兮兮的副标题</p>
            <a href="#about" className="btn btn-primary btn-xl page-scroll">小样，你被骗啦</a>
          </div>
        </div>
      </header>
    )
  }
}
