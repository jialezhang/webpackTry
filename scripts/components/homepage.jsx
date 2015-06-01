import React, { Component, PropTypes, findDOMNode } from 'react';

export class Header extends Component{
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

export class FindMen extends Component{
  render() {
    return (
      <section className="no-padding" id="portfolio">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="scripts/assets/img/portfolio/1.jpg" className="img-responsive" alt="" />
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
                <img src="scripts/assets/img/portfolio/2.jpg" className="img-responsive" alt="" />
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
                <img src="scripts/assets/img/portfolio/3.jpg" className="img-responsive" alt="" />
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
    )
  }
}


export class GetJob extends Component{
  render() {
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
    )
  }
}


export class Footer extends Component{
  render() {
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
    )
  }
}
