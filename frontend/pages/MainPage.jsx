import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamOverview from "@/components/TeamOverview";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectSection from "@/components/ProjectSection";

const MainPage = () => {
  return (
    <Layout>
      <div className="z-50  bg-background  bg-opacity-80  dark:bg-[#282323]  fixed top-0 flex items-center w-full     ">
        <Navbar />
      </div>
      <div className="flex flex-col items-center text-center gap-y-8 flex-1 min-h-screen px-6 pb-10 bg-gradient-to-r from-yellow-300 to-fuchsia-400 ">
        <Hero />
      </div>
        <About />
				<Services />
				<ProjectSection />
      <div >
        <TeamOverview />
      </div>
      <div>
        <Contact />
      </div>
      <Footer />
    </Layout>
  );
};

export default MainPage;
