const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/2/1.svg",
      title: "Trekking in Nepal",
      text: `100 Packages`,
      delayAnim: "0",
    },
    {
      id: 2,
      icon: "/img/featureIcons/2/2.svg",
      title: "Nepal Tour Package",
      text: `24 Packages`,
      delayAnim: "50",
    },
    {
      id: 3,
      icon: "/img/featureIcons/2/3.svg",
      title: "Nepal Luxury Tour",
      text: `50 Packages`,
      delayAnim: "100",
    },
    {
      id: 4,
      icon: "/img/featureIcons/2/4.svg",
      title: "Pilgrimage Tour",
      text: `50 Packages`,
      delayAnim: "100",
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6 pl-0 pr-0 columns"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15 border-blockguide">
            <div className="d-flex justify-center">
              <div className="icon-container">
                 <img src={item.icon} alt="image" className="js-lazy" />
              </div>
             
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
