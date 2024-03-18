import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";

const CustomerInfo = () => {
  return (
      <>
          <div className="col-lg-7">
            <div className="mt-3">
              <span className="text-light-1"> <code>*</code> Denotes required field</span>
              <form action="">
                <div className="form-booking-card">
                  <label htmlFor="dates-and-travellers" className="booking-label">
                    Date & Travellers
                  </label>
                  <div className="row" id="dates-and-travellers">
                    <div className="col-lg-6">
                      <label htmlFor="dates" className="text-14 text-light-1">Trip
                        Date <code>*</code> </label>
                      <input type="date" className="form-control" id="dates"/>
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="travellers" className="text-14 text-light-1">No. of
                        Travellers <code>*</code> </label>
                      <input type="number" className="form-control" id="travellers" value="2"/>
                    </div>
                  </div>
                </div>
                <div className="form-booking-card">
                  <label className="booking-label">
                    Lead Traveller Details
                  </label>
                  <div className="row" id="full-name">
                    <div className="col-lg-6">
                      <label htmlFor="fname" className="text-14 text-light-1">First Name
                        <code>*</code> </label>
                      <input type="date" className="form-control mb-3" id="fname"/>
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="lname" className="text-14 text-light-1">Last
                        Name <code>*</code> </label>
                      <input type="text" className="form-control mb-3" id="lname"/>
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="email" className="text-14 text-light-1">Email Address
                        <code>*</code> </label>
                      <input type="email" className="form-control mb-3" id="email"/>
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="country-code" className="text-14 text-light-1">Country Code
                        + Phone Number <code>*</code> </label>
                      <input type="number" className="form-control mb-3" id="country-code"
                             placeholder="Country Code + Phone Number"/>
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="country" className="text-14 text-light-1">Select Your
                        Country <code>*</code> </label>
                      <select name="country" id="country"
                              className="form-select form-control mb-3">
                        <option value="Select" selected disabled>Select Your Country</option>
                        <option value="Nepal">Nepal</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="extra-requirements">
                        Pickup Details/Extra Requirements
                      </label>
                      <textarea name="extra-requirements" id="" rows="5"
                                className="form-control mb-3"></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>


          </div>


        <div className="col-xl-5 col-lg-5">
          <div className="booking-sidebar sticky">
            <BookingDetails/>
          </div>
        </div>
        {/*  */}
      </>
  );
};

export default CustomerInfo;
