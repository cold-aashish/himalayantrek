const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Toll Free Customer Care",
      action: "tel:+(1) 123 456 7890",
      text: "+(1) 123 456 7890",
      icon: ["/img/icons/call.svg"]
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:xyz@abc.com",
      text: "info@nepalhaven.com",
      icon: ["/img/icons/mail.svg"]
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="col-sm-12" key={item.id}>
          <div className="d-flex items-center gap-3">
            <a href={item.action}>
              <span className="d-flex items-center gap-3">
                 <span className="icon">
              <img src={item.icon} alt="" className="footer-icons"/>
            </span>
              <span className="flex items-start flex-column">
              <span className={"text-14"}>{item.title}</span>
              <span className="text-16 fw-500">
                {item.text}
              </span>
            </span>
              </span>

            </a>

          </div>

        </div>
      ))}
    </>
  );
};

export default ContactInfo;
