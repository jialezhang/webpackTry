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

    );

  },

  /**
   *
   */
  handleClick: function(evt){
    /* var val = evt.target.value.trim();
       actions.doSearch(val); */
    console.log(evt);
  },

  //
  noop: function(){

  }

});

module.exports = Header;
