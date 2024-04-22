'use client'
import { useRouter } from "next/navigation";
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = () => {
  const Router = useRouter()
  return (
    <>
      <div
        className="mainSearch bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1 mt-35"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="button-grid items-center">
          <div className="searchMenu-location px-30 lg:py-20 lg:px-0">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Destination
              </h4>
              <select name="trip-type" id="trip-type-select">
                <option value="select" selected disabled className="text-secondary">Select Your Destination</option>
                <option value="select">Nepal</option>
                <option value="select">Tibet</option>
                <option value="select">Bhutan</option>
              </select>
            </div>
          </div>
          {/* End check-in-out */}

          {/* End Location */}

          <div className="searchMenu-type px-30 lg:py-20 lg:px-0">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Trip Type
              </h4>
              <select name="trip-type" id="trip-type-select">
                <option value="select" selected disabled className="text-secondary">Select Your Trip Type</option>
                <option value="select">Guided Backpacking Trip</option>
                <option value="select">Camping/Hiking Tour</option>
                <option value="select">Cultural Sightseeing</option>
                <option value="select">Basecamp Tour</option>
                <option value="select">Mountain Expedition</option>
                <option value="select">Yoga and Pilgrimage</option>
              </select>
            </div>
          </div>
          {/* End check-in-out */}
          <div className="searchMenu-type px-30 lg:py-20 lg:px-0">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Month
              </h4>
              <select name="trip-type" id="trip-type-select">
                <option value="select" selected disabled className="text-secondary">Select Month</option>
                <option value="select">January</option>
                <option value="select">February</option>
                <option value="select">March</option>
                <option value="select">April</option>
                <option value="select">May</option>
                <option value="select">June</option>
                <option value="select">July</option>
                <option value="select">August</option>
                <option value="select">September</option>
                <option value="select">October</option>
                <option value="select">November</option>
                <option value="select">December</option>
              </select>
            </div>
          </div>

          <div className="button-item">
            <button
                className="mainSearch__submit button custom-button-hover py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
                onClick={() => Router.push("/")}
            >
              <i className="icon-search text-20 mr-10"/>
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
      {/* End .mainSearch */}
    </>
  );
};

export default MainFilterSearchBox;
