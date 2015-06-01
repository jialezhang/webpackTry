import React, { Component, PropTypes, findDOMNode } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

const DEFAULT_LOGIN = 'gaearon';
const GITHUB_REPO = 'https://github.com/gaearon/flux-react-router-example';

function parseFullName(params) {
  if (!params.login) {
    return DEFAULT_LOGIN;
  }
  n
  return params.login + (params.name ? '/' + params.name : '');
}

export default class Explore extends Component {
  static propTypes = {
    params: PropTypes.shape({
      login: PropTypes.string,
      name: PropTypes.string
    })
  };

  static contextTypes = {
    router: PropTypes.func.isRequired
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleGoClick = this.handleGoClick.bind(this);
    this.getInputValue = this.getInputValue.bind(this);

    // State that depends on props is often an anti-pattern, but in our case
    // that's what we need to we can update the input both in response to route
    // change and in response to user typing.
    this.state = {
      loginOrRepo: parseFullName(props.params)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loginOrRepo: parseFullName(nextProps.params)
    });
  }

  render() {
    return (
      <div className="login-container">
        <div className="header-content">
          <div className="header-content-inner">
            <div className="col-sm-6 col-md-4 col-md-offset-4">
              <h1 className="text-center login-title">登录</h1>
              <form className="form-signin">
                <input type="text" className="form-control" placeholder="xxx@xxx.com" required autofocus />
                <input type="password" className="form-control" placeholder="密码" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                  登录
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
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
    let value = findDOMNode(this.refs.loginOrRepo).value;
    return value;
  }
}
