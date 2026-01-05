import React from "react";
import { Link } from "react-router-dom";
import "./PageFooterNav.css";

const PageFooterNav = ({ backLabel, backTo, nextLabel, nextTo }) => {
  return (
    <div className="pageFooterNav">
      <Link to={backTo} className="footerLeft">
        {backLabel}{" "}
        <span className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevrons-left-icon lucide-chevrons-left"
          >
            <path d="m11 17-5-5 5-5" />
            <path d="m18 17-5-5 5-5" />
          </svg>
        </span>{" "}
        <span className="yellowColor">Back</span>
      </Link>

      <Link to={nextTo} className="footerRight">
        <span className="blackColor">Next page</span>
        <span className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevrons-right-icon lucide-chevrons-right"
          >
            <path d="m6 17 5-5-5-5" />
            <path d="m13 17 5-5-5-5" />
          </svg>
        </span>{" "}
        <span className="nextLabelColor">
          <strong>{nextLabel}</strong>
        </span>
      </Link>
    </div>
  );
};

export default PageFooterNav;
