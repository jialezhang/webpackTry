import React, { Component, PropTypes, findDOMNode } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

const DEFAULT_LOGIN = 'gaearon';
const GITHUB_REPO = 'https://github.com/gaearon/flux-react-router-example';

function parseFullName(params) {
  if (!params.login) {
    return DEFAULT_LOGIN;
  }

  return params.login + (params.name ? '/' + params.name : '');
}

export default class Explore extends Component {
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

  constructor(props) {
    // 必须使用super关键字，不然使用this.prop报错
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
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">收起菜单</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
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
              <a className="page-scroll" href="/login">登录/注册</a>
            </li>
          </ul>
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
    console.log(this.getInputValue());
    this.context.router.transitionTo(`/${this.getInputValue()}`);
  }

  getInputValue() {
    return findDOMNode(this.refs.loginOrRepo).value;
  }
}
