import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import { toursPackageData } from "@/data/tourPackages";
import Header1 from "@/components/header/default-header";
import TopBreadCrumb from "@/components/tour-single/TopBreadCrumb";
import CallToActions from "@/components/common/CallToActions";
import Footer from "@/components/footer";
import React from "react";
import Image from "next/image";
import Blog1 from "@/components/blog/Blog1";
import Activity from "@/components/activity/Activity";
import NepalTourPackage from "@/components/tour-package/NepalTourPackage";



export const metadata = {
    title: "Trekking In Nepal",
    description: "Tour Packages",
};

const HotelSingleV1Dynamic = ({ params }) => {
    const id = params.id;
    const hotel = toursPackageData.find((item) => item.id == id) || toursPackageData[0];

    return (
        <>
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header1/>
            {/* End Header 1 */}


            <section className="section-bg layout-pt-lg layout-pb-md">
                <div className="section-bg__item col-12">
                    <Image
                        width={1920}
                        height={400}
                        src="/img/backgrounds/bg-2.png"
                        alt="image"
                        priority
                    />
                </div>
                {/* End section-bg__item */}

                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <h1 className="text-50 md:text-25 fw-600 text-white">
                                Trekking in Nepal
                            </h1>
                            <div className="text-white mt-15">
                                Here you will find 50+ packages for trekking in Nepal.
                            </div>
                        </div>
                    </div>
                </div>
                {/* End .container */}
            </section>
            {/* End About Banner Section */}


            <section className="section-bg layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                               <NepalTourPackage />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End .container */}
            </section>




            {/* End single page content */}

            <CallToActions/>
            <Footer/>


        </>
    );
};

export default dynamic(() => Promise.resolve(HotelSingleV1Dynamic), {
    ssr: false,
});
