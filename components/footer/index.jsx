
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import Social from "../common/social/Social";


const index = () => {
  return (
      <footer className="footer text-white bg-blue-1 footer-bg">
          <div className="bg-footer">
              <div className="">
                  <div className="container">
                      <div className="pt-60 pb-30">
                          <div className="footer-content pb-0">
                              <div className="row justify-content-center">
                                  <div className="col-lg-4 col-xl-4 ">
                                      <div className="footer-logo-contact">
                                          <div className="">
                                              <img src="/img/general/logo-light.svg" alt="image" className="w-50"/>


                                          </div>
                                          <div className="row   pt-30">
                                              <ContactInfo/>
                                          </div>
                                          <div className="mt-100">
                                              <h5 className="text-20 fw-700 mb-10">
                                                  Follow us:
                                              </h5>
                                              <div className="d-flex x-gap-20 items-center justify-start">
                                                  <Social/>
                                              </div>
                                          </div>


                                      </div>


                                  </div>

                                  <div className="col-lg-8">
                                      <div className="row y-gap-30 mt-minus-60">


                                          {/* End .col */}

                                          <FooterContent/>
                                      </div>
                                      {/* End .row */}
                                  </div>
                                  {/* End .col */}
                              </div>
                          </div>

                          {/* End .row */}
                      </div>
                      {/* End footer top */}


                      {/* End footer-copyright */}
                  </div>
                  {/* End container */}

                  <div className="container">
                      <div className="py-20 border-top-white-15">
                          <Copyright/>
                      </div>
                  </div>

              </div>
          </div>


      </footer>
  );
};

export default index;
