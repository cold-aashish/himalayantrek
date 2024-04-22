
import Sidebar from "../common/Sidebar";
import Header from "../../../../components/header/dashboard-header";
import Image from "next/image";
  import ImageOne from "@/public/img/backgrounds/ebc.jpg";

import Footer from "../common/Footer";

const index = () => {
  return (
    <>
      {/*  */}
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-blue-3">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Booking Status</h1>
                <div className="text-15 text-light-1">
                  Here You Will Find the current status of your booking.
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <table className="table table-borderless">
                <thead>
                <tr>
                  <th scope="col">S.N.</th>
                  <th scope="col">Trip Details</th>
                  <th scope="col">Booking Status</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr className="">
                  <td scope="row"> 1.
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <Image src={ImageOne} alt="trip-1" width={100} height={100} className="rounded-2"/>
                      <div>
                        <div className="fw-700">Everest Base Camp Trekking</div>
                        <div className="fw-600">April-24 to May-17</div>
                      </div>
                    </div>

                  </td>
                  <td>
                    <div className="text-success">
                      Booked
                    </div>
                    <div className="text-primary">
                      Payment Required
                    </div>
                    <div className="text-danger">
                      Cancelled
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="action-icon-bg action-icon-bg_edit">
                        <i className="icon-edit"></i>
                      </div>
                      <div className="action-icon-bg action-icon-bg_delete">
                        <i className="icon-trash"></i>
                      </div>
                      <div className="action-icon-bg action-icon-bg_view">
                        <i className="icon-eye"></i>
                      </div>
                    </div>

                  </td>

                </tr>
                </tbody>
              </table>
              {/* End tabs */}
            </div>

            <Footer/>
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default index;
