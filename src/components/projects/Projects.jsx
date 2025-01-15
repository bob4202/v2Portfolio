import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
} from "react-icons/si";
import NavigationBar from "../Navbar";

// Import images
import soundtrackImg from "@/assets/images/SoundTrack of your emotion.png";
function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projects = [
    {
      title: "Portfolio Website",
      slug: "portfolio-website",
      description:
        "A modern, responsive portfolio website showcasing my work and skills. Built with React and Tailwind CSS, featuring smooth animations and dark theme.",
      technologies: [
        { name: "", icon: SiReact },
        { name: "", icon: SiTailwindcss },
      ],
      github: "https://github.com/bob/portfolio",
      demo: "#",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23333'/%3E%3C/svg%3E",
    },
    {
      title: "Soundtrack of Your Emotion",
      slug: "soundtrack-emotion",
      description:
        "An innovative web app that captures your emotions through your device's camera and creates a personalized music playlist that matches your mood. Built with facial emotion recognition AI and Spotify's API.",
      technologies: [
        { name: "", icon: SiPython },
        { name: "", icon: SiFlask },
        { name: "", icon: SiReact },
        { name: "", icon: SiTailwindcss },
      ],
      github: "https://github.com/bob/soundtrack-emotion",
      demo: "#",
      image: soundtrackImg,
    },
    {
      title: "Personalized Password Manager",
      slug: "password-manager",
      description:
        "A secure password manager app that generates strong and unique passwords for your accounts. Built with Next.js, Tailwind CSS, and PostgreSQL.",
      technologies: [
        { name: "", icon: SiPython },
        { name: "", icon: SiFlask },
        { name: "", icon: SiReact },
        { name: "", icon: SiPostgresql },
      ],
      github: "https://github.com/bob/password-manager",
      demo: "#",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23333'/%3E%3C/svg%3E",
    },
    {
      title: "Personal Blog Website",
      slug: "personal-blog",
      description:
        "A blog website built with Next.js and Tailwind CSS. That resonates how I'm living my life and sharing my thoughts.",
      technologies: [
        { name: "", icon: SiNextdotjs },
        { name: "", icon: SiTailwindcss },
      ],
      github: "https://github.com/bob/blog",
      demo: "#",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23333'/%3E%3C/svg%3E",
    },
  ];

  return (
    <>
      <NavigationBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full min-h-screen flex flex-col pt-24 pb-8 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Projects
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="p-2">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group rounded-xl overflow-hidden flex flex-col md:flex-row"
                  >
                    {/* Image Section */}
                    <motion.div
                      className="relative h-36 md:h-64 md:w-1/3 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-300"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"
                      />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                      className="p-6 md:w-2/3 flex flex-col items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Link to={`/projects/${project.slug}`} className="group">
                        <motion.h3
                          className="text-lg md:text-xl font-semibold text-white mb-3 text-left hover:text-fifth transition-colors"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                      </Link>
                      <motion.p
                        className="text-sm md:text-base text-gray-400 mb-4 text-left"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Technologies */}
                      <motion.div
                        className="flex flex-wrap gap-4 mb-6 justify-start w-full"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-1 text-gray-400"
                          >
                            <tech.icon className="text-xl md:text-2xl text-white hover:text-third transition-colors" />
                            <span className="text-xs text-left">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Links */}
                      <motion.div
                        className="flex items-center gap-6 justify-start w-full"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <motion.a
                          whileHover={{ scale: 1.1, x: 4 }}
                          transition={{ duration: 0.2 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-fifth transition-colors"
                        >
                          <FaGithub className="text-lg" />
                          <span className="text-left">View Code</span>
                        </motion.a>
                        <Link to={`/projects/${project.slug}`}>
                          <motion.a
                            whileHover={{ scale: 1.1, x: 4 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-fifth transition-colors"
                          >
                            <FaExternalLinkAlt className="text-lg" />
                            <span className="text-left">View Details</span>
                          </motion.a>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
                {index < projects.length - 1 && <div className="my-12" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
