import React from "react";
import { motion } from "framer-motion";
import Icons from "../icons/Icons";

export function WorkExperiences() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Alo Group | United Kingdom",
      period: "Nov 2024 - Present",
      bulletPoints: [
        "Automated workflows reducing manual tasks by 30%",
        "Built third-party API integrations",
        "Optimized database structures",
      ],
      description:
        "Developed and maintained internal systems using Zoho Creator and Zoho Flow, automating workflows and reducing manual tasks by 30%. Built third-party API integrations to improve data processing by 25%. Optimized database structures, enhancing system performance and productivity.",
      skills: [
        { name: "Zoho", icon: Icons.Zoho },
        { name: "Python", icon: Icons.Python },
        { name: "Flask", icon: Icons.Flask },
        { name: "Django", icon: Icons.Django },
        { name: "PostgreSQL", icon: Icons.PostgreSQL },
        { name: "MongoDB", icon: Icons.MongoDB },
        { name: "Git", icon: Icons.Git },
        { name: "GitHub", icon: Icons.GitHub },
      ],
    },
    {
      title: "Intern Software Engineer",
      company: "Ooredoo | Yangon, Myanmar",
      period: "Jan 2023 - Jul 2023",
      bulletPoints: [
        "Improved system performance by 30%",
        "Delivered key feature updates",
        "Resolved critical technical issues",
      ],
      description:
        "Contributed to feature development using Python, Flask, and Django, improving performance by 30%. Collaborated with teams to deliver key updates, enhancing system functionality. Resolved technical issues, reducing downtime and improving user experience.",
      skills: [
        { name: "Python", icon: Icons.Python },
        { name: "Flask", icon: Icons.Flask },
        { name: "Django", icon: Icons.Django },
        { name: "FastAPI", icon: Icons.FastAPI },
        { name: "PostgreSQL", icon: Icons.PostgreSQL },
        { name: "MongoDB", icon: Icons.MongoDB },
        { name: "Git", icon: Icons.Git },
        { name: "GitHub", icon: Icons.GitHub },
      ],
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center py-8 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-16 pt-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-fifth">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-third hidden md:block" />

          <div className="space-y-6 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center justify-center gap-4 md:gap-32`}
              >
                {/* Timeline dot - Hidden on mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-third rounded-full border-4 border-forth/30 hidden md:block" />

                {/* Content */}
                <div
                  className={`w-full md:w-[600px] ${
                    index % 2 === 0
                      ? "md:text-right md:pr-16"
                      : "md:text-left md:pl-16"
                  }`}
                >
                  {/* Wrapper div to contain hover effect */}
                  <div className="p-2">
                    <div className="group bg-second/90 rounded-xl p-4 md:p-8 border border-forth/10 hover:border-third/50 transition-all duration-300 hover:scale-105 transform-gpu hover:-translate-y-1">
                      <div className="mb-3">
                        <h3 className="text-lg md:text-xl font-semibold text-fifth mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-sm md:text-base text-forth/90">
                          {exp.company}
                        </p>
                        <p className="text-xs md:text-sm text-forth/70 mt-1">
                          {exp.period}
                        </p>
                      </div>

                      <div className="relative mb-4">
                        <ul className="list-disc list-inside text-sm md:text-base text-forth/80 space-y-1">
                          {exp.bulletPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        <div className="absolute -top-2 left-0 right-0 opacity-0 group-hover:opacity-100 bg-second transition-all duration-300 z-10 transform-gpu group-hover:translate-y-2 shadow-lg shadow-third/20 rounded-lg">
                          <p className="text-sm md:text-base text-forth/90 p-4">
                            {exp.description}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex flex-wrap gap-3 ${
                          index % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"
                        }`}
                      >
                        {exp.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex flex-col items-center text-xl md:text-2xl text-fifth hover:text-forth transition-colors"
                          >
                            <skill.icon />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side - Hidden on mobile */}
                <div className="hidden md:block md:w-[600px]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperiences;
