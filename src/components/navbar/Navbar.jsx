import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import contentoLogo from "../../assets/png/contentoo-logo.png";
import { pages } from "../../constants/pages";

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const location = useLocation();

  const currentPageIndex = pages.findIndex(
    (page) => page.path === location.pathname
  );

  const currentPage = pages[currentPageIndex] || pages[0];

  const pageNumber = `${currentPageIndex + 1}/${pages.length}`;
  const pageTitle = currentPage.title;

  return (
    <>
      <div className="pageWrapper">
        {/* TOP NAVBAR */}
        <div className="navbarWrapper">
          <div className="menuItems">
            <div className="menuIcon" onClick={() => setIsSideBarOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu-icon lucide-menu"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </div>

            <div className="pageNos">{pageNumber}</div>
            <div className="pageName">{pageTitle}</div>
          </div>

          <div className="logoClass">
            <img src={contentoLogo} alt="Contentoo logo" />
          </div>

          <div className="extraInfo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-stop-icon lucide-square-stop"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <rect x="9" y="9" width="6" height="6" rx="1" />
            </svg>
          </div>
        </div>

        {/* SIDE NAVBAR */}
        <div className={`sideNavbar ${isSideBarOpen ? "open" : ""}`}>
          {/* <div className="alignment" /> */}
          <div className="sideBarHeadingWrapper">
            <div></div>
            <div className="sideNavbarHeading">
              <h3>Pages</h3>
              <h3>Editions</h3>
            </div>

            <div className="closeIcon" onClick={() => setIsSideBarOpen(false)}>
              ✕
            </div>
          </div>
          <div className="sideNavbarContent">
            {pages.map((page) => (
              <NavLink
                key={page.id}
                to={page.path}
                className={({ isActive }) =>
                  `pageThumb ${isActive ? "active" : ""}`
                }
                onClick={() => setIsSideBarOpen(false)}
              >
                <div
                  className="thumbImage"
                  style={{ backgroundImage: `url(${page.image})` }}
                />

                <div className="thumbOverlay">
                  <span className="thumbIndex">{page.id}</span>
                  <span className="thumbTitle">{page.title}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
