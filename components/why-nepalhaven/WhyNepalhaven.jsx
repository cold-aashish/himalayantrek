const WhyNepalhaven = () => {
    const faqContent = [
        {
            id: 1,
            collapseTarget: "One",
            title: "Local Himalayan Experts",
            content: `In order to deliver an authentic Nepalese experience, our local experts hail from the very regions we offer travel to, exclusively collaborating with Nepalhaven. Our dedicated office staff and adept crews are committed to ensuring every aspect of your journey is not only enjoyable but also unforgettable.`,
        },
        {
            id: 2,
            collapseTarget: "Two",
            title: " High Standard of Safety prioritized",
            content: `Ensuring your safety is our paramount concern. Our guides and staff undergo rigorous first aid training to attend to your needs throughout the journey. We take mountain safety seriously, with our guides closely monitoring ascent rates during high-altitude treks to ensure proper acclimatization before ascending further. Precautionary measures are implemented to mitigate the risk of altitude sickness. Using reliable cell networks and satellite phones, our Kathmandu home office maintains constant communication with trekking guides, closely monitoring every detail, including potential weather impacts on your trek. In cases of emergency, helicopter evacuations or assistance via pony are swiftly arranged. To prevent illness, we meticulously ensure that trekking food is fresh and prepared with utmost hygiene.`,
        },
        {
            id: 3,
            collapseTarget: "Three",
            title: "Can I book a hire car for someone else?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
        },
        {
            id: 4,
            collapseTarget: "Four",
            title: "Unbeatable Value",
            content: `At Nepalhaven, we meticulously craft our itineraries to ensure you have the most extraordinary trip imaginable. We are dedicated to offering top-notch services, striving to provide the best pricing, flexible booking options, and generous cancellation/postponement policies to enhance your experience.`,
        },
        {
            id: 5,
            collapseTarget: "Five",
            title: "Nepalhaven is strictly based in Nepal",
            content: `Booking your trip with us ensures that you get all the facilities and services conveniently`,
        },
    ];
    return (
        <>
            {faqContent.map((item) => (
                <div className="col-12" key={item.id}>
                    <div className="accordion__item  rounded-0">
                        <div
                            className="accordion__button d-flex items-center  border-bottom-light p-3"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${item.collapseTarget}`}
                        >
                            <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                <i className="icon-chevron-sm-down" />


                            </div>
                            <div className=" text-dark-1 text-20 fw-500 text-start">{item.title}</div>
                        </div>
                        {/* End accordion button */}

                        <div
                            className="accordion-collapse collapse"
                            id={item.collapseTarget}
                            data-bs-parent="#Faq1"
                        >
                            <div className="pt-15 pl-60">
                                <p className="text-15">{item.content}</p>
                            </div>
                        </div>
                        {/* End accordion conent */}
                    </div>
                </div>
            ))}
        </>
    );
};

export default WhyNepalhaven;
