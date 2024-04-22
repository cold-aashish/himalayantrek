import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import Footer from "@/components/footer";
import TermsConent from "@/components/common/TermsConent";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Terms & Conditions || Nepalhaven",
  description: "",
};

const Terms = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}
        <section className="section-bg layout-pt-lg layout-pb-md">
            <div className="section-bg__item col-12">
                <Image
                    width={1920}
                    height={400}
                    src="/img/pages/about/1.png"
                    alt="image"
                    priority
                />
            </div>
            {/* End section-bg__item */}

            <div className="container">
                <div className="row justify-center text-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <h1 className="text-50 md:text-25 fw-600 text-white">
                            Terms and Conditions
                        </h1>
                        <div className="text-white mt-15">
                            Nepalhaven embodies the vision of sharing the allure of Himalayan travel with the world
                            and facilitating visitors in crafting enduring memories.
                        </div>
                    </div>
                </div>
            </div>
            {/* End .container */}
        </section>
        {/* End Team Banner Section */}



        <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="tabs js-tabs">
            <TermsConent />
          </div>
        </div>
      </section>
      {/* End terms section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Terms), { ssr: false });
