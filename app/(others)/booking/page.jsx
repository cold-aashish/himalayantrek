import CallToActions from "@/components/common/CallToActions";
import Header1 from "@/components/header/default-header";
import Footer from "@/components/footer";
import StepperBooking from "@/components/booking-page/stepper-booking";

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

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking />
        </div>
        {/* End container */}
      </section>
      {/* End stepper */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer />
    </>
  );
};

export default index;
