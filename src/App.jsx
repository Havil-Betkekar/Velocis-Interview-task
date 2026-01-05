import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcomePage/Welcome";
import Content from "./pages/contentsPage/Content";
import Introduction from "./pages/introductionPage/Introduction";
import OnBoarding from "./pages/onboardingPage/OnBoarding";
import TeamBuilding from "./pages/teambuildingPage/TeamBuilding";
import DrivingSuccess from "./pages/drivingsuccessPage/DrivingSuccess";
import PainPHappySurprises from "./pages/surprisesPage/PainPHappySurprises";
import Conclusion from "./pages/conclusionPage/Conclusion";
import ThankYou from "./pages/thankyouPage/ThankYou";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/contents" element={<Content />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/team-building" element={<TeamBuilding />} />
        <Route path="/driving-success" element={<DrivingSuccess />} />
        <Route
          path="/pain-point-happy-surprises"
          element={<PainPHappySurprises />}
        />
        <Route path="/conclusion" element={<Conclusion />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
};

export default App;
