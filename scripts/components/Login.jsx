import React, { Component, PropTypes, findDOMNode } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

const DEFAULT_LOGIN = 'gaearon';
const GITHUB_REPO = 'https://github.com/gaearon/flux-react-router-example';


export default class Login extends Component {

  render() {
    return (
      <header>
        <div className="login-container">
          <div className="header-content">
            <div className="header-content-inner">
              <div className="col-sm-6 col-md-4 col-md-offset-4">
                <h1 className="text-center login-title">登录</h1>
                <form className="form-signin">
                  <input type="text"
                         className="form-control"
                         placeholder="xxx@xxx.com"
                         ref="loginEmail"
                         required autofocus />
                  <input type="password"
                         className="form-control"
                         placeholder="密码"
                         ref="loginPassword"
                         required />
                  <button className="btn btn-lg btn-primary btn-block" type="submit">
                    登录
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleGoClick();
    }
  }

  handleOnChange() {
    this.setState({
      loginData: this.getInputValue()
    });
  }

  handleGoClick() {
    console.log(this.getInputValue());
    /*     this.context.router.transitionTo(`/${this.getInputValue()}`); */
  }

  getInputValue() {
    let  loginData = {
      email: findDOMNode(this.refs.loginEmail).value,
      password: findDOMNode(this.refs.loginPassword).value
    },
         name = findDOMNode(this.refs.loginEmail).value;
    return name;
  }
}
