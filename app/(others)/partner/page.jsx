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

            <DefaultHeader />
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
                                Partner with Nepalhaven.com
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


            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <p>We believe partnership is fundamental to achieving results. Over the years we have met some of
                        the most outstanding people and organizations in the travel industry. We have recognized the
                        importance of working side by side with them to provide quality services. Our partnerships are
                        driven by a shared vision of the future of travel technology and the ambition to continuously
                        fuel innovation. We value diversity, synergies, and teamwork, and strive for excellence.</p>
                    <div className="text-light-1 mb-30">
                        We have established important partnerships with specialist companies from various fields that
                        include: –
                        <ul className="custom-partner-list">
                            <li>
                                Trekking and Climbing operators
                            </li>
                            <li>Tour operators (Including Pilgrimage tours)</li>
                            <li>Adventure operators</li>
                            <li>Volunteering organizations</li>
                            <li>Cultural tourism organizations</li>
                            <li>Jungle and wildlife tourism organizers</li>
                            <li>Travel logistics management companies</li>
                            <li>Destination management companies</li>
                            <li>Team building organizers</li>
                            <li>School, universities, and charities organizations</li>
                            <li>Special event organizers</li>
                            <li>Luxury and deluxe trek and tours organizers</li>
                        </ul>
                        The partnership with all these diverse organizations helps to conduct services of international
                        standard and complement our customers with additional service. We would like to thank and
                        recognize these organizations and individuals who have helped a lot to shape the future of the
                        travel industry with us.
                    </div>
                    <div className="mb-30">
                        <h4>Why Partner with Us</h4>
                        <p>Our leaders hail from the various regions and destinations that you will visit. They are all
                            licensed by the Ministry of Tourism, speak fluent English and hold a high Altitude First Aid
                            Certificate. All share great enthusiasm for guiding and have been chosen for their native
                            experience and thorough personal knowledge. They express great joy in introducing you to
                            favorite local places, people, and behind-the-scenes spots that would never otherwise be
                            explored.</p>
                        <p>Partnership with NepalHaven benefits you if you are seeking to expand your network in
                            business. In a B2B collaboration with us, you get much more reasonable rates than that
                            mentioned on our website. NepalHaven is a wholesale tour operator which mainly
                            specializes in trekking, climbing, mountain biking, sightseeing/cultural tours, adventure
                            sports, and so on.</p>
                        <p>Do check out our pages About Us and Why NepalHaven? to know more about the company and
                            if you have thoughts of collaborating with our business.</p>

                    </div>
                    <div>
                        <h4>Let’s meet up!</h4>
                        <p>If you would like to discuss business in person to expand the boundaries of your business, we would be more than happy to set a meeting with you at your preferred destination. You can schedule the meeting with our Managing Director virtually or in person. Moreover, we are frequently visiting travel expos around the world. This is also an excellent chance for us to meet you and for you to meet us!</p>
                        <p>NepalHaven frequently participates in international travel fairs, B2B show, Adventure Summit, conferences, etc. (including WTM, ITB, ATWS, etc.) to showcase the services/products to the global travel trade fraternity and further the business network.</p>
                        <p className="fw-600 mt-30">Please note: “We are not able to disclose every detail about our partners because of some privacy policy. But do not hesitate to contact us to know more about our worldwide partners and partnership policy.”</p>

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
