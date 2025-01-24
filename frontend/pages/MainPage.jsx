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
      <div className="z-50  dark:bg-[#282323]  fixed top-0 flex items-center w-full ">
        <Navbar />
      </div>
        <video src={"/herovid.mp4"} autoPlay loop muted  className="w-full h-screen object-cover z-0" />
      <div
        id="home"
        className="w-full h-screen flex justify-center  backdrop-blur-sm absolute top-0 left-0 z-0"
      >
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>

      <div id="team">
        <TeamOverview />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </Layout>
  );
};

export default MainPage;
