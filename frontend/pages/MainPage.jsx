import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectSection from "@/components/ProjectSection";

const MainPage = () => {
	return (
		<Layout>
			<div
				className="z-50  bg-background bg-opacity-80  dark:bg-[#282323]  fixed top-0 flex items-center w-full     "
			>

				<Navbar />
			</div>
			<div className="flex flex-col items-center text-center gap-y-8 flex-1 min-h-screen px-6 pb-10 bg-cover bg-center text-white">
				<Hero />
				<About />
				<Services />
				<ProjectSection />
			</div>
			<Footer />
		</Layout >
	);
};

export default MainPage;
