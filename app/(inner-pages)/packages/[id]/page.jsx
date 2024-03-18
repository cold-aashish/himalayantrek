import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import { toursPackageData } from "@/data/tourPackages";
import Header1 from "@/components/header/default-header";
import StickyHeader from "@/components/tour-single/StickyHeader";
import TopBreadCrumb from "@/components/tour-single/TopBreadCrumb";
import CallToActions from "@/components/common/CallToActions";
import Footer from "@/components/footer";
import GalleryTwo from "@/components/tour-single/GalleryTwo";
import React from "react";



export const metadata = {
    title: `${toursPackageData?.title?.slice(0, 30)}`,
    description: "Tour Packages",
};

const HotelSingleV1Dynamic = ({ params }) => {
    const id = params.id;
    const hotel = toursPackageData.find((item) => item.id == id) || toursPackageData[0];

    return (
        <>
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header1/>
            {/* End Header 1 */}

            <TopBreadCrumb/>
            {/* End top breadcrumb */}

            <StickyHeader hotel={hotel}/>
            {/* sticky single header for hotel single */}

            <GalleryTwo hotel={hotel}/>

            {/* End gallery grid wrapper */}



            {/* End single page content */}

            <CallToActions/>
            <Footer/>


        </>
    );
};

export default dynamic(() => Promise.resolve(HotelSingleV1Dynamic), {
    ssr: false,
});
