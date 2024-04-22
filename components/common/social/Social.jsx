const Social = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://facebok.com/" },
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/" },
    { id: 3, icon: "icon-instagram", link: "https://instagram.com/" },
    { id: 4, icon: "icon-linkedin", link: "https://linkedin.com/" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
          className="custom-social me-2"
        >
          <i className={`${item.icon} text-16 text-white`} />
        </a>
      ))}
    </>
  );
};

export default Social;
