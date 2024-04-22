"use client";

import Link from "next/link";

import {

  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  companyItems,
  categorieMegaMenuItemsNepal,
  resourcesItems, dealsItems, activityItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,

} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {toursPackageData} from "@/data/tourPackages";
import {trekPackageData} from "@/data/trekPackages";
import TrekPackagesMobile from "@/components/header/TrekPackagesMobile";
import TourPackagesMobile from "@/components/header/TourPackagesMobile";
import TripStylesMobile from "@/components/header/TripStylesMobile";

const MobileMenu = () => {
  const pathname = usePathname();

  const [isActiveParent, setIsActiveParent] = useState(false)
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false)
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false)

  const router = useRouter()

   useEffect(() => {

    categorieMegaMenuItemsNepal.map((megaMenu=>{
    megaMenu?.menuCol?.map((megaCol=>{
      megaCol?.menuItems?.map((item=>{   
        item?.menuList?.map((list)=>{
          if (list.routePath?.split('/')[1] == pathname.split('/')[1]) {
            setIsActiveParent(true)
            setisActiveNestedParentTwo(item?.title)
            setisActiveNestedParent(megaMenu?.id)           
          }        
        })
      }))
    }))
  }))


   
 }, [])

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/logo-dark.svg" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

    
        <Sidebar width="400" backgroundColor="#fff">

          <Menu>
         
            {/* End  All Home Menu */}
            <MenuItem
             onClick={()=>router.push("/")}
             className={
              pathname === "/"
                ? "menu-active-link"
                : ""
            }
              
            >
              Home
            </MenuItem>

            <SubMenu label="Treks">


                  <div className="mega px-20">
                      <TrekPackagesMobile setIsActiveParent={setIsActiveParent}/>
                  </div>



            </SubMenu>
              <SubMenu label="Tours">


                  <div className="mega px-20">
                      <TourPackagesMobile setIsActiveParent={setIsActiveParent}/>
                  </div>



              </SubMenu>
              <SubMenu label="Trip Styles">


                  <div className="px-20 mega-mobile">
                      <TripStylesMobile setIsActiveParent={setIsActiveParent}/>
                  </div>



              </SubMenu>






            {/* End  Desitinations Menu */}
{/*
            <SubMenu label="Blog" className={ blogItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {blogItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu> */}
            {/* End  All Blog Menu */}
            <SubMenu label="Deals" className={ dealsItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {dealsItems.map((item, i) => (
                  <MenuItem
                      key={i}
                      onClick={()=>router.push(item.routePath)}
                      className={
                        isActiveLink(item.routePath, pathname)
                            ? "menu-active-link"
                            : "inactive-menu"
                      }
                  >
                    {item.name}
                  </MenuItem>
              ))}
            </SubMenu>
            <SubMenu label="Activities" className={ activityItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {activityItems.map((item, i) => (
                  <MenuItem
                      key={i}
                      onClick={()=>router.push(item.routePath)}
                      className={
                        isActiveLink(item.routePath, pathname)
                            ? "menu-active-link"
                            : "inactive-menu"
                      }
                  >
                    {item.name}
                  </MenuItem>
              ))}
            </SubMenu>

            <MenuItem
                onClick={()=>router.push("/tour-calendar")}
                className={
                  pathname === "/tour-calendar"
                      ? "menu-active-link"
                      : ""
                }

            >
              Tour Calendar
            </MenuItem>

            <SubMenu label="Company" className={ companyItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {companyItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            <SubMenu label="Resources" className={ resourcesItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {resourcesItems.map((item, i) => (
                  <MenuItem
                      key={i}
                      onClick={()=>router.push(item.routePath)}
                      className={
                        isActiveLink(item.routePath, pathname)
                            ? "menu-active-link"
                            : "inactive-menu"
                      }
                  >
                    {item.name}
                  </MenuItem>
              ))}
            </SubMenu>
            {/* End  All Pages Menu */}

            {/* <SubMenu label="Dashboard" className={ pathname.split('/')[1] == 'dashboard'  || pathname.split('/')[1] == 'vendor-dashboard' ? "menu-active-link":''}>
              {dashboardItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu> */}
            {/* End  All Dashboard Menu */}

            {/*<MenuItem*/}
            {/* onClick={()=>router.push("/")}*/}
            {/* className={*/}
            {/*  pathname === "/" ? "menu-active-link" : ""*/}
            {/*}*/}
            {/* */}
            {/*>*/}
            {/*  Contact*/}
            {/*</MenuItem>*/}
            {/* End Contact  Menu */}
          </Menu>
        </Sidebar>



      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center text-white">
            <Social />
          </div>
        </div>
        <div className="mt-20">
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            href="/"
          >
            Login
          </Link>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};


export default MobileMenu;
