'use client'

import Link from "next/link";
import {useEffect, useState} from "react";
import MainMenu from "../MainMenu";
import MobileMenu from "../MobileMenu";
import Image from "next/image";
import TelIcon from "@/public/img/featureIcons/call-topbar.svg";
import MailIcon from "@/public/img/featureIcons/mail-topbar.svg";

const Header1 = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    return (
        <>

            <header className={`header bg-white ${navbar ? "is-sticky" : ""}, d-flex, flex-column`}>
                <div className="w-100 py-1 home-topbar d-flex align-items-center justify-content-between px-40">
                    <div className="d-flex gap-2">
                        <a className="topbar-tel d-flex align-items-center" href="#">
                            <Image src={TelIcon} width="20" height="20" alt="telephoneicon"/>
                            <span className="topbar-content">
                  +977-9813456456
                </span>
                        </a>
                        <a className="topbar-mail d-flex align-items-center gap-2" href="#">
                            <Image src={MailIcon} width="20" height="20" alt="mailicon"/>
                            <span className="topbar-content">
                  info@nepalhaven.com
                </span>
                        </a>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <a href="/top-packages" className="topbar-content">
                            Top Packages
                        </a>
                        <a href="/faqs" className="topbar-content">
                            FAQs
                        </a>
                    </div>
                </div>
              <div className="header__container px-30 sm:px-20">

                <div className="">

                  <div className="d-flex items-center justify-between">
                    <div className="">
                      <Link href="/" className="header-logo mr-20">
                        <img src="/img/general/logo-dark.svg" alt="logo icon" width="300px"/>
                        <img src="/img/general/logo-dark.svg" alt="logo icon" width="300px"/>
                      </Link>
                      {/* End logo */}


                      {/* End header-menu */}
                    </div>
                    <div className="header-menu justify-content-center">
                      <div className="header-menu__content justify-content-evenly d-flex">
                        <MainMenu style="text-dark-1"/>
                      </div>
                    </div>
                    <div className="">
                      <div className="d-flex items-center">

                        {/* End language and currency selector */}

                        {/* Start btn-group */}
                        <div className="d-flex items-center ml-20 is-menu-opened-hide xl:d-none">
                          <Link
                              href="/login"
                              className="button transparent-button   px-30 fw-400 text-18 -outline-blue-1 h-50 text-blue-1 ml-20"
                          >
                            Sign In / Register
                          </Link>
                        </div>
                        {/* End btn-group */}

                        {/* Start mobile menu icon */}
                        <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                          <div>
                            <Link
                                href="/login"
                                className="d-flex items-center icon-user text-inherit text-22"
                            />
                          </div>
                          <div>
                            <button
                                className="d-flex items-center icon-menu text-inherit text-20"
                                data-bs-toggle="offcanvas"
                                aria-controls="mobile-sidebar_menu"
                                data-bs-target="#mobile-sidebar_menu"
                            />

                            <div
                                className="offcanvas offcanvas-start  mobile_menu-contnet"
                                tabIndex="-1"
                                id="mobile-sidebar_menu"
                                aria-labelledby="offcanvasMenuLabel"
                                data-bs-scroll="true"
                            >
                              <MobileMenu/>
                              {/* End MobileMenu */}
                            </div>
                          </div>
                        </div>
                        {/* End mobile menu icon */}
                      </div>
                    </div>
                    {/* End d-flex */}
                  </div>
                  {/* End col */}


                  {/* End col-auto */}
                </div>

                {/* End .row */}
              </div>
              {/* End header_container */}
            </header>
        </>
    );
};

export default Header1;
