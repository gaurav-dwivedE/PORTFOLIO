"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useTheme } from "../components/theme/ThemeContext"

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [typedText, setTypedText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [commandHistory, setCommandHistory] = useState([])
  const { theme } = useTheme()

  // Skills data with humorous descriptions
  const skills = [
    {
      name: "HTML",
      category: "Frontend",
      color: "#E34F26",
      icon: "🌐",
      tooltip: "Markup language for the web",
      snippet: `<!DOCTYPE html>
<html>
<head>
  <title>Hello World</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`,
      description: "HTML: Where every relationship starts with a good <head> and ends with a proper </body>.",
    },
    {
      name: "CSS",
      category: "Frontend",
      color: "#2965F1",
      icon: "🎨",
      tooltip: "Styling the web",
      snippet: `body {\n  background-color: lightblue;\n}`,
      description: "CSS: Where you spend 90% of your time fixing that one pixel!",
    },
     {
      name: "JavaScript",
      category: "Frontend",
      color: "#F7DF1E",
      icon: "📜",
      tooltip: "The language of the web",
      snippet: `console.log('Hello, World!');`,
      description: "JavaScript: The only language where 'undefined' is not a bug, it's a feature!",
    },
    {
      name: "React",
      category: "Frontend",
      color: "#61DAFB",
      icon: "⚛️",
      tooltip: "Component-based UI library",
      snippet: `function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
      description: "React: Because rebuilding the entire DOM was getting a bit awkward for everyone.",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      color: "#38B2AC",
      icon: "💨",
      tooltip: "Utility-first CSS framework",
      snippet: `<div className=\"bg-blue-500 text-white p-4 rounded\">Hello, World!</div>`,
      description: "Tailwind CSS: Writing CSS without actually writing CSS!",
    },
    {
      name: "Node.js",
      category: "Backend",
      color: "#339933",
      icon: "🟢",
      tooltip: "JavaScript runtime",
      snippet: `const http = require('http');\nhttp.createServer((req, res) => {\n  res.write('Hello, World!');\n  res.end();\n}).listen(8080);`,
      description: "Node.js: Turning JavaScript into a backend powerhouse since 2009!",
    },
    {
      name: "Express.js",
      category: "Backend",
      color: "#000000",
      icon: "🚀",
      tooltip: "Web framework for Node.js",
      snippet: `const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello, World!'));\napp.listen(3000);`,
      description: "Express.js: The minimalist framework that maximizes your productivity!",
    },
    {
      name: "MongoDB",
      category: "Database",
      color: "#47A248",
      icon: "🍃",
      tooltip: "NoSQL database",
      snippet: `db.collection('users').insertOne({ name: 'John Doe', age: 30 });`,
      description: "MongoDB: Where your data finds a flexible, JSON-shaped home!",
    },
    {
      name: "MySQL",
      category: "Database",
      color: "#336791",
      icon: "🐘",
      tooltip: "Relational database",
      snippet: `SELECT * FROM users WHERE age > 30;`,
      description: "MySQL: The elephant in the room that everyone loves!",
    },
    
    {
      name: "Python",
      category: "Backend",
      color: "#3776AB",
      icon: "🐍",
      tooltip: "General-purpose programming language",
      snippet: `print('Hello, World!')`,
      description: "Python: The language where whitespace is king and 'import antigravity' is a thing!",
    },
    {
      name: "Git",
      category: "Tools",
      color: "#F05032",
      icon: "🔧",
      tooltip: "Version control system",
      snippet: `git commit -m 'Initial commit'`,
      description: "Git: Because losing your code once is one time too many!",
    },
    {
      name: "Docker",
      category: "DevOps",
      color: "#2496ED",
      icon: "🐳",
      tooltip: "Containerization platform",
      snippet: `docker run hello-world`,
      description: "Docker: Because shipping code should be as easy as shipping containers!",
    },
  ]

  // Categories for filtering
  const categories = ["All", ...new Set(skills.map((skill) => skill.category))]

  // Filter skills based on category
  const filteredSkills = activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory)

  // Terminal typing effect
  useEffect(() => {
    if (selectedSkill) {
      const text = `> skill --info ${selectedSkill.name.toLowerCase()}\n\n${selectedSkill.description}\n\n> skill --code ${selectedSkill.name.toLowerCase()}\n`
      let i = 0
      setTypedText("")

      const typing = setInterval(() => {
        if (i < text.length) {
          setTypedText((prev) => prev + text.charAt(i))
          i++
        } else {
          clearInterval(typing)
          setCommandHistory([
            ...commandHistory,
            { command: `skill --info ${selectedSkill.name.toLowerCase()}`, output: selectedSkill.description },
          ])
        }
      }, 2) // typing speed 

      return () => clearInterval(typing)
    }
  }, [selectedSkill])

  // Cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <section id="skills" className={`py-24 px-6 md:px-16 transition-colors duration-300 ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.h2
          className={`text-5xl md:text-6xl font-bold mb-8 text-center tracking-tight ${theme === "dark" ? "text-white" : "text-black"}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Toolkit
        </motion.h2>

        <motion.p
          className={`text-lg text-center mb-12 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A collection of languages, frameworks, and tools I use to build things.
        </motion.p>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills chips grid */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, staggerChildren: 0.1 }}
        >
          {filteredSkills.map((skill, idx) => (
            <motion.button
              key={skill.name}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedSkill(skill)}
              className={`cursor-pointer px-4 py-2 rounded-full 
                ${theme === "dark"
                  ? "bg-gray-800 border border-gray-700 text-gray-200"
                  : "bg-white border border-gray-200 text-gray-700"}
                text-sm font-medium transition-all hover:shadow-sm 
                hover:border-gray-300 dark:hover:border-gray-500 relative group`}
            >
              <span className="text-gray-500 dark:text-gray-400">#{skill.name}</span>
              {/* Tooltip: only show on mobile for first skill, on hover for all on desktop */}
              <span className={`absolute left-1/2 -translate-x-1/2 -top-8 bg-black dark:bg-gray-200 
                text-white dark:text-gray-900 text-sm rounded px-3 py-1.5 
                ${idx === 0 ? 'sm:opacity-0 opacity-100' : 'opacity-0'} 
                group-hover:opacity-100 transition-opacity duration-100 pointer-events-none 
                whitespace-nowrap z-10 shadow-lg border border-gray-700 dark:border-gray-300`}>
                Click me
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Terminal modal for selected skill */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                className="bg-black rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: "650px" }}
              >
                {/* Terminal header */}
                <div className="flex items-center h-7 px-2 bg-gray-800 bg-gradient-to-b from-gray-700 to-gray-800">
                  <div className="flex gap-1.5 mr-4">
                    <button
                      onClick={() => setSelectedSkill(null)}
                      className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                    />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-gray-400 font-medium">{selectedSkill.name.toLowerCase()} — bash</span>
                  </div>
                  <div className="w-16"></div> {/* Spacer for balance */}
                </div>

                {/* Terminal content */}
                <div className="p-4 font-mono text-sm text-green-400 bg-[#1E1E1E] dark:bg-gray-900 h-[350px] overflow-y-auto">
                  <div className="whitespace-pre-wrap">
                    {typedText}
                    <span
                      className={`inline-block w-2 h-4 bg-green-400 ml-0.5 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
                    ></span>
                  </div>

                  {/* Code snippet */}
                  {typedText.includes("--code") && (
                    <div className="mt-2 p-3 bg-black dark:bg-gray-800 rounded-md overflow-x-auto border border-gray-800 dark:border-gray-700">
                      <pre className="text-gray-300 dark:text-gray-200">{selectedSkill.snippet}</pre>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            See my work
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection