import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const aboutContent = {
    title: "About Me",
    paragraphs: [
      "I’m all about making life easier—whether that’s automating a task, optimizing a system, or just finding smarter ways to get things done. Sometimes I turn 5 hours of work into 15 minutes, and yeah, sometimes the other way around too (it happens, right? 😅)",
      "When I’m not coding, I’m making music. For me, it’s all about creating something that resonates, whether it’s a piece of backend logic or a track that tells a story.",
    ],

    skills: {
      title: "Skills",
      items: [
        "Web Development",
        "Photography",
        "Backend Development",
        "Music Production",
      ],
    },
    gradientColors: {
      from: "#E65709",
      to: "#FFAA33",
    },
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-second flex items-center justify-center px-4 md:px-8"
      style={{ y, opacity }}
    >
      <div className="max-w-4xl w-full py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          {aboutContent.title}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                viewport={{ once: false, margin: "-100px" }}
                className="text-white text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: false, margin: "-100px" }}
              className="text-2xl text-white font-semibold mb-4"
            >
              {aboutContent.skills.title}
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {aboutContent.skills.items.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  className="bg-forth/10 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center min-w-[150px]"
                >
                  <p className="text-white text-center">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutSection;
