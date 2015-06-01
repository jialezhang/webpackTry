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
      <section id="find-job">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">一个神奇的网站</h2>
              <hr className="primary" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-diamond wow bounceIn text-primary"></i>
                <h3>XXXX没工作</h3>
                <p className="text-muted">昨天把老板开除了</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-paper-plane wow bounceIn text-primary" data-wow-delay=".1s"></i>
                <h3>无业游民</h3>
                <p className="text-muted">被老妈嫌弃了</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o wow bounceIn text-primary" data-wow-delay=".2s"></i>
                <h3>准备找工作</h3>
                <p className="text-muted">来到了这里</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-heart wow bounceIn text-primary" data-wow-delay=".3s"></i>
                <h3>被勾搭</h3>
                <p className="text-muted">成功找到工作</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
