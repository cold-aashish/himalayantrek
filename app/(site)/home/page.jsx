import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import Link from "next/link";
import Footer from "@/components/footer";
import Tours2 from "@/components/tours/Tours2";
import CallToActions from "@/components/common/CallToActions";
import Blog from "@/components/home/Blog";
import Tours3 from "@/components/tours/Tours3";
import DiscountsBanner from "@/components/home/DiscountsBanner";
import TopDestinations from "@/components/destinations/TopDestinations";
import TestimonialRating from "@/components/home/TestimonialRating";
import Brand from "@/components/brand/Brand";
import Testimonial from "@/components/home/Testimonial";
import Header1 from "@/components/header/default-header";
import BlockGuide from "@/components/home/BlockGuide";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Activity from "@/components/activity/Activity";
import HowWorks from "@/components/block/HowWorks";
import AboutIntro from "@/components/home/AboutIntro";


export const metadata = {
  title: "|| ",
  description: "",
};

const home_5 = () => {
  return (
    <>
      {/* End Page Title */}

      <Header1 />
      {/* End Header 5 */}

      <Hero />
      {/* End Hero 5 */}

 
      <section className="layout-pt-sm layout-pb-sm">
        <div className="container">
          <div className="row line sm:y-gap-10 justify-between custom-blockguide">
            <BlockGuide />
          </div>
        </div>
      </section>


      <section className="layout-pt-sm layout-pb-sm">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top Destinations</h2>
                <p className=" sectionTitle__text text-20">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <TopDestinations />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top Destinations Section */}

      <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Deals &amp; Discounts</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center ">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-tour-discounts-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev navigation */}
                <div className="col-auto">
                  <div className="pagination -dots text-border js-tour-discount-pagination" />
                </div>
                {/* End pagination */}
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-tour-discounts-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End .next navigation */}
              </div>
            </div>
            {/* End .col for swiper navigation and pagination */}
          </div>
          {/* End .col */}

          <div className="row y-gap-30 pt-40">
            <div className="col-xl-5">
              <DiscountsBanner />
            </div>
            {/* End col-xl-5 */}

            <div className="col-xl-7">
              <Tours3 />
            </div>
            {/* End col-xl-7 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Deals & Discounts */}

      <AboutIntro />


      <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>


      <section className="layout-pt-md layout-pb-md bg-blue-3">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">How does it work?</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 justify-between pt-40">
            <HowWorks />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End how works Section */}

     

      <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Trending Activity</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activity />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Trending Activity Sections */}

     


      <section className="section-bg layout-pt-md md:pt-0 md:pb-60 sm:pb-40 layout-pb-md bg-blue-3">
        <WhyChooseUs />
      </section>
      {/* End Why choose Section */}

    



    

      <section className="layout-pt-md layout-pb-md bg-gradient">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          {/* End .row */}
        </div>
      </section>
      {/* End testimonial and brand sections Section */}


      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
            {/* End .col */}
            <div className="col-auto">
              <Link
                href="/blog-list-v2"
                className="button -md -blue-1 bg-blue-1-05 text-dark-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Sections */}


      <section className="layout-pt-md layout-pb-md bg-light-2">
        <div className="container">
             <div className="row y-gap-30 justify-between items-center">
                <Brand />
              </div>
        </div>
         
      </section>
  
      <CallToActions />
      <Footer />

    </>
  );
};

export default dynamic(() => Promise.resolve(home_5), { ssr: false });
