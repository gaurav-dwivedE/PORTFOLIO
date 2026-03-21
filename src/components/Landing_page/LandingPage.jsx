"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LandingPage() {
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const buttonRef = useRef(null)
  const containerRef = useRef(null)

  const greetings = ["Hello", "नमस्ते", "こんにちは", "안녕하세요", "你好"];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (currentTextIndex < greetings.length - 1) {
      // Each greeting shows for 1.5 seconds (6 seconds total for 4 greetings)
      const timePerGreeting = 1500

      const timer = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1)
      }, timePerGreeting)

      // Show button during the second greeting
      if (currentTextIndex === 1 && !showButton) {
        setShowButton(true)
      }

      return () => clearTimeout(timer)
    }
  }, [currentTextIndex, greetings.length, showButton])

  // Enhanced magnetic button effect with performance optimizations
  useEffect(() => {
    const button = buttonRef.current
    const container = containerRef.current
    if (!button || !container || !showButton) return

    let rafId = null
    let lastX = 0
    let lastY = 0

    const handleMouseMove = (e) => {
      lastX = e.clientX
      lastY = e.clientY

      if (!rafId) {
        rafId = requestAnimationFrame(updateButtonPosition)
      }
    }

    const updateButtonPosition = () => {
      const rect = container.getBoundingClientRect()
      const x = lastX - rect.left
      const y = lastY - rect.top

      const buttonRect = button.getBoundingClientRect()
      const buttonX = buttonRect.left - rect.left + buttonRect.width / 2
      const buttonY = buttonRect.top - rect.top + buttonRect.height / 2

      const deltaX = x - buttonX
      const deltaY = y - buttonY

      // Calculate distance
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

      // Maximum movement range
      const maxRange = 60 // Reduced from 70

      // Calculate movement based on distance (closer = stronger effect)
      const strength = Math.min(maxRange / (distance + 40), 0.9) // Reduced from 1.2, increased distance threshold

      // Apply movement
      const moveX = deltaX * strength * 0.4 // Reduced from 0.5
      const moveY = deltaY * strength * 0.4 // Reduced from 0.5

      button.style.transform = `translate(${moveX}px, ${moveY}px)`

      rafId = null
    }

    const handleMouseLeave = () => {
      button.style.transform = "translate(0, 0)"
      button.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)"
      cancelAnimationFrame(rafId)
      rafId = null
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(rafId)
    }
  }, [showButton])

  const handleEnter = () => {
    setIsExiting(true)
    setTimeout(() => {
      window.location.href = "/home" // Using window.location for Next.js
    }, 800)
  }

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015, // Adjusted for better clarity
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
  }

  // Split text into characters for animation
  const splitText = (text) => {
    return Array.from(text).map((char, i) => (
      <motion.span
        key={i}
        variants={{
          hidden: {
            y: 50,
            opacity: 0,
            rotateX: -40,
            scale: 0.8,
          },
          visible: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,              transition: {
              type: "spring",
              damping: 28,
              stiffness: 280,
              duration: 0.5, // Adjusted for better clarity
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          },
        }}
        className="inline-block"
        style={{
          transformOrigin: "bottom center",
          textShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        {char}
      </motion.span>
    ))
  }

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Optimized background elements with will-change for better performance */}
      <div
        className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-gray-100 to-white opacity-40"
        style={{
          transform: `translateX(${scrollPosition * 0.1}px)`,
          willChange: "transform",
        }}
      ></div>

      <motion.div
        className="absolute top-[10%] left-[15%] w-40 h-40 bg-gradient-to-tr from-orange-300/60 to-orange-200/40 rounded-full opacity-90"
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{      duration: 4, // Reduced from 8
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[10%] w-60 h-60 bg-gradient-to-bl from-gray-300/50 to-gray-200/30 rounded-full opacity-80"
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      ></motion.div>

      <motion.div
        className="absolute top-[50%] left-[30%] w-24 h-24 bg-gradient-to-tr from-orange-400/60 to-orange-300/40 rounded-full opacity-85"
        animate={{
          x: [0, 20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      ></motion.div>

      <div className="h-32 flex items-center justify-center perspective z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex justify-center"
            style={{
              fontFamily:
                currentTextIndex === 0
                  ? "'Noto Sans SC', sans-serif"
                  : currentTextIndex === 2
                    ? "'Noto Sans Devanagari', sans-serif"
                    : currentTextIndex === 4
                      ? "'Noto Sans', sans-serif"
                      : currentTextIndex === 6
                        ? "'Noto Sans JP', sans-serif"
                        : currentTextIndex === 7
                          ? "'Noto Sans KR', sans-serif"
                          : "'Inter', sans-serif",
            }}
          >
            <h1            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">{splitText(greetings[currentTextIndex])}</h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {showButton && (
        <motion.div
          ref={buttonRef}
          className="mt-16 z-10"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 500, // Increased from 300
            damping: 35, // Increased from 25
            delay: 0, // Removed delay
          }}
          style={{
            transition: "transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
            willChange: "transform",
          }}
        >
          <button
            onClick={handleEnter}
            className="relative px-10 py-4 text-lg font-medium text-white bg-black rounded-full group overflow-hidden"
          >
            {/* Button content */}
            <span className="relative z-10">Amaze me</span>

            {/* Gradient overlay with smoother transition */}
            <span className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

            {/* Bottom highlight */}
            <span className="absolute -inset-x-1 bottom-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500"></span>

            {/* Glow effect */}
            <span
              className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.3)" }}
            ></span>

            {/* Hover shadow */}
            <motion.span
              className="absolute inset-0 bg-black rounded-full"
              initial={false}
              whileHover={{
                boxShadow: "0 0 25px 2px rgba(0,0,0,0.4)",
              }}
            />
          </button>
        </motion.div>
      )}
    </motion.div>
  )
}
