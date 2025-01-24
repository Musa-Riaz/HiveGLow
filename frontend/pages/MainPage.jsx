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
            <div className="z-50  dark:bg-[#282323]  fixed top-0 flex items-center w-full  ">
                <Navbar />
            </div>
            <div
                id="home"
                className="relative flex flex-col items-center justify-center text-center gap-y-8 flex-1 min-h-screen px-6 pb-10 "
                style={{ backgroundImage: "url('/image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="absolute inset-0 bg-black opacity-80  z-0"></div>

                <div className="relative z-10 ">
                    <Hero />
                </div>
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
