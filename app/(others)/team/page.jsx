import React from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import Footer from "@/components/footer";
import Team2 from "@/components/team/Team2";
import Image from "next/image";

export const metadata = {
    title: "Meet Our Team || Nepalhaven.com",
    description: "",
};

const TeamDetails = () => {
    return (
        <>
            <div className="header-margin"></div>
            {/* header top margin */}

            <DefaultHeader />
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
                                Meet Our Team
                            </h1>
                            <div className="text-white mt-15">
                                The team members of Nepalhaven.
                            </div>
                        </div>
                    </div>
                </div>
                {/* End .container */}
            </section>
            {/* End Team Banner Section */}


            <section className="layout-pt-md layout-pb-sm">
                <div className="container">
                    <Team2 />
                </div>
            </section>

            <CallToActions />
            {/* End Call To Actions Section */}

            <Footer />
            {/* End Call To Actions Section */}
        </>
    );
};

export default TeamDetails;
