import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Content.css";
import { NavLink } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Navbar />
      <div className="contenPageWrapper">
        {/*  */}
        <div className="contentLeft">
          <h1 className="contentTitle">Contents</h1>

          <div className="contentGrid">
            <NavLink to="/introduction" className="contentItem">
              <span className="contentNumber">1</span>
              <span className="contentLabel">Introduction</span>
            </NavLink>

            <NavLink to="/onboarding" className="contentItem">
              <span className="contentNumber">2</span>
              <span className="contentLabel">Onboarding</span>
            </NavLink>

            <NavLink to="/team-building" className="contentItem">
              <span className="contentNumber">3</span>
              <span className="contentLabel">Team-building</span>
            </NavLink>

            <NavLink to="/driving-success" className="contentItem">
              <span className="contentNumber">4</span>
              <span className="contentLabel">Driving success</span>
            </NavLink>

            <NavLink to="/pain-point-happy-surprises" className="contentItem">
              <span className="contentNumber">5</span>
              <span className="contentLabel">
                Pain points and <br /> happy surprises
              </span>
            </NavLink>

            <NavLink to="/conclusion" className="contentItem">
              <span className="contentNumber">6</span>
              <span className="contentLabel">Conclusion</span>
            </NavLink>
          </div>
        </div>
        {/*  */}
        <div className="contentRight" />
      </div>
    </>
  );
};

export default Content;
