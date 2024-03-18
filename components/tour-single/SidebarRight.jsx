import FilterBox from "../../components/tour-single/filter-box";
import SidebarRight2 from "@/components/tour-single/SidebarRight2";
import RatingBox from "@/components/tour-single/RatingBox";
import PropertyHighlights2 from "@/components/tour-single/PropertyHighlights2";
import React from "react";

const SidebarRight = ({ hotel }) => {
  return (
      <aside className="right-content">
        <div className="px-30 py-30 border-light rounded-4 shadow-4 mb-30">
          <div>
            <div className="d-flex items-center justify-between">
              <div>
                <span className="text-20 fw-500">US${hotel?.price}</span>
                <span className="text-14 text-light-1 ml-5">nights</span>
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
              <FilterBox/>
            </div>
          </div>
          {/* End px-30 FilterBox */}
        </div>
        <SidebarRight2/>
        <RatingBox hotel={hotel}/>
        <PropertyHighlights2/>
      </aside>

  );
};

export default SidebarRight;
