import React from "react";
import "./DrivingSuccess.css";
import Navbar from "../../components/navbar/Navbar";
import PageFooterNav from "../../components/footerNav/PageFooterNav";

const DrivingSuccess = () => {
  return (
    <>
      <Navbar />
      <div></div>

      <PageFooterNav
        backLabel="Team Building"
        backTo="/team-building"
        nextLabel="Pain points"
        nextTo="/pain-point-happy-surprises"
      />
    </>
  );
};

export default DrivingSuccess;
