
'use client'

import React from 'react'
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Overview from "@/components/tour-single/Overview";
import PopularFacilities from "@/components/tour-single/PopularFacilities";
import Highlights from "@/components/highlights/Highlights";
import SidebarRight from "@/components/tour-single/SidebarRight";
import Itinerary from "@/components/tours/itinerary";
import CostDetails from "@/components/cost-details/CostDetails";
import DateAndPriceDetails from "@/components/date-and-price/DateAndPrice";
import Notes from "@/components/notes/Notes"
import GearsAndEquipments from "@/components/gears-and-equipments/GearsAndEquipments";
import Faq from "@/components/faq/Faq";
import Features from "@/components/features/Features";
import Reviews from "@/components/reviews/Reviews";

export default function GalleryTwo({hotel}) {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="pt-40">
        <div className="container">
          <div className="row trip-main-container">
            <div className="col-lg-8 left-content">
              <Gallery>
                <div className="galleryGrid -type-2">
                  <div className="galleryGrid__item relative d-flex justify-end">
                    <Item
                        original={hotel?.img}
                        thumbnail={hotel?.img}
                        width={660}
                        height={660}
                    >
                      {({ref, open}) => (
                          <img
                              src={hotel?.img}
                              ref={ref}
                              onClick={open}
                              alt="image"
                              role="button"
                              className="rounded-4"
                          />
                      )}
                    </Item>

                  </div>
                  {/* End .galleryGrid__item */}

                  <div className="galleryGrid__item">
                    <Item
                        original="/img/gallery/1/2.png"
                        thumbnail="/img/gallery/1/2.png"
                        width={450}
                        height={375}
                    >
                      {({ref, open}) => (
                          <img
                              ref={ref}
                              onClick={open}
                              src="/img/gallery/1/2.png"
                              alt="image"
                              className="rounded-4"
                              role="button"
                          />
                      )}
                    </Item>
                  </div>
                  {/* End .galleryGrid__item */}

                  <div className="galleryGrid__item">
                    <Item
                        original="/img/gallery/1/3.png"
                        thumbnail="/img/gallery/1/3.png"
                        width={450}
                        height={375}
                    >
                      {({ref, open}) => (
                          <img
                              ref={ref}
                              onClick={open}
                              src="/img/gallery/1/3.png"
                              alt="image"
                              className="rounded-4"
                              role="button"
                          />
                      )}
                    </Item>
                  </div>
                  {/* End .galleryGrid__item */}

                  <div className="galleryGrid__item relative d-flex justify-end items-end">
                    <img
                        src="/img/gallery/1/4.png"
                        alt="image"
                        className="rounded-4"
                    />
                    <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">
                      <Item
                          original="/img/gallery/1/4.png"
                          thumbnail="/img/gallery/1/4.png"
                          width={362}
                          height={302}
                      >
                        {({ref, open}) => (
                            <div
                                className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"
                                ref={ref}
                                onClick={open}
                                role="button"
                            >
                              See All Photos
                            </div>
                        )}
                      </Item>
                    </div>
                  </div>
                  {/* End .galleryGrid__item */}
                </div>
              </Gallery>
              {/* End gallery grid */}

              <div className="row justify-between items-end pt-40">
                <div className="col-auto">
                  <div className="row x-gap-20  items-center">
                    <div className="col-auto">
                      <h1 className="text-34 sm:text-28 fw-600">
                        {hotel?.title?.slice(0, 30)}
                      </h1>
                    </div>
                    {/* End .col */}
                    <div className="col-auto">
                      <i className="icon-star text-10 text-yellow-1"/>
                      <i className="icon-star text-10 text-yellow-1"/>
                      <i className="icon-star text-10 text-yellow-1"/>
                      <i className="icon-star text-10 text-yellow-1"/>
                      <i className="icon-star text-10 text-yellow-1"/>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row x-gap-20 y-gap-20 items-center">
                    <div className="col-auto">
                      <div className="d-flex items-center text-15 text-light-1">
                        <i className="icon-location-2 text-16 mr-5"/>
                        {hotel?.location}
                      </div>
                    </div>
                    <div className="col-auto">
                      <button
                          data-x-click="mapFilter"
                          className="text-blue-1 text-15 underline"
                      >
                        Show on map
                      </button>
                    </div>
                  </div>
                  {/* End .row */}
                </div>
                {/* End .col */}

                <div className="col-auto">
                  <div className="text-14 text-md-end">
                    From{" "}
                    <span className="text-22 text-dark-1 fw-500">
                      US${hotel?.price}
                    </span>
                  </div>
                  <a
                      href="#"
                      className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Select This Package <div className="icon-arrow-top-right ml-15"/>
                  </a>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}
              <div id="facilities" className="row y-gap-40 pt-40">
                <div className="col-12">
                  <div className="d-flex items-center relative text-30 fw-600 mb-3">
                    <div className="icon-bg-2"></div>
                    <i className={"icon-beach-umbrella text-30 me-4"}/>
                    Most Popular Facilities
                  </div>
                  <div className="row y-gap-10 pt-20">
                    <PopularFacilities/>
                  </div>
                </div>
              </div>

              <div id="overview" className="row y-gap-40 pt-40 pb-40 ">


                <div className="col-12">
                  <div className="text-30 fw-600 pt-10 relative border-top-light">
                    <div className="icon-bg-2"></div>
                    <i className="icon-bed me-4"></i>
                    {hotel?.title?.slice(0, 30)} Overview
                  </div>
                  <Overview/>
                </div>
                {/* End col-12 */}


                {/* End .col-12  */}
              </div>
              {/* End .col-12  Overview */}

              <section className="" id="highlights">
                <div className="container border-top-light">
                  <div className="row x-gap-40 y-gap-40">
                    <div className="col-12">
                      <div className="row x-gap-40 y-gap-40 pt-20 pb-40">
                        <Highlights/>
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .col-12 */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .container */}
              </section>

              <section className="border-top-light   pt-40 pb-40" id="itinerary">
                <div className="container">
                  <div className="d-flex items-center relative text-30 fw-600 mb-3">
                    <div className="icon-bg-2"></div>
                    <i className={"icon-compass text-30 me-4"}/>
                    Itinerary
                  </div>
                  <Itinerary/>
                </div>
              </section>

              <section className="border-top-light pt-40 pb-40" id="itinerary">
                <div className="container">
                  <Notes/>
                </div>
              </section>


              <section className="border-top-light pt-40 pb-40" id="cost-details">
                <div className="container">
                  <div className="d-flex relative items-center text-30 fw-600 mb-3">
                    <div className="icon-bg-2"></div>
                    <i className={"icon-price-label text-30 me-4"}/>

                    Cost Details
                  </div>
                  <CostDetails/>
                </div>
              </section>

              <section className="border-top-light   pt-40 pb-40" id="date-and-price">
                <div className="container">
                  <div className="d-flex items-center relative text-30 fw-600 mb-3">
                    <div className="icon-bg-2"></div>
                      <i className={"icon-calendar text-30 me-4"}/>
                    Date and Price
                  </div>
                  <DateAndPriceDetails/>
                </div>
              </section>

              <section className="border-top-light   pt-40 pb-40" id="date-and-price">
                <div className="container">
                  <div className="d-flex relative items-center text-30 fw-600 mb-3">
                    <div className="icon-bg-2"></div>
                    <i className={"icon-speedometer text-30 me-4"}/>

                    Gears and Equipments
                  </div>
                  <p className="mb-3">Here is a list of what you might want to pack for the hike. Please take this as a
                    starting point. You’ll need layers of warmer clothing during the winter. We provide a 75 liter
                    duffel bag for you to use for the trek. It will be given to you during your pre-trip meeting in
                    Kathmandu. The duffle bag is yours to keep. Also, you can rent sleeping bag and down jacket with us
                    at the additional fee of USD 35 for each once you are in Kathmandu.</p>

                  <GearsAndEquipments/>
                </div>
              </section>

              <section className="border-top-light   pt-40 pb-40" id="date-and-price">
                <div className="container">
                  <div className="d-flex items-center relative text-30 fw-600 mb-3">
                    <div className="icon-bg-2"></div>
                    <i className={"icon-speedometer text-30 me-4"}/>

                    FAQs
                  </div>
                  <div
                      className="accordion -simple row y-gap-20 js-accordion"
                      id="faq"
                  >
                    <Faq/>
                  </div>
                </div>
              </section>

              <section className="border-top-light   pt-40 pb-40" id="date-and-price">
                <div className="container">
                  <div className="d-flex items-center text-30 relative fw-600 mb-3">
                    <div className="icon-bg-2"></div>
                    <i className={"icon-menu  text-30 me-4"}/>

                    Map for {hotel?.title?.slice(0, 30)}
                  </div>
                  <div>
                    <div className="custom-map-box">
                      <div className="map">
                        <img
                            src={hotel?.mapImg}
                            alt="image"
                            className="rounded-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              <section className="pt-40 mt-20 mb-50" id="what-makes-us-different">
                <div className="container">
                  <div
                      className="accordion -simple row y-gap-20 js-accordion"
                      id="features"
                  >
                    <Features/>
                  </div>
                </div>
              </section>

              {/*Reviews */}

              <section className="section-bg layout-pt-sm layout-pb-md">
                <div className="section-bg__item -mx-20 bg-white" />
                <div className="container">
                  <div className="d-flex relative items-center text-30 fw-600 mb-3">
                    <div className="icon-bg-2"></div>
                    <i className={"icon-speedometer text-30 me-4"}/>

                    Reviews
                  </div>
                  {/* End .row */}

                  <div className="overflow-hidden js-section-slider">
                    <div className="item_gap-x30">
                      <div className="row">
                        <div className="col-12">
                          <Reviews/>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/* End .overflow-hidden */}
                </div>
                {/* End .container */}
              </section>
              {/* End testimonial section */}


            </div>
            {/* End left content  */}

            <div className="col-lg-4">
              <SidebarRight hotel={hotel}/>


            </div>

            {/* End right content */}
          </div>
        </div>
      {/* End .container */}
    </section>
    </>
  )
}
