/**
 *
 */
var actions = require('../actions/AppActionCreator');

/**
 *
 */
var Header = React.createClass({

  /**
   *
   */
  render: function() {


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

  },

  /**
   *
   */
  handleClick: function(evt){
    /* var val = evt.target.value.trim();
       actions.doSearch(val); */
    console.log(evt.target.value())
  },

  //
  noop: function(){

  }

});

module.exports = Header;
