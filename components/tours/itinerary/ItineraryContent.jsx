import Image from "next/image";

const ItineraryContent = () => {
  const itineraryContent = [
    {
      id: 1,
      targetCollapse: "item_1",
      itemNo: "1",
      title: "Windsor Castle",
      img: "/img/tours/list.png",
      content: `Our first stop is Windsor Castle, the ancestral home of the British Royal family for more than 900 years and the largest, continuously occupied castle in Europe.`,
      classShowHide: "",
    },
    {
      id: 2,
      targetCollapse: "item_2",
      itemNo: "2",
      title: "St. George's Chapel",
      img: "/img/tours/list.png",
      content: `Our first stop is Windsor Castle, the ancestral home of the British Royal family for more than 900 years and the largest, continuously occupied castle in Europe.`,
      classShowHide: "show",
    },
    {
      id: 3,
      targetCollapse: "item_3",
      itemNo: "3",
      title: "The Roman Baths",
      img: "/img/tours/list.png",
      content: `Our first stop is Windsor Castle, the ancestral home of the British Royal family for more than 900 years and the largest, continuously occupied castle in Europe.`,
      classShowHide: "",
    },
    {
      id: 4,
      targetCollapse: "item_4",
      itemNo: "4",
      title: "Stonehenge",
      img: "/img/tours/list.png",
      content: `Our first stop is Windsor Castle, the ancestral home of the British Royal family for more than 900 years and the largest, continuously occupied castle in Europe.`,
      classShowHide: "",
    },
  ];

  return (
    <>
      {itineraryContent.map((item) => (
        <div className="col-12" key={item.id} data-bs-toggle="collapse"
             data-bs-target={`#${item.targetCollapse}`}>
          <div className="accordion__item ">
            <div className="d-flex">
              <div className="accordion__icon flex-center bg-blue-2 text-blue-1 rounded-full">
                <a className="text-14 fw-500" href="javascript:void(0)"></a>
              </div>
              {/* End item number */}

              <div className="ml-20 w-100">
                <div className="d-flex justify-between items-center">
                  <a className="text-18 lh-15 fw-700" href="javascript:void(0)">{item.title}</a>
                  <i className="icon-chevron-right fw-300"></i>
                </div>


                <div
                    className={`accordion-collapse collapse ${item.classShowHide}`}
                    id={item.targetCollapse}
                  data-bs-parent="#itineraryContent"
                >
                  <div className="pt-15 pb-15">
                    <Image
                        width={350}
                        height={160}
                        src={item.img}
                        alt="image"
                        className="rounded-4 mt-15"
                    />
                    <div className="text-14 lh-17 mt-15">{item.content}</div>
                    <div className="iterinary-highlights">
                      <div className="d-flex gap-3">
                        <div>
                          <i className="icon-city-2 me-2 text-12"></i>
                          <span className={"text-12"}>Stay</span>
                        </div>
                        <div>
                          <i className="icon-city-2 me-2 text-12"></i>
                          <span className={"text-12"}>Stay</span>
                        </div>
                        <div>
                          <i className="icon-city-2 me-2 text-12"></i>
                          <span className={"text-12"}>Stay</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End accordion conent */}
                {/* End accordion button */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItineraryContent;
