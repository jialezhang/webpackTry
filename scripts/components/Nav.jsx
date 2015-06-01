import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/creative.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/nav.scss';

import React, { Component, PropTypes, findDOMNode } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

const DEFAULT_LOGIN = 'gaearon';
const GITHUB_REPO = 'https://github.com/gaearon/flux-react-router-example';

export default class Nav extends Component {
  static propTypes = {
    params: PropTypes.shape({
      login: PropTypes.string,
      name: PropTypes.string
    })
  };
  // 静态方法表示不会被实例继承，只能通过调用类方法来使用
  // 子类可以调用父类的静态方法，也可以通过super对象调用
  static contextTypes = {
    router: PropTypes.func.isRequired
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">收起菜单</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">发现者</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a className="page-scroll" href="#about">Explore</a>
              </li>
              <li>
                <a className="page-scroll" href="#find-job">找工作</a>
              </li>
              <li>
                <a className="page-scroll" href="#portfolio"
                   onClick={this.handleClick}
                   >找人</a>
              </li>
              <li>
                <a className="page-scroll" href="/login">登录</a>
              </li>
              <li>
                <a className="page-scroll" href="/register">注册</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleGoClick();
    }
  }

  handleOnChange() {
    // Update the internal state because we are using a controlled input.
    // This way we can update it *both* in response to user input *and*
    // in response to navigation in `componentWillReceiveProps`.
    this.setState({
      loginOrRepo: this.getInputValue()
    });
  }

  handleGoClick() {
    this.context.router.transitionTo(`/${this.getInputValue()}`);
  }

  getInputValue() {
    return findDOMNode(this.refs.loginOrRepo).value;
  }
}
