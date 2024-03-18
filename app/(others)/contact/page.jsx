import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import Footer from "@/components/footer"
import Address from "@/components/block/Address";
import Social from "@/components/common/social/Social";
import ContactForm from "@/components/common/ContactForm";

export const metadata = {
  title: "Contact || Nepal Haven",
  description: "",
};

const Contact = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}


      <div className="map-outer">
        <div className="map-canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182586.0420340798!2d-73.99038430252834!3d40.749936548349346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1670824458615!5m2!1sen!2sbd"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* End map section */}


                    <div className="px-80 py-40 relative">
                        <h1>CONTACT US</h1>
                        <p>If you have any questions or if you need any assistance, don't hesitate to contact us.</p>
                        <img src="/img/pages/contact/mount.png" alt="" className="contact-bg-image"/>
                        <img src="/img/pages/contact/image.png" alt="" className="contact-bg-image"/>
                    </div>


        <section className=" container">
            <div className="row justify-end">
                <div className="col-xl-6 col-lg-7">
                    <div className="map-form">
                        <div className="text-24 fw-500 contact-header px-20 py-20 text-white text-center">Send a message</div>
                        <div
                            className="px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
                            <ContactForm/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* End contact section form */}

        <section className="layout-pt-sm pb-40 mt-48">
            <div className="container">
                <div className="row x-gap-80 y-gap-20 justify-between">
            <div className="col-12">
              <div className="text-30 sm:text-24 fw-600">Our Address</div>
            </div>
            {/* End .col */}

            <Address />
            {/* End address com */}

            <div className="col-auto">
              <div className="text-18 text-dark fw-600">
                Follow us on social media
              </div>
              <div className="d-flex x-gap-20 items-center justify-center mt-10 text-white">
                <Social />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Address Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
