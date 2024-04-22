const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-12",
      colItem: "icon-newsletter",
      title: "Address",
      content: (
        <>Kathmandu,Nepal.</>
      ),
    },
    {
      id: 2,
      colClass: "col-lg-12",
      title: "Toll Free Customer Care",
      colItem: "icon-speedometer",
      content: (
        <>
          <a href="tel:+4733378901">+47 333 78 901</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-lg-12",
      title: "Need live support?",
      colItem: "icon-beach-umbrella",
      content: (
        <>
          {" "}
          <a href="mailto:i@gotrip.com">info@nepalhaven.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass} contact-item`} key={item.id}>
          <div className="d-flex items-center gap-3">
            <div className="icon-div">
              <i className={`${item.colItem} text-30`}></i>
            </div>
            <div>
              <div className="text-20 text-dark contact-title fw-600">{item.title}</div>
              <div className="text-16 fw-500 mb-2">{item.content}</div>
            </div>
          </div>


        </div>
      ))}
    </>
  );
};

export default Address;
