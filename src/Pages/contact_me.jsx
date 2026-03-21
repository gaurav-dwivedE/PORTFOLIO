import React, { useState } from "react";
import emailjs from "emailjs-com";
import c4Image from "../assets/c1.png";
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "../components/theme/ThemeContext";


const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { theme } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await emailjs.send(
        "", // EmailJS Service ID
        "", // EmailJS Template ID
        formData,
        "" // EmailJS User ID
      );

      console.log("SUCCESS!", response.status, response.text);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("FAILED...", err);
      setErrorMessage("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 flex justify-center items-center transition-colors duration-300 ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}>
      <div className="container flex flex-col items-center mx-auto px-4">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Let's Connect
          </h2>
          <p className={`max-w-2xl mx-auto text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Have any questions or want to collaborate? Feel free to reach out.
            I'm always excited to discuss new projects and opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto justify-center">
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={c4Image}
                alt="Contact illustration"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded-2xl"
              />
            </div>
            <div className={`absolute -bottom-6 -right-6 rounded-xl shadow-lg p-4 md:p-6 w-[280px] md:w-[320px] ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0 flex items-center justify-center ${theme === "dark" ? "bg-orange-900 text-orange-300" : "bg-orange-100 text-orange-500"}`}>
                  <MessageSquare size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Quick Response</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"} line-clamp-2`}>
                    I typically respond as soon as possible, usually within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/gaurav-dwivedE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === "dark" ? "text-gray-400 hover:text-orange-400" : "text-gray-600 hover:text-orange-500"} transition-colors p-2`}
                >
                  <Github size={18} className="md:w-5 md:h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/gaurav-dwivedi-2b26b326b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === "dark" ? "text-gray-400 hover:text-orange-400" : "text-gray-600 hover:text-orange-500"} transition-colors p-2`}
                >
                  <Linkedin size={18} className="md:w-5 md:h-5" />
                </a>
               
                <a
                  href="mailto:gauravdwivedi.mail@gmail.com"
                  className={`${theme === "dark" ? "text-gray-400 hover:text-orange-400" : "text-gray-600 hover:text-orange-500"} transition-colors p-2`}
                >
                  <Mail size={18} className="md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none h-28"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 animate-pulse"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 00-2 0v4.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 9.586V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {isSubmitted && (
                <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-center mt-4">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {errorMessage && (
                <p className="text-center text-red-500 mt-4">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
