import React from "react";
import "./PainPHappySurprises.css";
import PageFooterNav from "../../components/footerNav/PageFooterNav";
import Navbar from "../../components/navbar/Navbar";

const PainPHappySurprises = () => {
  return (
    <>
      <>
        <Navbar />
        <div></div>

        <PageFooterNav
          backLabel="Driving Success"
          backTo="/driving-success"
          nextLabel="Conclusion"
          nextTo="/conclusion"
        />
      </>
    </>
  );
};

export default PainPHappySurprises;
