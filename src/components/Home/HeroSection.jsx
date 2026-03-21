"use client";

import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { VerticalCarousel } from "./Carousel";
import { useTheme } from "../theme/ThemeContext";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
// pulsestack
import p1 from "../../assets/project/p1.jpg";
import p12 from "../../assets/project/p1.2.jpg";
import p11 from "../../assets/project/p1.1.jpg";
// whiplash
import p2 from "../../assets/project/p2.1.jpg";
import p22 from "../../assets/project/p2.2.jpg";
import p23 from "../../assets/project/p2.3.jpg";
// Handebook
import p3 from "../../assets/project/p3.2.jpg";
// import p31 from "../../assets/project/p3.1.jpg";
import p33 from "../../assets/project/p3.3.jpg";

// Quotes for the Inspire Me modal
const INSPIRATION_QUOTES = [
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    text: "Good design is obvious. Great design is transparent.",
    author: "Joe Sparano",
  },
  {
    text: "The details are not the details. They make the design.",
    author: "Charles Eames",
  },
];

// Mobile Menu Component
const MobileMenu = ({ theme, onClose }) => (
  <div
    className={`md:hidden fixed top-16 right-4 w-48 rounded-lg shadow-lg py-2 z-50 ${
      theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
    } backdrop-blur-sm`}
  >
    <a
      href="#about"
      onClick={onClose}
      className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
        theme === "dark" ? "text-gray-200" : "text-gray-700"
      }`}
    >
      About
    </a>
    <a
      href="#skills"
      onClick={onClose}
      className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
        theme === "dark" ? "text-gray-200" : "text-gray-700"
      }`}
    >
      Skills
    </a>
    <a
      href="#projects"
      onClick={onClose}
      className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
        theme === "dark" ? "text-gray-200" : "text-gray-700"
      }`}
    >
      Projects
    </a>
    <a
      href="#contact"
      onClick={onClose}
      className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
        theme === "dark" ? "text-gray-200" : "text-gray-700"
      }`}
    >
      Contact
    </a>
  </div>
);

