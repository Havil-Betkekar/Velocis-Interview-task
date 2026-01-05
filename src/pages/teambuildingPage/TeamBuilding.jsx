import React, { useEffect, useState } from "react";
import "./TeamBuilding.css";
import Navbar from "../../components/navbar/Navbar";
import PageFooterNav from "../../components/footerNav/PageFooterNav";
const TeamBuilding = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setShowUpArrow(scrollY > maxScroll * 0.6);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(true), 400);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Navbar />
      <div className="teamBuildBg">
        <h2 className="teamBuildBgText">Team-Building</h2>
      </div>
      {/* Arrow sections */}
      {showArrow && !showUpArrow && (
        <div className="scrollArrow down" onClick={scrollToBottom}>
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
            class="lucide lucide-chevrons-down-icon lucide-chevrons-down"
          >
            <path d="m7 6 5 5 5-5" />
            <path d="m7 13 5 5 5-5" />
          </svg>
        </div>
      )}

      {showUpArrow && (
        <div className="scrollArrow up" onClick={scrollToTop}>
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
            class="lucide lucide-chevrons-up-icon lucide-chevrons-up"
          >
            <path d="m17 11-5-5-5 5" />
            <path d="m17 18-5-5-5 5" />
          </svg>
        </div>
      )}

      {/* Arrow sections */}

      <div className="introTextSection">
        <h3>
          Once you have found the right freelancers and onboarded them to your
          organization, it’s time to begin putting together functional teams.
        </h3>

        <p>
          Typically, our research finds, these teams will consist of both
          in-house and freelance talent, although exact ratios often depend on
          company size, with 49% of smaller companies (those consisting of 100
          or fewer employees) predominantly relying on freelance talent.
          Meanwhile, 70% of larger companies (those consisting of 100 or more
          employees) incorporate a mix of in-house and freelance talent to meet
          their content needs.
        </p>

        <p>
          Unsurprisingly, the number of content creators used by organizations
          is directly proportional to company size: the larger the company, the
          higher the content production – and a higher number of content
          creators needed to create it. The main challenge here, however, is
          sourcing that talent.
        </p>
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
