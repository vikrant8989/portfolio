"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";

const timelineData = [
  {
    id: 1,
    company: "ITC INFOTECH",
    role: "Full Stack Developer",
    period: "2023 - 2025",
    location: "Bengaluru, India",
    type: "Full-time",
    logo: "/itc-infotech-logo.svg",
    skills: ["Next.js","JavaScript", "React.js","Tailwind CSS"],
  },
  {
    id: 2,
    company: "Tezpur University",
    role: "BACHELOR OF TECHNOLOGY",
    period: "2019 - 2023",
    location: "Tezpur, Assam",
    type: "Full-time",
    logo: "/tezu.jpeg",
    skills: ["Next.js", "JavaScript","React", "Operating System","Networking"],
  },
];

const skillsData = {
  "Programming Languages": [
    { name: "CPP", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "TypeScript", proficiency: 80 },
    { name: "Python", proficiency: 50 },
    { name: "C", proficiency: 50 },
  ],
  "Frameworks/Libraries": [
    { name: "Next.js", proficiency: 95 },
    { name: "React", proficiency:  80},
    { name: "Flask", proficiency: 75 },
    { name: "Express.js", proficiency: 50 },
  ],
  Tools: [
    { name: "Git", proficiency: 98 },
    { name: "Azure DevOps", proficiency: 80 },
    { name: "Kubernetes", proficiency: 78 },
  ],
};

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-12 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Code, Coffee & Me
            </span>
            <span className="ml-2">☕💻</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/vikrant.jpg"
                  alt="Vikrant Pratap Singh"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Full Stack Developer ⚡ | Next.js & GenAI Enthusiast 🤖 |
                  Crafting scalable, intelligent solutions with Fabric Datalake
                  & PostgreSQL.
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🚀 <strong>Hey, I'm Vikrant Pratap Singh!</strong>
                  </p>
                  <p className="mb-4">
                    A <strong>Full Stack Developer ⚡</strong> passionate about
                    building{" "}
                    <strong>scalable, high-performance applications</strong>.
                    Whether it's <strong>Next.js</strong> for blazing-fast
                    frontends, <strong>GenAI 🤖</strong> for intelligent
                    automation, or architecting {" "}
                    <strong>Fabric Datalake & PostgreSQL</strong> solutions, I
                    thrive on solving complex problems.
                  </p>
                  <p className="mb-4">
                    I specialize in crafting seamless digital experiences by
                    integrating <strong>AI-driven insights</strong> with robust
                    backend architectures. From optimizing databases to
                    enhancing user interactions, I ensure every line of code
                    serves a purpose. My work spans{" "}
                    <strong>
                      enterprise applications, data-driven platforms, and
                      AI-powered systems
                    </strong>
                    .
                  </p>
                  <p>
                    Let's{" "}
                    <strong>connect, innovate, and build the future</strong>—one
                    scalable solution at a time! 🚀💡
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                The Road So Far
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">
                            {item.role}
                          </h3>
                          <h4 className="text-lg text-purple-400">
                            {item.company}
                          </h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Code Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div
                  key={category}
                  className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800"
                >
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">
                    {category}
                  </h4>
                  {skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      proficiency={skill.proficiency}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({ name, proficiency }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  );
}
