"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../components/theme/ThemeContext";
import p1 from "../assets/project/p1.png";
let p2, p3

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Refs for the card elements
  const cardRefs = useRef([]);

  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: "BillStack",
      description:
        "BillStack is an all-in-one platform that streamlines billing, inventory, customer management, and reporting for businesses. It centralizes operations in a single dashboard, saving time and enabling data-driven decisions.",
      image: p1, // Updated to use local image
      tags: ["React", "Node", "API", "NodeMailer"],
      liveUrl: "https://www.billstack.me/",
    },
    
  ];

  // Handle 3D card effect
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Adjust these values to control the tilt intensity
    const rotateY = ((x - centerX) / centerX) * 10; // max 10 degrees
    const rotateX = ((centerY - y) / centerY) * 10; // max 10 degrees

    // Apply the transform
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;

    // Add a subtle shadow effect
    card.style.boxShadow = `0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)`;

    // Make sure the content inside also gets the 3D effect
    const content = card.querySelector(".card-content");
    if (content instanceof HTMLElement) {
      if (content) {
        content.style.transform = `translateZ(40px)`;
      }
    }
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    // Reset the transform and shadow
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";

    // Reset the content transform
    const content = card.querySelector(".card-content");
    if (content) {
      content.style.transform = "translateZ(0)";
    }
  };

  const nextSlide = () => {
    if (!isAnimating && !showAllProjects) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && !showAllProjects) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Calculate visible projects based on current index or show all
  const getVisibleProjects = () => {
    if (showAllProjects) {
      return projects;
    }

    const visibleProjects = [];
    for (let i = 0; i < Math.min(4, projects.length); i++) {
      const index = (currentIndex + i) % projects.length;
      visibleProjects.push(projects[index]);
    }
    return visibleProjects;
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  // Reset card refs when visible projects change
  useEffect(() => {
    cardRefs.current = Array(getVisibleProjects().length)
      .fill(null)
      .map((_, i) => cardRefs.current[i] || null);
  }, [showAllProjects, currentIndex]);

  return (
    <div className={`w-full min-h-screen px-2 sm:px-4 md:px-8 lg:px-16 transition-colors duration-300 ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}>
      <div className={`max-w-7xl mx-auto rounded-3xl shadow-xl overflow-hidden border ${theme === "dark" ? "bg-gray-900/50 border-gray-700/50" : "bg-white/50 border-gray-200/50"}`}>
        <div className="py-8 sm:py-10 md:py-12 px-2 sm:px-6 md:px-12">
          {/* Projects Header */}
          <div className="text-center mb-12">
            <h2 className={`text-5xl md:text-6xl font-bold mb-8 text-center tracking-tight ${theme === "dark" ? "text-white" : "text-black"}`}>
              Projects
            </h2>
            <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Witness the beauty of design through my portfolio, as I showcase
              stunning projects that demonstrate creativity and technical
              expertise.
            </p>
          </div>

          {/* Navigation Arrows - Only show when not showing all projects */}
          {!showAllProjects && (
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={prevSlide}
                className="text-3xl hover:scale-110 transition-transform"
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="text-3xl hover:scale-110 transition-transform"
                aria-label="Next project"
              >
                →
              </button>
            </div>
          )}

          {/* Projects Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              showAllProjects ? "lg:grid-cols-3" : "lg:grid-cols-3 xl:grid-cols-4"
            } gap-4 sm:gap-6 transition-all duration-700 ease-in-out ${
              showAllProjects ? "opacity-100" : ""
            }`}
          >
            {getVisibleProjects().map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`relative overflow-hidden rounded-3xl transition-all duration-300 ease-out group w-full ${typeof window !== 'undefined' && window.innerWidth > 768 ? 'touch-none' : ''} h-60 sm:h-80 md:h-[400px] lg:h-[450px]`}
                style={{
                  animation:
                    showAllProjects && index > 3
                      ? 'fadeIn 0.5s ease-in-out forwards'
                      : 'none',
                  animationDelay:
                    showAllProjects && index >= 3
                      ? `${(index - 3) * 0.1}s`
                      : '0s',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                }}
                onMouseMove={(e) => window.innerWidth > 768 && handleMouseMove(e, index)}
                onMouseLeave={() => window.innerWidth > 768 && handleMouseLeave(index)}
                onTouchStart={() => {
                  const card = cardRefs.current[index];
                  if (card && window.innerWidth <= 768) {
                    card.style.transform = 'scale3d(0.98, 0.98, 1)';
                  }
                }}
                onTouchEnd={() => {
                  const card = cardRefs.current[index];
                  if (card && window.innerWidth <= 768) {
                    card.style.transform = 'scale3d(1, 1, 1)';
                  }
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 w-full"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Overlay for text visibility */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 card-content
                    sm:from-black/80 sm:via-black/40 
                    md:opacity-0 opacity-100 md:group-hover:opacity-100"
                >
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white dark:text-gray-200 w-full">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-white/80 dark:bg-gray-800/80 bg-opacity-30 text-black dark:text-gray-200 font-semibold text-xs px-2 sm:px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Live View and GitHub buttons */}
                    <div className="flex gap-2 sm:gap-3 flex-wrap">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors ${theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}
                      >
                        Live View
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors ${theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-800 text-white hover:bg-gray-700"}`}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={toggleShowAllProjects}
              className={`px-8 py-3 rounded-full flex items-center gap-2 transition-colors ${theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}
            >
              {showAllProjects ? "Show Less" : "View All Projects"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${
                  showAllProjects ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Add CSS animation for fade-in effect */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;
