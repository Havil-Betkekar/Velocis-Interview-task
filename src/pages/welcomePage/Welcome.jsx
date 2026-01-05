import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Welcome.css";
import comboLogo from "../../assets/png/combo_logo.png";

const Welcome = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);
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
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setShowUpArrow(scrollPosition > pageHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <div className="homeWrapper">
          <div className="textSection">
            <h2>
              How modern <br />
              content marketing <br />
              teams thrive
            </h2>

            <p>
              We surveyed 350+ content marketers across Europe to learn what
              makes modern content marketing teams successful.
            </p>

            <p>Start reading</p>
            {/* log combinations */}
            <div className="logoComibnations">
              <img src={comboLogo} alt="" />
            </div>
          </div>

          <div className="sideImg"></div>
        </div>

        {!showUpArrow && (
          <div className="arrowBtn" onClick={scrollToBottom}>
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
              class="lucide lucide-chevron-down-icon lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        )}

        {showUpArrow && (
          <div className="arrowTop" onClick={scrollToTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default Welcome;
