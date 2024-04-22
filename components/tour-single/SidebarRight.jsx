import FilterBox from "../../components/tour-single/filter-box";
import SidebarRight2 from "@/components/tour-single/SidebarRight2";
import RatingBox from "@/components/tour-single/RatingBox";
import PropertyHighlights2 from "@/components/tour-single/PropertyHighlights2";
import React from "react";
import Link from "next/link";

const SidebarRight = ({ hotel }) => {
  return (
      <aside className="right-content">
        <div className="px-30 py-30 border-light rounded-4 shadow-4 mb-30">
          <div>
            <div className="d-flex items-center justify-between">
              <div>
                  <div className="fw-700">Starts from</div>
                <span className="text-30 fw-500 fw-700">US${hotel?.price}</span>
                <span className="text-14 text-light-1 ml-5">per person</span>
              </div>
              <div className="d-flex items-center">
                <div className="text-14 text-right mr-10">
                  <div className="lh-15 fw-500">Exceptional</div>
                  <div className="lh-15 text-light-1">
                    {hotel?.numberOfReviews} reviews
                  </div>
                </div>
                <div className="size-40 flex-center bg-blue-1 rounded-4">
                  <div className="text-14 fw-600 text-white">{hotel?.ratings}</div>
                </div>
              </div>
            </div>
            {/* End d-flex */}

              <div className="row y-gap-20 pt-30">
                  <div className="col-12">
                      <div className="button-item h-full">
                          <Link href="/available-dates"
                                className="button px-35 h-60 col-12 bg-blue-1 text-white">
                              Book Now
                          </Link>
                      </div>
                  </div>
                  <div className="col-12">
                      <div className="button-item h-full">
                          <Link href="/inquire-now"
                                className="button px-35 h-60 col-12 inquiry-button text-white fw-700">
                              Inquire
                          </Link>
                      </div>
                  </div>

              </div>
          </div>
            {/* End px-30 FilterBox */}
        </div>
          <SidebarRight2/>
          <PropertyHighlights2/>
      </aside>

  );
};

export default SidebarRight;
