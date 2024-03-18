const CostDetails = () => {
    const costDetailsIncludeContent = [
        {
            id: 1,
            items: [
                {
                    id: 1,
                    icon: "icon-check",
                    title: "Includes",
                    details: [
                        "All (international and domestic) airport transfers on a tourist vehicle",
                        "Standard twin-sharing/double accommodation in a 3-star hotel for 2 nights in Kathmandu including breakfast (Private room accommodation can be organized at an extra cost)",
                        "Twin-sharing guest house accommodation during the trek for 10 nights in the Everest Region with attached toilets in Lukla, Phakding & Namche",
                        "All your standard meals during the trek (Breakfast, Lunch, and Dinner) including one hot drink and seasonal fruits  ",
                        "Experienced, first-aid trained, government licensed, English-speaking NepalHaven's trekking guide",
                        "Permits for Sagarmatha/Everest National Park and TIMS (Trekkers' Information Management System)",
                        "Porters during the trek for carrying luggage (1 porter for every 2 clients)",
                        "Wages, accommodation, meals, gear, insurance, and medications for all staff",
                        "Filtered water in the trails using Water Filter or using water purification tablets",
                        "Round-trip airfare between Kathmandu/Manthali and Lukla",
                        "A farewell dinner on the last night in Nepal",
                        "All administrative expenses and government taxes",
                    ],
                },
            ],
        },
    ];
    const costDetailsExcludeContent = [
        {
            id: 1,
            items: [
                {
                    id: 1,
                    icon: "icon-close",
                    title: "Excludes",
                    details: [
                        "Meals (lunch and dinner) in Kathmandu",
                        "International flight fare and airport departure tax",
                        "Any beverages including bottled and boiled water",
                        "Travel insurance along with high-altitude emergency evacuation coverage",
                        "Tips to trekking staff and driver",
                        "Nepal Entry Visa (Visa can be acquired easily after your arrival at Tribhuvan International Airport in Kathmandu with a fee of USD 50 for 30 days visa and USD 125 for 90 days visa)",
                        "Personal Trekking gear and equipment",
                        "Any expenses other than the Price Include section",
                    ],
                },
            ],
        },
    ];

    return (
        <>
            {costDetailsIncludeContent.map((item) => (
                <div className="col-xl-12" key={item.id}>
                    <div className="row y-gap-30">
                        {item?.items?.map((detail) => (
                            <div className="col-12" key={detail.id}>
                                <div>
                                    <div className="d-flex  text-18 fw-600">
                                        <i className={`${detail.icon} text-20 mr-10 mt-10`} />
                                        {detail.title}
                                    </div>
                                    <ul className="text-15 pt-10">
                                        {detail?.details?.map((val, i) => (
                                            <li className="d-flex" key={i}>
                                                <i className="icon-check text-10 mt-10 mr-20" />
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

            {costDetailsExcludeContent.map((item) => (
                <div className="col-xl-12" key={item.id}>
                    <div className="row y-gap-30">
                        {item?.items?.map((detail) => (
                            <div className="col-12" key={detail.id}>
                                <div>
                                    <div className="d-flex text-18 fw-600">
                                        <i className={`${detail.icon} text-20 mt-10 mr-10`} />
                                        {detail.title}
                                    </div>
                                    <ul className="text-15 pt-10">
                                        {detail?.details?.map((val, i) => (
                                            <li className="d-flex " key={i}>
                                                <i className="icon-close text-10 mt-10 mr-20" />
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

export default CostDetails;
