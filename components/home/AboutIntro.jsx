const AboutIntro = () => {
  return (
    <section className="section-bg layout-pt-lg layout-pb-lg">
      <div className="section-bg__item -right -w-1165 bg-blue-3" />
      <div className="section-bg__item -video-left">
        <div className="row y-gap-30">
          <div className="col-sm-6">
            <img src="/img/video/nepal-1.jpg" alt="image"/>
          </div>
          {/* End .col */}

          <div className="col-sm-6">
            <img src="/img/video/nepal-2.jpg" alt="image"/>
          </div>
          <div className="col-sm-6">
            <img src="/img/video/nepal-3.jpg" alt="image"/>
          </div>
          <div className="col-sm-6">
            <img src="/img/video/nepal-4.jpg" alt="image"/>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .section-bg__item */}

      <div className="container lg:mt-30">
        <div className="row">
          <div className="offset-xl-6 col-xl-5 col-lg-6">
            <h2 className="text-30 fw-600">
              NepalHaven is a World Leading Travel & Tour Package Booking Platform
            </h2>
            <p className="text-dark-1 mt-40 lg:mt-20 sm:mt-15">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="d-inline-block mt-40 lg:mt-30 sm:mt-20">
              <a
                href="#"
                className="button -md -blue-1 bg-blue-1 text-white"
              >
                Learn More <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}
    </section>
  );
};

export default AboutIntro;
