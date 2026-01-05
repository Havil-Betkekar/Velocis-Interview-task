import React from "react";
import "./TeamBuilding.css";
import Navbar from "../../components/navbar/Navbar";
import PageFooterNav from "../../components/footerNav/PageFooterNav";
const TeamBuilding = () => {
  return (
    <>
      <Navbar />
      <div className="teamBuildBg">
        <h2 className="teamBuildBgText">Team-Building</h2>
      </div>

      <PageFooterNav
        backLabel="Onboarding"
        backTo="/onboarding"
        nextLabel="Driving Success"
        nextTo="/driving-success"
      />
    </>
  );
};

export default TeamBuilding;
