import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import NavigationBar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";

function ProjectDetail() {
  const { slug } = useParams();

  // Project data mapping
  const projectData = {
    "portfolio-website": {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my work and skills. Built with React and Tailwind CSS, featuring smooth animations and dark theme.",
      fullDescription: `
        <p>This portfolio website was built from the ground up using modern web technologies and best practices. The goal was to create a clean, responsive, and interactive platform to showcase my work and skills.</p>
        <p>The website features a dark theme design with smooth animations and transitions, making the browsing experience both aesthetically pleasing and functional.</p>
      `,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      challenges: [
        {
          title: "Responsive Design",
          description:
            "Implementing a fully responsive design that works seamlessly across all devices while maintaining visual consistency.",
        },
        {
          title: "Animation Performance",
          description:
            "Optimizing animations to ensure smooth performance without compromising the user experience or loading times.",
        },
      ],
      images: ["/images/portfolio.png", "/images/portfolio-detail-1.png"],
      github: "https://github.com/bob/portfolio",
    },
    "soundtrack-emotion": {
      title: "Soundtrack of Your Emotion",
      description:
        "An innovative web app that captures your emotions through your device's camera and creates a personalized music playlist that matches your mood.",
      fullDescription: `
        <p>This project combines facial emotion recognition AI with Spotify's API to create a unique music experience. The app analyzes the user's facial expressions in real-time and generates personalized playlists based on their emotional state.</p>
        <p>The application uses advanced machine learning models to detect emotions and sophisticated algorithms to match those emotions with appropriate music selections.</p>
      `,
      technologies: ["Python", "Flask", "React", "TensorFlow"],
      challenges: [
        {
          title: "Real-time Processing",
          description:
            "Implementing efficient real-time facial emotion recognition while maintaining app responsiveness.",
        },
        {
          title: "Emotion-Music Mapping",
          description:
            "Developing an accurate algorithm to match detected emotions with appropriate music selections.",
        },
      ],
      images: [
        "/src/assets/SoundTrack of your emotion.png",
        "/images/soundtrack-detail-1.png",
      ],
      github: "https://github.com/bob/soundtrack-emotion",
    },
    "password-manager": {
      title: "Personalized Password Manager",
      description:
        "A secure password manager app that generates strong and unique passwords for your accounts.",
      fullDescription: `
        <p>This password manager prioritizes security while maintaining user-friendly functionality. It includes features like strong password generation, encrypted storage, and easy access across devices.</p>
        <p>The application uses advanced encryption standards to ensure user data remains secure while providing a seamless experience for password management.</p>
      `,
      technologies: ["Python", "Flask", "React", "PostgreSQL"],
      challenges: [
        {
          title: "Security Implementation",
          description:
            "Implementing robust encryption and secure storage solutions while maintaining easy accessibility.",
        },
        {
          title: "User Experience",
          description:
            "Creating an intuitive interface that makes password management simple and efficient.",
        },
      ],
      images: ["/images/music-app.png", "/images/password-detail-1.png"],
      github: "https://github.com/bob/music-app",
    },
    "personal-blog": {
      title: "Personal Blog Website",
      description:
        "A blog website built with Next.js and Tailwind CSS that resonates how I'm living my life and sharing my thoughts.",
      fullDescription: `
        <p>This blog platform was designed to provide a clean, minimalist space for sharing thoughts and experiences. It features a modern design with optimal reading experience in mind.</p>
        <p>The blog includes features like categorized posts, search functionality, and responsive images to ensure content is accessible and enjoyable across all devices.</p>
      `,
      technologies: ["Next.js", "Tailwind CSS"],
      challenges: [
        {
          title: "Content Management",
          description:
            "Implementing an efficient content management system while maintaining site performance.",
        },
        {
          title: "SEO Optimization",
          description:
            "Ensuring blog posts and content are optimized for search engines while maintaining good user experience.",
        },
      ],
      images: ["/images/blog.png", "/images/blog-detail-1.png"],
      github: "https://github.com/bob/blog",
    },
  };

  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <>
      <NavigationBar />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full bg-fifth/10 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 max-w-3xl"
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Technologies */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-fifth/10 rounded-full text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Project Overview
            </h2>
            <div
              className="text-gray-300"
              dangerouslySetInnerHTML={{ __html: project.fullDescription }}
            />
          </motion.div>

          {/* Challenges and Solutions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Challenges & Solutions
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="bg-fifth/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-300">{challenge.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Gallery
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Project screenshot ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-fifth/10 rounded-full text-white hover:bg-fifth/20 transition-colors"
            >
              <FaGithub className="text-xl" />
              <span>View on GitHub</span>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