const InspireMeModal = ({ open, onClose }) => {
  const [index, setIndex] = useState(0);

  // Scroll handler for roller effect
  useEffect(() => {
    if (!open) return;
    const handleWheel = (e) => {
      if (e.deltaY > 0)
        setIndex((prev) => (prev + 1) % INSPIRATION_QUOTES.length);
      else if (e.deltaY < 0)
        setIndex(
          (prev) =>
            (prev - 1 + INSPIRATION_QUOTES.length) % INSPIRATION_QUOTES.length,
        );
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [open]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex flex-col items-center min-h-[180px] justify-center">
          <div className="transition-all duration-300 ease-in-out text-center">
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              “{INSPIRATION_QUOTES[index].text}”
            </p>
            <p className="text-base text-gray-500">
              — {INSPIRATION_QUOTES[index].author}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-6">
          <button
            className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            onClick={() =>
              setIndex(
                (prev) =>
                  (prev - 1 + INSPIRATION_QUOTES.length) %
                  INSPIRATION_QUOTES.length,
              )
            }
            aria-label="Previous"
          >
            ↑
          </button>
          <button
            className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            onClick={() =>
              setIndex((prev) => (prev + 1) % INSPIRATION_QUOTES.length)
            }
            aria-label="Next"
          >
            ↓
          </button>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Scroll or use ↑ ↓ to explore more inspiration
        </p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInspire, setShowInspire] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`relative w-full h-screen overflow-hidden transition-colors duration-300 ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}
    >
      {/* Background elements - positioned behind content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className={`absolute bottom-20 right-20 w-72 h-72 rounded-full bg-gradient-to-tr ${theme === "dark" ? "from-orange-700/40 to-orange-900/20" : "from-orange-500/40 to-orange-500/20"}`}
          style={{
            transform: `translate(${scrollPosition * 0.05}px, ${-scrollPosition * 0.05}px)`,
          }}
        ></div>
        <div
          className={`absolute top-10 left-10 w-48 h-48 rounded-full bg-gradient-to-tr ${theme === "dark" ? "from-orange-700/40 to-orange-900/20" : "from-orange-500/40 to-orange-500/20"}`}
          style={{
            transform: `translate(${scrollPosition * 0.03}px, ${scrollPosition * 0.02}px)`,
          }}
        ></div>
        <div
          className={`absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr ${theme === "dark" ? "from-orange-700/40 to-orange-900/20" : "from-orange-500/40 to-orange-500/20"}`}
          style={{
            transform: `translate(${scrollPosition * 0.04}px, ${scrollPosition * 0.01}px)`,
          }}
        ></div>
        <div
          className={`absolute bottom-1/2 right-1/6 w-52 h-52 rounded-full bg-gradient-to-tr ${theme === "dark" ? "from-pink-700/40 to-pink-900/20" : "from-pink-400/40 to-pink-400/20"}`}
          style={{
            transform: `translate(${scrollPosition * -0.05}px, ${scrollPosition * 0.04}px)`,
          }}
        ></div>

        {/* Additional bubbles for visual balance */}
        <div
          className="absolute top-1/4 left-1/5 w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-400/40 to-yellow-400/20"
          style={{
            transform: `translate(${scrollPosition * 0.06}px, ${scrollPosition * -0.03}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/2 right-1/6 w-52 h-52 rounded-full bg-gradient-to-tr from-pink-400/40 to-pink-400/20"
          style={{
            transform: `translate(${scrollPosition * -0.05}px, ${scrollPosition * 0.04}px)`,
          }}
        ></div>
      </div>

      {/* Floating Navbar */}
      <nav
        className={`absolute top-2 left-0 right-0 z-50 py-3 px-6 md:px-10 rounded-full flex items-center justify-between w-[95%] max-w-6xl mx-auto transition-transform duration-300 shadow-lg backdrop-blur-lg
        ${theme === "dark" ? "bg-gray-900/90" : "bg-white/90"}`}
      >
        {/* Logo */}
        <a
          href="#"
          className={`text-xl font-bold transition-colors duration-300 hover:text-black dark:hover:text-orange-400 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          G.
        </a>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
            <a
              href="#about"
              className={`transition-colors duration-300 ${theme === "dark" ? "text-gray-200 hover:text-orange-400" : "text-gray-700 hover:text-gray-900"}`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`transition-colors duration-300 ${theme === "dark" ? "text-gray-200 hover:text-orange-400" : "text-gray-700 hover:text-gray-900"}`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`transition-colors duration-300 ${theme === "dark" ? "text-gray-200 hover:text-orange-400" : "text-gray-700 hover:text-gray-900"}`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`transition-colors duration-300 ${theme === "dark" ? "text-gray-200 hover:text-orange-400" : "text-gray-700 hover:text-gray-900"}`}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Switch UI toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 transition-colors duration-300"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-5 peer-checked:bg-gray-900"></div>
            <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 select-none">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </label>
          <a
            href="/resume"
            className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform duration-300 hover:scale-110"
          >
            Resume
          </a>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${theme === "dark" ? "text-white" : "text-black"}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <MobileMenu theme={theme} onClose={() => setMenuOpen(false)} />
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center max-w-xl mx-auto h-full relative z-10">
        <div className="space-y-4 pt-20">
          <h1 className="text-4xl md:text-5xl font-serif">
            I'm <span className="italic text-gray-500">Gaurav</span>{" "}
            <div
              className="inline-block rounded-[20px] border-[2px] border-black shadow-2xl overflow-hidden"
              style={{ width: 90, height: 60 }}
            >
              <Carousel images={[c1, c2, c3, c4]} />
            </div>
          </h1>

          <h2 className="text-4xl md:text-5xl font-serif">
            a Software{" "}
            <span className="relative inline-block">
              <div
                className="inline-block rounded-[20px] border-[2px] border-black shadow-2xl overflow-hidden"
                style={{ width: 90, height: 60 }}
              >
                <VerticalCarousel
                  images={[p1, p12, p11, p2, p22, p23, p3, p33]}
                />
              </div>
            </span>{" "}
            <span className="italic text-gray-500">Developer</span>
          </h2>

          <h2 className="text-4xl md:text-5xl font-serif">
            based in India{" "}
            <span className="relative inline-block">
              <div
                className="inline-block rounded-[20px] border-[2px] border-black shadow-2xl overflow-hidden"
                style={{ width: 90, height: 60 }}
              >
                <Carousel
                  images={[
                    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Taj Mahal
                    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // Jaipur
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80", // Mumbai
                  ]}
                />
              </div>
            </span>
          </h2>
        </div>

        <p className="text-lg text-gray-500 mt-8 max-w-md">
          I specialize in backend development, building scalable APIs and efficient server-side systems.
        </p>

        <button
          className="mt-8 bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition relative z-20"
          onClick={() => setShowInspire(true)}
        >
          Inspire Me
        </button>
        <InspireMeModal
          open={showInspire}
          onClose={() => setShowInspire(false)}
        />
      </main>
    </section>
  );
};

export default HeroSection;
