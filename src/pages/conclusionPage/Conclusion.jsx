import React from "react";
import Navbar from "../../components/navbar/Navbar";
import PageFooterNav from "../../components/footerNav/PageFooterNav";

const Conclusion = () => {
  return (
    <>
      <Navbar />
      <div></div>

      <PageFooterNav
        backLabel="Pain Points"
        backTo="/pain-point-happy-surprises"
        nextLabel="Thank You"
        nextTo="/thank-you"
      />
    </>
  );
};

export default Conclusion;
