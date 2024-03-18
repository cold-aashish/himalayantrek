const Highlights = () => {
    const highlightsContent = [
        {
            id: 1,
            items: [
                {
                    id: 1,
                    icon: "icon-city-2",
                    title: "Highlights",
                    highlights: [
                        "Scenic flight to and from Lukla.",
                        "Get acquainted with the mountain people in the heart of Himalayas.",
                        "Visiting Gokyo Lake.",
                        "Climbing Gokyo Ri at the elevation of 5,483 m.",
                        "Amazing views of the Himalaya from Gokyo Ri including Everest, Cho Oyu and Makalu.",
                        "Impressive Ngozumpa glacier.",
                    ],
                },
            ],
        },
    ];

    return (
        <>
            {highlightsContent.map((item) => (
                <div className="col-xl-12" key={item.id}>
                    <div className="row y-gap-30">
                        {item?.items?.map((highlight) => (
                            <div className="col-12" key={highlight.id}>
                                <div>
                                    <div className="d-flex relative items-center text-30 fw-600">
                                        <div className="icon-bg-2"></div>
                                        <i className={`${highlight.icon} text-30 me-4`} />
                                        {highlight.title}
                                    </div>
                                    <ul className="text-15 pt-10">
                                        {highlight?.highlights?.map((val, i) => (
                                            <li className="d-flex items-center" key={i}>
                                                <i className="icon-check text-10 mr-20" />
                                                {val}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Highlights;
