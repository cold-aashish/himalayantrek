
import Sidebar from "../common/Sidebar";
import Header from "../../../../components/header/dashboard-header";
import Paypal from "@/public/img/payments/paypal.png";
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
                <h1 className="text-30 lh-14 fw-600">Payment History</h1>
                <div className="text-15 text-light-1">
                  Here You Will Find your payment history.
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="pb-30 px-30 rounded-4">
              <div className="do-payment-methods">
                <div className="d-flex justify-between items-center">
            <div className="fw-600">
                  Make Payments
            </div>
                  <a href="#" className="text-primary">Show other payment methods</a>
                </div>
                <div className="row mt-20">
                  <div className="col-lg-3">
                    <div className="payment-image-container">
                      <Image src="/img/payments/paypal.png" width={150} height={150} alt="paypal"/>
                    </div>

                  </div>
                  <div className="col-lg-3">
                    <div className="payment-image-container">
                    <Image src="/img/payments/mastercard.png" width={150} height={150} alt="paypal"/>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="payment-image-container">
                    <Image src="/img/payments/amazonpay.png" width={150} height={150} alt="paypal"/>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="payment-image-container">
                    <Image src="/img/payments/applepay.png" width={150} height={150} alt="paypal"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-16 mt-20">
                <div className="d-flex justify-between items-center mb-20">
                  <div className="fw-600">
                    Payments History
                  </div>
                  <a href="#" className="text-primary">See full history</a>
                </div>
                <table className="table">
                  <thead>
                  <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row" className="text-danger">
                      Cancelled
                    </th>
                    <td>
                      $4500
                    </td>
                    <td>
                      28 April 2024
                    </td>
                    <td>Payment via Mastercard</td>
                    <td>
                      <button className="btn btn-outline-primary">
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-warning">On Hold</th>
                    <td>$5000</td>
                    <td>04 May 2024</td>
                    <td>Payment via Paypal</td>
                    <td>
                      <button className="btn btn-outline-primary">
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-danger">Cancelled</th>
                    <td>$5000</td>
                    <td>04 May 2024</td>
                    <td>Payment via Apple Pay</td>
                    <td>
                      <button className="btn btn-outline-primary">
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-success">Proceed</th>
                    <td>$5000</td>
                    <td>04 May 2024</td>
                    <td>Payment via Paypal</td>
                    <td>
                      <button className="btn btn-outline-primary">
                        Details
                      </button>
                    </td>
                  </tr>
                  </tbody>
                </table>
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
