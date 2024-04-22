import CallToActions from "@/components/common/CallToActions";
import Header1 from "@/components/header/default-header";
import Footer from "@/components/footer";
import StepperBooking from "@/components/booking-page/stepper-booking";
import Image from "next/image";
import CustomerInfo from "@/components/booking-page/CustomerInfo";
import Link from "next/link";
import {CheckMark} from '@/public/img/featureIcons/checkmark.svg';
import {EBC} from "@/public/img/backgrounds/ebc.jpg";

export const metadata = {
    title: "Booking Page",
    description: "",
};

const index = () => {
    return (
        <>
            {/* End Page Title */}




            <div className="header-margin"></div>
            {/* header top margin */}

            <Header1/>
            {/* End Header 1 */}

            <section className="section-bg layout-pt-lg layout-pb-md">
                <div className="section-bg__item col-12">
                    <Image
                        width={1920}
                        height={400}
                        src="/img/backgrounds/bg-2.png  "
                        alt="image"
                        className="bg-image-booking"
                        priority
                    />
                    <div className="overlay"></div>
                </div>
                {/* End section-bg__item */}

                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <h1 className="text-50 md:text-25 fw-600 text-white">
                                Book This Trip
                            </h1>
                            <div className="text-white">
                                Your trusted companion for quick, easy, safe and exciting journey of a lifetime.
                            </div>
                        </div>
                    </div>
                </div>
                {/* End .container */}
            </section>
            {/* End About Banner Section */}
            <div className="d-flex justify-content-center layout-pt-sm layout-pb-sm">
                <ul className="nav nav-tabs" id="tripType" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="group-tab" data-bs-toggle="tab" data-bs-target="#group"
                                type="button" role="tab" aria-controls="group" aria-selected="true">Group Trip
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="custom-tab" data-bs-toggle="tab" data-bs-target="#custom"
                                type="button" role="tab" aria-controls="custom" aria-selected="false">Customized Trip
                        </button>
                    </li>
                </ul>
            </div>


            <div className="tab-content" id="tripTypeTabContent">
                <div className="tab-pane fade show active" id="group" role="tabpanel" aria-labelledby="group-tab">
                    <section className="layout-pb-md">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="text-center">EVEREST-BASE CAMP TREK DEPARTURE DATES</h2>
                                    <p>
                                       " At NepalHaven.com, we prioritize sustainability and responsible tourism, ensuring our journeys leave a positive impact on both the environment and local communities. Join us on a transformative journey where every step leads to new discoveries and unforgettable memories. Explore our array of departure dates and embark on the adventure of a lifetime with NepalHaven.com today! "
                                    </p>
                                    <p className="pt-3">
                                        Here are the available dates for Everest-Manaslu Trek. Please click on your
                                        convenient
                                        date from the following
                                        dates.
                                    </p>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-lg-12">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center gap-4">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="icon-background-green">
                                                    <Image src="/img/featureIcons/checkmark.svg" alt="check" width="10" height="10"/>
                                                </span>
                                                <span>
                                                    Available for booking
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="icon-background-red">
                                                    <Image src="/img/featureIcons/checkmark.svg" alt="check" width={10} height={10}/>
                                                </span>
                                                <span>
                                                    Going Fast
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="icon-background-blue">
                                                    <Image src="/img/featureIcons/checkmark.svg" alt="check" width={10} height={10}/>
                                                </span>
                                                <span>
                                                    Request a Reservation
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h5 className="my-3">For 2024:</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <Link className="btn w-100 available-date-card" href="/booking">


                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex gap-2 align-items-center">
                                                     <div className="icon-background-red">
                                                    <Image src="/img/featureIcons/checkmark.svg" alt="check" width={10}
                                                           height={10}/>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                    <span className="from">April-5</span>
                                                                           to
                                                    <span className="to">May-11</span>
                                                </div>
                                                </div>

                                                <div>
                                                      <span className="text-danger text-sm d-block">
                                                      Going Fast
                                                </span>
                                            <span className="text-dark font-bold d-block">
                                                    Price: $4335
                                             </span>
                                                </div>

                                            </div>


                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <Link className="btn w-100 available-date-card" href="/booking">


                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex gap-2 align-items-center">
                                                     <div className="icon-background-green">
                                                    <Image src="/img/featureIcons/checkmark.svg" alt="check" width={10}
                                                           height={10}/>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                    <span className="from">April-5</span>
                                                                           to
                                                    <span className="to">May-11</span>
                                                </div>
                                                </div>

                                                <div>
                                                      <span className="text-success text-sm d-block">
                                                      Available for booking
                                                </span>
                                            <span className="text-dark font-bold d-block">
                                                    Price: $4335
                                             </span>
                                                </div>

                                            </div>


                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <Link className="btn w-100 available-date-card" href="/booking">


                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex gap-2 align-items-center">
                                                     <div className="icon-background-blue">
                                                    <Image src="/img/featureIcons/checkmark.svg" alt="check" width="10"
                                                           height="10"/>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                    <span className="from">April-5</span>
                                                                           to
                                                    <span className="to">May-11</span>
                                                </div>
                                                </div>

                                                <div>
                                                      <span className="text-primary text-sm d-block">
                                                      Reservations Open
                                                </span>
                                            <span className="text-dark font-bold d-block">
                                                    Price: $4335
                                             </span>
                                                </div>

                                            </div>


                                        </Link>
                                    </div>



                                </div>
                            </div>


                        </div>


                    </section>


                </div>
                <div className="tab-pane fade" id="custom" role="tabpanel" aria-labelledby="custom-tab">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="mt-3">
                                    <h2 className="text-center">"EVEREST BASE-CAMP TREK" CUSTOM TRAVEL FORM</h2>
                                    <p className="text-light-1 fs-24">Enter your information in the following form to book
                                        your customized trip for Everest Base-Camp Trek</p>
                                    <span className="text-light-1"> <code>*</code> Denotes required field</span>
                                    <form action="">
                                        <div className="form-booking-card">
                                            <label htmlFor="dates-and-travellers" className="booking-label">
                                                Date & Travellers
                                            </label>
                                            <div className="row mb-3" id="dates-and-travellers">
                                                <div className="col-lg-6">
                                                    <label htmlFor="dates" className="text-14 text-light-1">Trip
                                                        Date <code>*</code> </label>
                                                    <input type="date" className="form-control" id="dates"/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label htmlFor="travellers" className="text-14 text-light-1">No. of
                                                        Travellers <code>*</code> </label>
                                                    <input type="number" className="form-control" id="travellers"
                                                    />
                                                    <div className="text-danger">Please Enter a valid number</div>
                                                </div>
                                            </div>
                                            <label className="booking-label">
                                                Lead Traveller Details
                                            </label>
                                            <div className="row" id="full-name">
                                                <div className="col-lg-6">
                                                    <label htmlFor="fname" className="text-14 text-light-1">First Name
                                                        <code>*</code> </label>
                                                    <input type="text" className="form-control mb-3" id="fname"/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label htmlFor="lname" className="text-14 text-light-1">Last
                                                        Name <code>*</code> </label>
                                                    <input type="text" className="form-control mb-3" id="lname"/>
                                                </div>
                                                <div className="col-lg-12">
                                                    <label htmlFor="email" className="text-14 text-light-1">Email
                                                        Address
                                                        <code>*</code> </label>
                                                    <input type="email" className="form-control mb-3" id="email"/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label htmlFor="country-code" className="text-14 text-light-1">Country
                                                        Code
                                                        + Phone Number <code>*</code> </label>
                                                    <input type="number" className="form-control mb-3" id="country-code"
                                                           placeholder="Country Code + Phone Number"/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label htmlFor="country" className="text-14 text-light-1">Select
                                                        Your
                                                        Country <code>*</code> </label>
                                                    <select name="country" id="country"
                                                            className="form-select form-control mb-3">
                                                        <option value="Select" selected disabled>Select Your Country
                                                        </option>
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
                                                <div className="col-lg-12 text-center">
                                                    <button className="btn bg-blue-1 text-white">
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>


                            </div>

                        </div>
                    </div>


                </div>
            </div>

            {/*<section>*/}
            {/*    <div className="w-100 text-center m-4">*/}
            {/*        <Image*/}
            {/*        src="/img/backgrounds/ebc.jpg"*/}
            {/*        width={1200}*/}
            {/*        height={700}*/}
            {/*        alt="EBC Base camp"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</section>*/}


            {/* End stepper */}

            <CallToActions/>
            {/* End Call To Actions Section */}

            <Footer/>
        </>
    );
};

export default index;
