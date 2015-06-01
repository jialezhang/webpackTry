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
      <section className="no-padding" id="portfolio">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="assets/img/portfolio/1.jpg" className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="assets/img/portfolio/2.jpg" className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="assets/img/portfolio/3.jpg" className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
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
