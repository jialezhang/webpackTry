/**
 *
 */
var actions = require('../actions/AppActionCreator');

/**
 * 
 */
var Footer = React.createClass({


  /**
   *
   */
  render: function() {

    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="section-heading">让我们放肆的约吧！约！约！约！</h2>
              <hr className="primary" />
              <p>如果你想找工作，只要你上传你的简历，绑定你的账号，你就会被勾搭！</p>
            </div>
            <div className="col-lg-4 col-lg-offset-2 text-center">
              <i className="fa fa-phone fa-3x wow bounceIn"></i>
              <p>13070000000</p>
            </div>
            <div className="col-lg-4 text-center">
              <i className="fa fa-envelope-o fa-3x wow bounceIn" data-wow-delay=".1s"></i>
              <p><a href="mailto:your-email@your-domain.com">gkjiale@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>

    );
  },


});

module.exports = Footer;
