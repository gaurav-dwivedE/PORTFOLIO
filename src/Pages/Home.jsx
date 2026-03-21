// import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/HeroSection";
import TerminalSkillsSection from "./Skills";
import ContactMe from "./contact_me";
import WhoAmI from "../Pages/about_page";
import ProjectsSection from "./ProjectsSection";
import React from "react";

export default function Home() {
  return (
    <div>
      <div id="home" className="flex flex-col min-h-screen bg-primary">
        <Hero />
      </div>
      <div id="about">
        <WhoAmI />
      </div>
      <div id="skills">
        <TerminalSkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  );
}