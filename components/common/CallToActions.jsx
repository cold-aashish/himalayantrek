import Link from "next/link";

const CallToActions = () => {
  return (
    <section className="layout-pt-md layout-pb-md bg-primary-color">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-white" />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">
                  Your Travel Journey Begins Here
                </h4>
                <div className="text-white">
                  We have the best travel packages. Inquire Now or Contact Us to get more information.
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              <div>
                <Link href="/contact" className="button -md h-60 bg-white text-dark">
                  Contact
                </Link>
              </div>
              {/* End email input */}

              <div>
                <Link href="/inquire-now" className="button -md h-60  bg-second-color text-white">
                  Inquire
                </Link>
              </div>
              {/* End subscribe btn */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default CallToActions;
