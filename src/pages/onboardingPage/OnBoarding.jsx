import React, { useEffect, useState } from "react";
import "./OnBoarding.css";
import Navbar from "../../components/navbar/Navbar";
import PageFooterNav from "../../components/footerNav/PageFooterNav";
const OnBoarding = () => {
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
      <div className="onBoardingBg">
        <h2 className="onBoardingBgText">OnBoarding</h2>
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
          Bringing new content marketing talent into an organization poses a
          perennial challenge for managers and freelancers alike. There is much
          to cover, brand identity, tone of voice, and content strategy –
          including calendars and schedules – chief among them.
        </h3>

        <p>
          To effectively hit the ground running requires a “complete process
          during which employers and freelancers can set expectations and
          exchange information before working together,” according to an
          Entrepreneur article on the subject. “Business owners who assume that
          freelancers understand their unique needs force those freelancers to
          make assumptions of their own, many of which might not be accurate.
          Gathering the necessary data to make the most of a freelancer’s work
          might seem inconvenient now, but the better the foundation, the better
          the results.”
        </p>

        <p>
          Our findings yield similar results, with managers responding that
          onboarding calls (73%), briefings for future assignments (67%), and
          tone of voice documents (65%) are of utmost importance for freelancers
          who are starting work for a new client. They also prefer remote
          working, with in-person meetings only happening in 27% of all new
          onboardings.
        </p>
      </div>

      <PageFooterNav
        backLabel="Introduction"
        backTo="/introduction"
        nextLabel="Team Building"
        nextTo="/team-building"
      />
    </>
  );
};

export default OnBoarding;
