"use client";

import { motion } from "framer-motion";
import { useTheme } from "../components/theme/ThemeContext";

const AboutSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-24 px-6 md:px-16 font-sans tracking-tight transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-950 text-gray-100"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className={`text-5xl md:text-6xl font-bold mb-8 text-center tracking-tight ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Who am I?
        </motion.h2>

        <motion.div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 text-lg md:text-xl leading-relaxed max-w-5xl ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Content Section */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <p className="font-light">
              Hey there — I'm <strong>Gaurav Dwivedi</strong>, a Full Stack MERN
              Developer who enjoys turning ideas into scalable and meaningful
              web applications. I love building products from the ground up and
              solving real-world problems with code.
            </p>

            <p className="font-light">
              My work focuses on building modern web applications using the
              MERN stack — MongoDB, Express, React, and Node.js — along with SQL
              databases and other modern technologies. I enjoy working across
              both frontend and backend to create seamless and efficient user
              experiences.
            </p>

            {/* Callout */}
            <div className="relative group w-fit">
              <div
                className={`border-l-4 border-orange-300 pl-4 italic text-base cursor-pointer ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                “Not just writing code — building reliable systems.”
              </div>

              {/* Tooltip */}
              <div
                className={`absolute left-full top-1/2 -translate-y-1/2 ml-4 z-10 hidden group-hover:block border shadow-lg rounded-lg px-4 py-3 text-sm w-64 transition-opacity duration-200 ${
                  theme === "dark"
                    ? "bg-gray-900 border-orange-400 text-gray-200"
                    : "bg-white border-orange-200 text-gray-800"
                }`}
              >
                <ul className="list-none space-y-1">
                  <li>✅ Builds scalable APIs and backend systems</li>
                  <li>✅ Focuses on clean architecture and performance</li>
                  <li>✅ Enjoys solving real-world problems with code</li>
                </ul>
              </div>
            </div>

            <p className="font-light">
              I started my journey with simple HTML pages and gradually moved
              into JavaScript, React, and backend development with Node.js and
              Express. Over time, I expanded my skills to databases like
              MongoDB and SQL, learning how to build complete full-stack
              applications.
            </p>

            <p className="font-light">
              Beyond coding, I’m passionate about continuously learning new
              technologies and improving my development workflow. My goal is to
              build applications that are not only functional but also
              scalable, efficient, and enjoyable to use.
            </p>

            <div
              className={`border-l-4 border-orange-300 pl-4 italic text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              "I build full-stack solutions that turn ideas into powerful web
              applications."
            </div>

            {/* Info Cards */}
            <div
              className={`mt-10 flex flex-col md:flex-row gap-6 text-sm font-medium ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <div
                className={`flex-1 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h4 className="text-base font-semibold mb-1">📍 Based In</h4>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  India
                </p>
              </div>

              <div
                className={`flex-1 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h4 className="text-base font-semibold mb-1">🧠 Current Focus</h4>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Building full-stack MERN applications & exploring scalable
                  backend systems
                </p>
              </div>

              <div
                className={`flex-1 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h4 className="text-base font-semibold mb-1">🚀 Goal</h4>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  To become a skilled full-stack developer and build impactful
                  digital products
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
        <div className="hidden md:flex flex-col items-start space-y-6 border-l-2 border-gray-200 pl-10">

  <div>
    <p className="text-sm text-gray-500">2022</p>
    <p className="font-normal text-base">
      Started learning programming and understood the fundamentals of how
      programming languages work. Began my web development journey by learning
      HTML, CSS, and JavaScript.
    </p>
  </div>

  <div>
    <p className="text-sm text-gray-500">2023</p>
    <p className="font-normal text-base">
      Explored backend development and learned PHP and SQL. Also started using
      Git and other developer tools while building multiple small projects to
      strengthen my development fundamentals.
    </p>
  </div>

  <div>
    <p className="text-sm text-gray-500">2024</p>
    <p className="font-normal text-base">
      Focused on backend technologies like Node.js and MongoDB. Learned API
      development, worked with Postman, and began building SaaS-style systems
      and backend architectures.
    </p>
  </div>

  <div>
    <p className="text-sm text-gray-500">2025</p>
    <p className="font-normal text-base">
      Moved deeper into modern frontend development by learning React,
      Tailwind CSS, and UI development. Built several projects to improve
      full-stack development skills.
    </p>
  </div>

  <div>
    <p className="text-sm text-gray-500">2026</p>
    <p className="font-normal text-base">
      Currently exploring advanced technologies including AI/ML basics,
      data analysis, Docker, Kubernetes, and scalable modern development
      practices.
    </p>
  </div>

</div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;