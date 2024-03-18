import React from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata = {
    title: "Meet Our Team || Nepalhaven.com",
    description: "",
};

const BlogListV1 = () => {
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
                                Our Affiliations
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


            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <h3>Affiliations</h3>
                    <p>Nepalhaven is proudly affiliated with a diverse range of national and international governmental
                        and non-governmental organizations within the travel and tourism sector. Our memberships and
                        partnerships with these esteemed organizations have enabled us to deliver unparalleled services
                        to our customers while setting us apart from competitors through adherence to the highest
                        standards of ethics and conduct in travel and tourism. Among our significant associations
                        are:</p>
                </div>
            </section>

            <section className="layout-pb-md">
                <div className="container">
                    <div className="row custom-affiliation">
                        <div className="col-3">
                            <div className="img-container">
                                <Image
                                    width={1920}
                                    height={800}
                                    src="/img/pages/partner/3.png"
                                    alt="image"
                                    className="affiliation-image"
                                    priority
                                />
                            </div>

                        </div>
                        <div className="col-9">
                            <h4>Travel Life</h4>
                            <p>Travelife is a leading training, management and certification initiative for tourism
                                companies committed to reaching sustainability.</p>
                        </div>
                    </div>
                    <div className="row custom-affiliation">
                        <div className="col-3">
                            <div className="img-container">
                                <Image
                                    width={1920}
                                    height={800}
                                    src="/img/pages/partner/2.png"
                                    alt="image"
                                    className="affiliation-image"
                                    priority
                                />
                            </div>

                        </div>
                        <div className="col-9">
                            <h4>The International Ecotourism Society (TIES)</h4>
                            <p>Travellife is a leading training, management and certification initiative for tourism
                                companies committed to reaching sustainability.</p>
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
