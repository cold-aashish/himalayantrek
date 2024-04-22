import Social from "../common/social/Social";

const Copyright = () => {
  return (
    <div className="row justify-between items-center y-gap-10">
      <div className="col-auto">
        <div className="row x-gap-30 y-gap-10">
          <div className="col-auto">
            <div className="d-flex items-center">
              © {new Date().getFullYear()} by
              <a
                href="/"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nepal Haven ||
              </a>
              All rights reserved.
            </div>
          </div>
          {/* End .col */}
          <div className="col-auto">
            <div className="d-flex x-gap-15">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Site Map</a>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}

      <div className="col-auto">
        <div className="row y-gap-10 items-center">
          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="d-flex items-center text-14 fw-500 text-white mr-10">
                <span>Developed by <a href="https://www.itbha.com" className="fw-700" target="_blank">Itbha International Pvt. Ltd.</a> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default Copyright;
