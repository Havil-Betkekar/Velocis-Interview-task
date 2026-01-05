import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Introduction.css";
import { Link } from "react-router-dom";
import ManagerDemographicsPieCharts from "../../components/charts/managerDemographicsPieCharts";
import PieChartFromData from "../../components/charts/PieChartFromData";
import DonutPieChart from "../../components/charts/DonutPieChart";
import PercentageCircles from "../../components/charts/PercentageCircles";
import PageFooterNav from "../../components/footerNav/PageFooterNav";

const data = [
  { name: "Other Administrative Services", value: 75.93 },
  { name: "Land Revenue", value: 60.25 },
  { name: "Stamps & Registration Fees", value: 2.62 },
];

const COLORS = ["#FFEB00", "#FFD600", "#E0E0E0"];

const Introduction = () => {
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
      <div className="introBgSection">
        <h2 className="bgText reveal delay-1">Introduction</h2>
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
        <h3 className="reveal delay-2">
          As we continue our journey to create content that inspires and
          elevates – and as a follow-up to our{" "}
          <a
            href="https://info.contentoo.com/report-content-creation-2022"
            target="_blank"
          >
            “State of Content Creation 2022”
          </a>
          report – we now shift our attention to international content teams,
          and the managers and content creators that comprise them.
        </h3>

        <p className="reveal delay-3">
          With the war on talent creating a more competitive landscape for
          employees, especially in a post-COVID environment, many employers are
          turning to on-demand talent, as well as platforms that support
          on-demand work. These platforms enable them to build teams of both
          freelance and in-house content creators. Integrating freelance talent
          into in-house teams, however, poses a number of challenges for both
          employers and freelancers. This is the foundation for our second
          report of 2022.
        </p>

        <p className="reveal delay-4">
          For this report, we have again focused on content marketing in the
          context of European startups and scale-ups, surveying 196 managers and
          165 freelancers from 31 countries across the continent.
        </p>
      </div>

      <ManagerDemographicsPieCharts />

      <h2 className="center reveal delay-1">PIE chart from the data shared</h2>
      <PieChartFromData />

      <div className="anotherTextSection">
        <div className="left"></div>
        <div className="middle">
          <p className="reveal delay-2">
            The questions contained within our survey targeted challenges
            content marketing managers and freelancers face, the successes they
            achieve, and the ways they best lead or work within teams that
            consist of both freelance and in-house talent.
          </p>
        </div>
        <div className="right">
          <p className="reveal delay-3">
            We have divided our findings into four categories (onboarding, team
            building, driving success, pain points & happy surprises), which we
            will examine in depth and reveal hard data you can use to better
            prepare yourself, your organization, and your teams for a future
            that places content centre-stage – and gives you a competitive edge
            for years to come.
          </p>
        </div>
      </div>

      {/*  */}

      <div className="receiptsWrapper">
        <DonutPieChart
          title="Receipts under Minor Head 800"
          data={data}
          colors={COLORS}
        />

        <PercentageCircles data={data} colors={COLORS} />
      </div>

      <PageFooterNav
        backLabel="Contents"
        backTo="/contents"
        nextLabel="Onboarding"
        nextTo="/onboarding"
      />
    </>
  );
};

export default Introduction;
