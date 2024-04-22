
import Sidebar from "../common/Sidebar";
import Header from "../../../../components/header/dashboard-header";
import Image from "next/image";
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
            <div className="row y-gap-20 justify-between items-end pb-30 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Upload Documents</h1>
                <div className="text-15 text-light-1">
                  Please upload your documents like Passport, Driving License, or National Identity Card
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <div className="mb-3">
                <label htmlFor="documentsUpload" className="form-label">Upload Passport/ National Identity Card/ Driving License</label>
                <input className="form-control bg-blue-2" type="file" id="documentsUpload" multiple/>
                <div className="uploaded-documents-container">
                <Image src="/img/general/document.jpg" width={200} height={200} alt="personal document" />
                </div>
              </div>
              <div>
                <button className="button bg-dark-3 text-white btn">
                    Save
                </button>
              </div>

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
