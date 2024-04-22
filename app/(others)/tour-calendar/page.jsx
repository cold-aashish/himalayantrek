import CallToActions from "@/components/common/CallToActions";
import Header1 from "@/components/header/default-header";
import Footer from "@/components/footer";
import StepperBooking from "@/components/booking-page/stepper-booking";
import Image from "next/image";
import CustomerInfo from "@/components/booking-page/CustomerInfo";
import Link from "next/link";
import NepalTourPackage from "@/components/tour-package/NepalTourPackage";
import React from "react";
import FixedDepartureTreks from "@/components/tour-package/FixedDepartureTreks";
import MainFilterSearchBox from "@/components/hero/MainFilterSearchBox";

export const metadata = {
    title: "Booking Page",
    description: "",
};

const index = () => {
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
                        className="bg-image-booking"
                        priority
                    />
                    <div className="overlay"></div>
                </div>
                {/* End section-bg__item */}

                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <h1 className="text-50 md:text-25 fw-600 text-white">
                                Tour Calendar
                            </h1>
                            <div className="text-white">
                                You can see the trek & tour packages and their informations below.
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-center">
                        <MainFilterSearchBox />
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
                                <FixedDepartureTreks/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End .container */}
            </section>

            {/* End stepper */}

            <CallToActions/>
            {/* End Call To Actions Section */}

            <Footer/>
        </>
    );
};

export default index;
