import dateAndPriceData from "../../data/datesAndPrice";

const DateAndPriceDetails = () => {
    return (
        <>
            {dateAndPriceData.map((item) => (
                <div className="js-accordion custom-dates-container " key={item.id}>
                    <div className="py-30 px-30 bg-white rounded-4 base-tr">
                        <div className="row y-gap-30 justify-between bg-light-2">
                            <div className="col">
                                <div className="row y-gap-10 items-center">
                                    <div className="col">
                                        <div className="row x-gap-20 items-end">
                                            <div className="col-auto">
                                                <div className="text-15 lh-15 text-light-1">Start Date</div>
                                                <div className="lh-15 fw-500">2024-03-05</div>

                                            </div>
                                            <div className="col text-center">
                                                <div className="flightLine">
                                                    <div/>
                                                    <div/>
                                                </div>
                                                <div className="text-15 lh-15 text-light-1 mt-10">
                                                    Available
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="text-15 lh-15 text-light-1">End Date</div>
                                                <div className="lh-15 fw-500">2024-03-08</div>

                                            </div>
                                            <div className="col text-center">
                                                <div className="flightLine">
                                                    <div/>
                                                    <div/>
                                                </div>
                                                <div className="text-15 lh-15 text-light-1 mt-10">
                                                    10 Seats
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="text-15 lh-15 text-light-1">Starts from</div>
                                                <div className="lh-15 fw-500">US$200</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End .col */}

                            <div className="col-md-auto">
                                <div className="d-flex items-center h-full">
                                    <div className="pl-30 border-left-light h-full md:d-none"/>
                                    <div>
                                        <div className="accordion__button">
                                            <button
                                                className="button -dark-1 px-30 h-50 bg-blue-1 text-white"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${item.selectId}`}
                                            >
                                                Book Now <div className="icon-arrow-top-right ml-15" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End .col-md-auto */}
                        </div>
                        {/* End .row */}
                    </div>
                    {/* End bg-white */}
                </div>
            ))}
        </>
    );
};

export default DateAndPriceDetails;
