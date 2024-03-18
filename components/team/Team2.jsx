import Image from "next/image";
import Link from "next/link";
import teamData from "../../data/teamData";

const Team2 = () => {

    return (
        <>


                <div className="row">
                    {teamData.map((item) => (
                        <div className="col-lg-4 col-sm-6" key={item.id}>
                            <div className="teamCard -type-1">
                                <div className="teamCard__image">
                                    <div className="rounded-8">
                                        <Image
                                            width={400}
                                            height={300}
                                            className="cover w-100 img-fluid"
                                            src={item.img}
                                            alt="image"
                                        />
                                    </div>
                                </div>
                                <div className="team-meta">
                                    <h4 className="text-dark-1 text-18 fw-600">{item.name}</h4>
                                    <div className="text-light-1 text-15 lh-14 mt-5">
                                        {item.designation}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


        </>
    );
};

export default Team2;
