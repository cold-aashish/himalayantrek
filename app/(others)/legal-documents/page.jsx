"use client"
import React, {useState} from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import Footer from "@/components/footer";
import Image from "next/image";
import {Gallery, Item} from "react-photoswipe-gallery";

// export const metadata = {
//     title: "Meet Our Team || Nepalhaven.com",
//     description: "",
// };

const BlogListV1 = () => {
    const [isOpen, setOpen] = useState(false);
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
                                Legal Documents
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


            <section className="layout-pt-md layout-pb-sm">
                <div className="container">

                    <h3>Legal Document</h3>
                    <p>Nepalhaven operates under the trading names of Nepalhaven Pvt. Ltd and Nepalhaven Tours and
                        Travels Pvt. Ltd, both dedicated to ensuring your holiday is safe and enjoyable. All travel
                        arrangements crafted by us are thoroughly secure.</p>

                    <p> We are proud to be recognized as a reputable government-licensed trekking and touring company in
                        Nepal. Below are the details of the government licenses and authorities held by Nepalhaven:</p>
                </div>
            </section>

            <section className="layout-pb-md">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Gallery>
                                <div className="img-container">
                                    <div className="galleryGrid__item">
                                        <Item
                                            original="/img/gallery/1/2.png"
                                            thumbnail="/img/gallery/1/2.png"
                                            width={450}
                                            height={375}
                                        >
                                            {({ref, open}) => (
                                                <img
                                                    ref={ref}
                                                    onClick={open}
                                                    src="/img/gallery/1/2.png"
                                                    alt="image"
                                                    className="position-absolute w-25"
                                                    role="button"
                                                />
                                            )}
                                        </Item>
                                    </div>
                                </div>
                            </Gallery>
                        </div>
                        <div className="col-lg-4">
                            <div className="img-container">
                                <Image
                                    width={1920}
                                    height={400}
                                    src="/img/pages/legal-documents/1.jpeg"
                                    alt="image"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="img-container">
                            <Image
                                    width={1920}
                                    height={400}
                                    src="/img/pages/legal-documents/1.jpeg"
                                    alt="image"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="img-container">
                                <Image
                                    width={1920}
                                    height={400}
                                    src="/img/pages/legal-documents/1.jpeg"
                                    alt="image"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="img-container">
                                <Image
                                    width={1920}
                                    height={400}
                                    src="/img/pages/legal-documents/1.jpeg"
                                    alt="image"
                                    priority
                                />
                            </div>
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
