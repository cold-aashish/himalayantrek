import React from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import Footer from "@/components/footer";
import Image from "next/image";
import Faq from "@/components/faq/Faq";
import WhyNepalhaven from "@/components/why-nepalhaven/WhyNepalhaven";

export const metadata = {
    title: "Meet Our Team || Nepalhaven.com",
    description: "",
};

const BlogListV1 = () => {
    return (
        <>
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
                                Why Nepalhaven?
                            </h1>
                            <div className="text-white mt-15">
                                Nepalhaven embodies the vision of sharing the allure of Himalayan travel with the world and facilitating visitors in crafting enduring memories.
                            </div>
                        </div>
                    </div>
                </div>
                {/* End .container */}
            </section>
            {/* End Team Banner Section */}


            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <h4 className="mb-50">Here are some important reasons why you should choose Nepalhaven for your adventure in the himalayas.</h4>
                    {/*<div className="accordion" id="accordionExample">*/}
                    {/*    <div className="accordion-item">*/}
                    {/*        <h2 className="accordion-header">*/}
                    {/*            <button className="accordion-button custom-accordion-button rounded-0" type="button" data-bs-toggle="collapse"*/}
                    {/*                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">*/}
                    {/*                Local Himalayan Experts*/}
                    {/*            </button>*/}
                    {/*        </h2>*/}
                    {/*        <div id="collapseOne" className="accordion-collapse collapse show"*/}
                    {/*             data-bs-parent="#accordionExample">*/}
                    {/*            <div className="accordion-body">*/}
                    {/*                In order to deliver an authentic Nepalese experience, our local experts hail from the very regions we offer travel to, exclusively collaborating with Nepalhaven. Our dedicated office staff and adept crews are committed to ensuring every aspect of your journey is not only enjoyable but also unforgettable.*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="accordion-item">*/}
                    {/*        <h2 className="accordion-header">*/}
                    {/*            <button className="accordion-button custom-accordion-button collapsed rounded-0" type="button" data-bs-toggle="collapse"*/}
                    {/*                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">*/}
                    {/*                High Standard of Safety prioritized*/}
                    {/*            </button>*/}
                    {/*        </h2>*/}
                    {/*        <div id="collapseTwo" className="accordion-collapse collapse"*/}
                    {/*             data-bs-parent="#accordionExample">*/}
                    {/*            <div className="accordion-body">*/}
                    {/*                Ensuring your safety is our paramount concern. Our guides and staff undergo rigorous first aid training to attend to your needs throughout the journey. We take mountain safety seriously, with our guides closely monitoring ascent rates during high-altitude treks to ensure proper acclimatization before ascending further. Precautionary measures are implemented to mitigate the risk of altitude sickness.*/}

                    {/*                Using reliable cell networks and satellite phones, our Kathmandu home office maintains constant communication with trekking guides, closely monitoring every detail, including potential weather impacts on your trek. In cases of emergency, helicopter evacuations or assistance via pony are swiftly arranged. To prevent illness, we meticulously ensure that trekking food is fresh and prepared with utmost hygiene.*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="accordion-item">*/}
                    {/*        <h2 className="accordion-header">*/}
                    {/*            <button className="accordion-button custom-accordion-button collapsed rounded-0" type="button" data-bs-toggle="collapse"*/}
                    {/*                    data-bs-target="#collapseThree" aria-expanded="false"*/}
                    {/*                    aria-controls="collapseThree">*/}
                    {/*                Unbeatable Value*/}
                    {/*            </button>*/}
                    {/*        </h2>*/}
                    {/*        <div id="collapseThree" className="accordion-collapse collapse"*/}
                    {/*             data-bs-parent="#accordionExample">*/}
                    {/*            <div className="accordion-body">*/}
                    {/*                At Nepalhaven, we meticulously craft our itineraries to ensure you have the most extraordinary trip imaginable. We are dedicated to offering top-notch services, striving to provide the best pricing, flexible booking options, and generous cancellation/postponement policies to enhance your experience.*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <WhyNepalhaven />
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
