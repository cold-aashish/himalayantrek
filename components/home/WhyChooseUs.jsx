import Image from "next/image";

const WhyChooseUs = () => {
  const expertContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "Best Price Guarantee",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "Easy & Quick Booking",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "Customer Care 24/7",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
  ];

  return (
    <>
      <div className="section-bg__item -right -image col-5 md:mb-60 sm:mb-40">
        <Image
          width={450}
          height={350}
          src="/img/backgrounds/bg.jpg"
          alt="image"
        />
      </div>
      {/* End right video popup icon with image */}

      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-7">
            <h2 className="text-40 fw-600">Why Choose Nepalhaven</h2>
            <p className="mt-5">
              These popular destinations have a lot to offer
            </p>
            <div className="row y-gap-20 pt-40 md:pt-20">
              {expertContent.map((item) => (
                <div className="col-12" key={item.id}>
                  <div className="d-flex pr-30">
                    <Image
                      width={50}
                      height={50}
                      className="size-50"
                      src={item.icon}
                      alt="image"
                    />
                    <div className="ml-15">
                      <h4 className="text-22 fw-500">{item.title}</h4>
                      <p className="text-17 lh-15">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End left local expert content */}
    </>
  );
};

export default WhyChooseUs;
