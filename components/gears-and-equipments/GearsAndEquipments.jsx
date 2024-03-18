const GearsAndEquipments = () => {
    const highlightsContent = [
        {
            id: 1,
            items: [
                {
                    id: 1,
                    icon: "icon-city-2",
                    title: "General",
                    highlights: [
                        "Four-season (zero degree) sleeping bag (We have rental sleeping bags available for an additional USD 35)",
                        "Puffy down jacket (We have rental jackets available for an additional USD 35)",
                        "Daypack (35-45 liters recommended) with rain cover",
                        "Sleeping bag liner",
                    ],
                },
                {
                    id: 2,
                    icon: "icon-city-2",
                    title: "Upper Body",
                    highlights: [
                        "Sun hat or cap (We'll provide you with a free Ace the Himalaya baseball cap.)\n",
                        "Knitted hat/Beanie",
                        "Headlamp",
                        "Sunglasses",
                        "Scarf/Neck Gaiter/Buff (highly recommended)",
                    ],
                },
                {
                    id: 3,
                    icon: "icon-city-2",
                    title: "Torso",
                    highlights: [
                        "echnical fabric base layer (light for warmer months, heavy for colder months)",
                        "Technical fabric short (2) and long sleeve (2) shirts",
                        "Waterproof, windproof shell",
                        "Fleece jacket or pullover",
                    ],
                },
                {
                    id: 4,
                    icon: "icon-city-2",
                    title: "Lower Body",
                    highlights: [
                        "Technical fabric base layer (light for warmer months, heavy for colder months)",
                        "Hiking pants (2)",
                        "Comfortable pants for inside the teahouses",
                        "Waterproof, windproof shell",
                        "Hiking shorts",
                    ],
                },
                {
                    id: 5,
                    icon: "icon-city-2",
                    title: "Hands",
                    highlights: [
                        "Wool or technical fabric liner gloves",
                        "Hard-shell outer gloves (insulated for colder months)",
                    ],
                },
                {
                    id: 6,
                    icon: "icon-city-2",
                    title: "Feet",
                    highlights: [
                        "Wool or technical fabric warm socks",
                        "Hiking socks",
                        "Liner socks (optional such as silk)",
                        "Trekking/hiking boots (waterproof recommended)",
                        "Ice Cleats /Micro Spikes (For trekking from November to March, it's recommended to include Ice Cleats/ Micro Spikes to prevent slipping on icy or wet surfaces.)",
                        "Casual shoes",
                        "Gaiters (lightweight for dust or heavy for snow in colder months)",
                    ],
                },
                {
                    id: 7,
                    icon: "icon-city-2",
                    title: "Undergarments",
                    highlights: [
                        "Technical fabric/quick drying is best for underwear (opportunities to launder during the trip)",
                        "Sports bras (women)",
                        "Pajamas or sleeping clothes",
                    ],
                },
                {
                    id: 8,
                    icon: "icon-city-2",
                    title: "First Aid Kits and Medications",
                    highlights: [
                        "(Note: Guides carry medications and first aid kits during the trip. However, personal kits and medications are highly recommended.)",
                        "Sunscreen",
                        "Lip balm",
                        "Ointment",
                    ],
                },
                {
                    id: 9,
                    icon: "icon-city-2",
                    title: "Other Essentials",
                    highlights: [
                        "Passport",
                        "Extra copies of passport-sized photos",
                        "Reusable water bottle",
                        "Toiletry kits",
                        "Water purification tablets or UV water purifier (if you plan to treat water)",
                        "Hydration bladder",
                        "Towel",
                        "Pillowcase",
                        "Toilet paper (2 rolls)",
                        "High protein snacks (such as protein bars or nuts)",
                        "Waterproof/dry bags for carrying important documents and money",
                        "Airline tickets (Please leave a copy at our office in Kathmandu. This can be useful if there is a change in the date of the flight.)",
                    ],
                },
                {
                    id: 10,
                    icon: "icon-city-2",
                    title: "Optional",
                    highlights: [
                        "Power bank or extra batteries",
                        "Cameras and mobile phone",
                        "Cards/book",
                        "Binoculars",
                        "Trekking poles",
                        "Whistle",
                        "Thermos for hot water",
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
                                    <div className="d-flex items-center text-24 fw-600">
                                        <i className={`${highlight.icon} text-30 mr-10`} />
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

export default GearsAndEquipments;
