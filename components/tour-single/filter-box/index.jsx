import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";

const index = () => {
  return (
    <>
      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
            <div>

                <div className="dropdown">
                    <h4 className="text-15 fw-500 ls-2 lh-16 dropdown-toggle" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">Available Dates <i className="icon-calendar-2"></i></h4>

                    <ul className="dropdown-menu custom-dropdown-menu">
                        <li><a className="dropdown-item">From <span>2024/06/24</span> To <span>2024/06/30</span> </a></li>
                        <li><a className="dropdown-item" href="#">From <span>2024/07/24</span> To <span>2024/07/30</span></a></li>
                        <li><a className="dropdown-item" href="#">From <span>2024/08/24</span> To <span>2024/08/30</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
          {/* End check-in-out */}
      </div>
        {/* End .col-12 */}

        <div className="col-12">
            <GuestSearch/>
            {/* End guest */}
        </div>
        {/* End .col-12 */}

        <div className="col-12">
            <div className="button-item h-full">
                <button className="button -dark-1 px-35 h-60 col-12 bg-blue-1 text-white">
                    Check availability
                </button>
        </div>
        {/* End search button_item */}
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default index;
