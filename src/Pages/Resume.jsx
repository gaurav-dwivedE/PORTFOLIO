import React from "react";
import Main from "../layout/Main";

const Resume = () => {
  // --- Data ---
  const profile = {
    name: "Gaurav Dwivedi",
    title: "Full Stack Developer | MCA Fresher",
    email: "gaurav@example.com",
    phone: "+91 9876543210",
    location: "Pune, India",
    image: "/profile.jpg", // replace with your photo
  };

  const degrees = [
    { school: "DYPU, Pune", degree: "MCA", year: "2025 - 2027", link: "https://www.dypu.ac.in/" },
    { school: "APSU, Rewa", degree: "BCA", year: "2022 - 2025", link: "https://apsurewa.ac.in/" },
  ];

  const skills = [
    { name: "JavaScript", category: "Programming" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Git/GitHub", category: "Tools" },
    { name: "Tailwind CSS", category: "Frontend" },
  ];

  const categories = ["Programming", "Frontend", "Backend", "Database", "Tools"];

  const projects = [
    { title: "BillStack - Full Stack Billing App", description: "Developed full-featured billing & inventory system using React, Node.js, and MongoDB.", year: "2026" },
    { title: "Portfolio Website", description: "Created personal portfolio website with React & Tailwind CSS.", year: "2025" },
  ];

  const courses = [
    { title: "Full Stack Web Development", institution: "Coursera", year: "2025" },
    { title: "Data Structures & Algorithms", institution: "NPTEL", year: "2024" },
  ];

  const skillsByCategory = (cat) => skills.filter((s) => s.category === cat);

  return (
    <Main className="bg-gray-50 min-h-screen p-4 md:p-10">
      {/* --- Utility Sidebar --- */}
      <div className="lg:fixed lg:top-6 lg:left-6 z-50 flex flex-row lg:flex-col gap-3 justify-center lg:justify-start w-full lg:w-auto py-4 lg:py-0 bg-white/90 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none sticky top-0">
        <a href="/home" className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors border border-gray-200 shadow-sm text-sm sm:text-base">
          <span className="mr-2">🏠</span> Home
        </a>
        <a href="/resume.pdf" download className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors border border-gray-900 shadow-sm text-sm sm:text-base">
          <span className="mr-2">⬇️</span> Download PDF
        </a>
      </div>

      {/* --- Main Content --- */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-6 lg:mt-0">
        {/* Left Panel: Profile + Skills */}
        <aside className="lg:w-1/3 bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
          <img src={profile.image} alt="Profile" className="w-32 h-32 rounded-full mb-4 object-cover" />
          <h1 className="text-2xl font-bold mb-1">{profile.name}</h1>
          <p className="text-gray-600 mb-3">{profile.title}</p>
          <div className="flex flex-col gap-1 text-left w-full mt-4">
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <p>Location: {profile.location}</p>
          </div>

          <div className="w-full mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Skills</h3>
            {categories.map((cat) => (
              <div key={cat} className="mb-3">
                <h4 className="font-medium">{cat}</h4>
                <div className="flex flex-wrap gap-2 mt-1 justify-center lg:justify-start">
                  {skillsByCategory(cat).map((s) => (
                    <span key={s.name} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">{s.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Right Panel: Education, Projects, Courses */}
        <main className="lg:w-2/3 flex flex-col gap-8">
          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Education</h2>
            {degrees.map((deg) => (
              <div key={deg.school} className="mb-4">
                <h3 className="text-lg font-semibold">{deg.degree}</h3>
                <p className="text-gray-600">{deg.school}</p>
                <p className="text-gray-500 text-sm">{deg.year}</p>
                {deg.link && <a href={deg.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Visit School</a>}
              </div>
            ))}
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Projects</h2>
            {projects.map((p) => (
              <div key={p.title} className="mb-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-500 text-sm mb-1">{p.year}</p>
                <p className="text-gray-700">{p.description}</p>
              </div>
            ))}
          </section>

          {/* Courses */}
          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Courses & Certifications</h2>
            {courses.map((c) => (
              <div key={c.title} className="mb-3">
                <h3 className="text-md font-semibold">{c.title}</h3>
                <p className="text-gray-500 text-sm">{c.institution}</p>
                <p className="text-gray-500 text-sm">{c.year}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </Main>
  );
};

export default Resume;