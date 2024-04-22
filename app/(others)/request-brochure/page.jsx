import React from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata = {
    title: "Request for Brochure || Nepalhaven.com",
    description: "",
};

const BlogListV1 = () => {
    return (
        <>
            <div className="header-margin"></div>
            {/* header top margin */}

            <DefaultHeader/>
            {/* End Header 1 */}

            <section className="section-bg layout-pt-lg layout-pb-md">
                <div className="section-bg__item col-12">
                    <Image
                        width={1920}
                        height={400}
                        src="/img/pages/partner/1.jpeg"
                        alt="image"
                        priority
                    />
                </div>
                {/* End section-bg__item */}

                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <h1 className="text-50 md:text-25 fw-600 text-white">
                                Brochure Request Form
                            </h1>
                            <div className="text-white mt-15">
                                Please enter your correct information below and submit a request for a printed
                                Nepalhaven brochure for B2B purposes only.
                            </div>
                        </div>
                    </div>
                </div>
                {/* End .container */}
            </section>
            {/* End Team Banner Section */}


            <section className="layout-pt-md layout-pb-sm">
                <div className="container">
                    <h4>Brochure Request Form B2B</h4>
                    <p>Nepalhaven believes in traveling sustainably, so in light of that, we don’t have a dedicated
                        brochure for travelers. Please enter your correct information below and submit a request for a
                        printed Nepalhaven brochure for B2B purposes only. </p>
                </div>
            </section>
            <section className="layout-pb-md">
                <div className="container">
                   <div className="row justify-content-center">
                       <div className="col-lg-10">
                           <form action="">
                               <div className="row">
                                   <div className="col-lg-6 mb-20">
                                       <label htmlFor="name" className="form-label mb-0">Full Name:</label>
                                       <input type="text" className="form-control custom-input-field" id="name"/>
                                   </div>
                                   <div className="col-lg-6 mb-20">
                                       <label htmlFor="address" className="form-label mb-0">Address:</label>
                                       <input type="text" className="form-control custom-input-field" id="address"/>
                                   </div>
                                   <div className="col-lg-6 mb-20">
                                       <label htmlFor="company-name" className="form-label mb-0">Company Name:</label>
                                       <input type="text" className="form-control custom-input-field"
                                              id="company-name"/>
                                   </div>
                                   <div className="col-lg-6 mb-20">
                                       <label htmlFor="company-phone" className="form-label mb-0">Phone/Fax:</label>
                                       <input type="number" className="form-control custom-input-field"
                                              id="company-phone"/>
                                   </div>
                                   <div className="col-lg-6 mb-20">
                                       <label htmlFor="email" className="form-label mb-0">Email:</label>
                                       <input type="email" className="form-control custom-input-field"
                                              id="email"/>
                                   </div>
                                   <div className="col-lg-6 mb-20">
                                       <label htmlFor="country" className="form-label mb-0">Country</label>
                                       <select name="country" id="country" className="form-select custom-input-field">
                                           <option value="select" disabled selected>Select Country</option>
                                           <option value="select">Nepal</option>
                                           <option value="select">USA</option>
                                           <option value="select">Australia</option>
                                       </select>
                                   </div>
                                   <div className="col-lg-12 mb-20">
                                       <label htmlFor="country" className="form-label mb-0">How did you find
                                           NepalHaven?</label>
                                       <select name="country" id="country" className="form-select custom-input-field">
                                           <option value="select" disabled selected>Select Answer</option>
                                           <option value="select">Google</option>
                                           <option value="select">Facebook</option>
                                           <option value="select">Youtube</option>
                                       </select>
                                   </div>
                                   <div className="col-lg-12 mb-20">
                                       <label htmlFor="comment" className="form-label mb-0">Comment:</label>
                                       <textarea type="comment" className="form-control custom-input-field"
                                                 id="comment"/>
                                   </div>

                               </div>
                               <button className="btn btn-submit">
                                   Submit
                               </button>

                           </form>
                       </div>
                   </div>
                </div>
            </section>

            <CallToActions/>
            {/* End Call To Actions Section */}

            <Footer/>
            {/* End Call To Actions Section */}
        </>
    );
};

export default BlogListV1;
