import Link from "next/link";

import {
  activityItems,
  blogItems,
  companyItems, dealsItems, resourcesItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenuNepal from "./TrekPackages";
import TourPackages from "./TourPackages";
import TripStyles from "./TripStyles";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { usePathname } from "next/navigation";
import { useState } from "react";
import TrekPackages from "./TrekPackages";

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false)

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={pathname === "/" ? "current" : ""}>
          <Link href="/">Home</Link>
        </li>
        {/* End home page menu */}

        <li className={isActiveParent ? "menu-item-has-children -has-mega-menu current" : 'menu-item-has-children -has-mega-menu'}>
          <Link href="tour-packages/nepal">
            <span className="mr-10">Treks</span>
            <i className="icon icon-chevron-sm-down"/>
          </Link>
          <div className="mega">
            <TrekPackages setIsActiveParent={setIsActiveParent}/>
          </div>
        </li>
        <li className={isActiveParent ? "menu-item-has-children -has-mega-menu current" : 'menu-item-has-children -has-mega-menu'}>
          <Link href="/tour-packages/tibet">
            <span className="mr-10">Tours</span>
            <i className="icon icon-chevron-sm-down"/>
          </Link>
          <div className="mega">
            <TourPackages setIsActiveParent={setIsActiveParent}/>
          </div>
        </li>


        <li className={isActiveParent ? "menu-item-has-children -has-mega-menu current" : 'menu-item-has-children -has-mega-menu'}>
          <Link href="/tour-packages/bhutan">
            <span className="mr-10">Trip Style</span>
            <i className="icon icon-chevron-sm-down"/>
          </Link>
          <div className="mega">
            <TripStyles setIsActiveParent={setIsActiveParent}/>
          </div>
        </li>

        <li
            className={`${
                isActiveParentChaild(dealsItems, pathname) ? "current" : ""
            } menu-item-has-children`}
          >
          <Link href={"/about"}>
            <span className="mr-10">Deals</span>
            <i className="icon icon-chevron-sm-down"/>
          </Link>
          <ul className="subnav">
            {dealsItems.map((menu, i) => (
                <li
                    key={i}
                    className={
                      isActiveLink(menu.routePath, pathname) ? "current" : ""
                    }
                >
                  <Link href={menu.routePath}>{menu.name}</Link>
                </li>
            ))}
          </ul>
        </li>


        <li
            className={`${
                isActiveParentChaild(activityItems, pathname) ? "current" : ""
            } menu-item-has-children`}
        >
          <Link href={"/about"}>
            <span className="mr-10">Activities</span>
            <i className="icon icon-chevron-sm-down"/>
          </Link>
          <ul className="subnav">
            {activityItems.map((menu, i) => (
                <li
                    key={i}
                    className={
                      isActiveLink(menu.routePath, pathname) ? "current" : ""
                    }
                >
                  <Link href={menu.routePath}>{menu.name}</Link>
                </li>
            ))}
          </ul>
        </li>

        {/* End Destinatinos  menu */}


        <li className={pathname === "/joint-trek" ? "current" : ""}>
          <Link href={"/tour-calendar"}>Tour Calendar</Link>


        </li>
        {/* End blogIems */}

        <li
            className={`${
                isActiveParentChaild(companyItems, pathname) ? "current" : ""
            } menu-item-has-children`}
        >
          <Link href={"/about"}>
            <span className="mr-10">Company</span>
            <i className="icon icon-chevron-sm-down"/>
          </Link>
          <ul className="subnav">
            {companyItems.map((menu, i) => (
                <li
                    key={i}
                    className={
                      isActiveLink(menu.routePath, pathname) ? "current" : ""
                    }
                >
                  <Link href={menu.routePath}>{menu.name}</Link>
                </li>
            ))}
          </ul>
        </li>
        <li
            className={`${
                isActiveParentChaild(resourcesItems, pathname) ? "current" : ""
            } menu-item-has-children`}
        >
          <Link href={"/about"}>
            <span className="mr-10">Resources</span>
            <i className="icon icon-chevron-sm-down"/>
          </Link>
          <ul className="subnav">
            {resourcesItems.map((menu, i) => (
                <li
                    key={i}
                    className={
                      isActiveLink(menu.routePath, pathname) ? "current" : ""
                    }
                >
                  <Link href={menu.routePath}>{menu.name}</Link>
                </li>
            ))}
          </ul>
        </li>

        {/* End pages items */}

        {/* <li
          className={`${
            pathname.split('/')[1] == 'dashboard'  || pathname.split('/')[1] == 'vendor-dashboard' ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}

        {/*<li className={pathname === "/contact" ? "current" : ""}>*/}
        {/*  <Link href="/contact">Contact</Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
};

export default MainMenu;
