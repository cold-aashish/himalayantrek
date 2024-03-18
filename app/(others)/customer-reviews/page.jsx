import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import Footer from "@/components/footer";
import Image from "next/image";
import Testimonial from "@/components/testimonial/Testimonial";
import Counter2 from "@/components/counter/Counter2";


export const metadata = {
    title: "Customer Reviews || Nepal Haven",
    description: "",
};

const About = () => {
    return (
        <>
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <DefaultHeader />
            {/* End Header 1 */}

            <section className="section-bg layout-pt-md layout-pb-md">
                <div className="section-bg__item col-12">
                    <Image
                        width={1920}
                        height={400}
                        src="/img/pages/about/banner2.jpg"
                        alt="image"
                        priority
                    />
                </div>
                {/* End section-bg__item */}

                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <h1 className="text-50 md:text-25 fw-600 text-white">
                                What our customers say
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



            {/* End counter Section */}


            <section className="section-bg layout-pt-md layout-pb-md">
                <div className="section-bg__item -mx-20 bg-light-2" />
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">
                                    Customer Reviews
                                </h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    Nepalhaven is the best when it comes to easy and convenient travel bookings.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className="overflow-hidden pt-80 js-section-slider">
                        <div className="item_gap-x30">
                            <Testimonial />
                        </div>
                    </div>
                    {/* End .overflow-hidden */}

                    <div className="row y-gap-30 items-center pt-40 sm:pt-20">
                        <div className="col-xl-4">
                            <Counter2 />
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* End testimonial section */}

            <CallToActions />
            {/* End Call To Actions Section */}

            <Footer />
            {/* End Call To Actions Section */}
        </>
    );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
