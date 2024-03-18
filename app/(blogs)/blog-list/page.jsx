import React from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import Footer from "@/components/footer";
import Blog1 from "@/components/blog/Blog1";
import Image from "next/image";
import Blog2 from "@/components/blog/Blog2";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogSidebar from "@/components/blog/blog-sidebar";

export const metadata = {
  title: "Blogs || Nepal Haven",
  description: "",
};

const BlogList = () => {
  return (
      <>
          <div className="header-margin"></div>
          {/* header top margin */}

          <DefaultHeader/>
          {/* End Header 1 */}

          <section className="section-bg layout-pt-md layout-pb-md">
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
                              Travel Blogs
                          </h1>
                          <div className="text-white mt-15">
                              Your trusted companion for quick,easy and safe booking
                          </div>
                      </div>
                  </div>
              </div>
              {/* End .container */}
          </section>
          {/* End About Banner Section */}

          <section className="layout-pt-sm layout-pb-md">
              <div className="container">
                  <Blog1/>
              </div>
          </section>

          <CallToActions/>
          {/* End Call To Actions Section */}

          <Footer/>
          {/* End Call To Actions Section */}
      </>
  );
};

export default BlogList;
