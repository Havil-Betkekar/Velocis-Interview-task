import React from "react";
import Navbar from "../../components/navbar/Navbar";
import PageFooterNav from "../../components/footerNav/PageFooterNav";

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <div></div>

      <PageFooterNav backLabel="Conclusion" backTo="/conclusion" />
    </>
  );
};

export default ThankYou;
