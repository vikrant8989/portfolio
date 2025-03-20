"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Calendar,
  FileText,
  Blocks,
  Cpu,
  Braces,
  MessageSquare,
  Smartphone,
  PenTool,
  Server,
  Database,
  Brain,
  Code,
  Cloud,
  Lightbulb,
  Facebook,
  Loader,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import SocialIcon from "@/components/social-icon";
import { Button } from "@/components/ui/button";
import AboutMe from "@/components/about-me";
import Loading from "@/components/loading";
import InteractiveShapes from "@/components/InteractiveShapes";
import AnimatedBoxes from "@/components/AnimatedBoxes";
import { toast } from "sonner";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false); 
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;
  if (loading) return <Loading />;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true); // Start loading

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); // Get response JSON
      setLoader(false); // Stop loading
      if (response.ok) {
        toast(data.message || "Message sent successfully!" );
        e.target.reset();
      } else {
        toast(data.message || "Failed to send message.");
      }
    } catch (error) {
      setLoading(false);
      toast("Something went wrong! Try again later.");
    }
  };
  const showToast = () => {
    toast("Success Message sent successfully!");
  }
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Hey! It's Vikrant Pratap Singh
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              🚀 Full-Stack Developer | Gen AI | Tech Explorer
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Code className="w-10 h-10 text-blue-500" />}
                title="Full Stack Development"
                description="Building scalable web applications using Next.js, React, and modern backend technologies."
              />
              <ServiceCard
                icon={<Brain className="w-10 h-10 text-green-500" />}
                title="GenAI & AI Integration"
                description="Enhancing applications with AI-driven features, from chatbots to intelligent automation solutions."
              />
              <ServiceCard
                icon={<Database className="w-10 h-10 text-blue-500" />}
                title="Fabric Datalake & PostgreSQL"
                description="Designing robust data architectures and integrating efficient storage solutions for high-performance applications."
              />
              <ServiceCard
                icon={<Server className="w-10 h-10 text-green-500" />}
                title="Backend & API Development"
                description="Creating secure and high-performance APIs with NextJs(itself), Flask, Express and database optimizations."
              />
              <ServiceCard
                icon={<Cloud className="w-10 h-10 text-blue-500" />}
                title="Cloud & DevOps"
                description="Deploying scalable applications with cloud platforms, containerization, and CI/CD pipelines."
              />
              <ServiceCard
                icon={<Lightbulb className="w-10 h-10 text-green-500" />}
                title="Technical Consultation"
                description="Providing expert guidance on architecture, tech stacks, and best practices for scalable solutions."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                What I've Built
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Data Service Portal"
                description="Pioneered the transition to Microsoft Fabric, consolidating five platforms into one. Achieved a 60% efficiency boost by streamlining interactions with Fabric via a Next.js-powered application."
                tags={["Next.js", "Microsoft Fabric", "Data Management"]}
                image="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop"
              />
              <ProjectCard
                title="Route Data Management"
                description="Developed a Next.js application for British American Tobacco (BAT) to replace Excel-based transport data management. Improved operational efficiency by 25% and data accuracy by 30%."
                tags={["Next.js", "Data Processing", "Transport Management"]}
                image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
              />
              <ProjectCard
                title="MadClub - Trekking Website"
                description="Built a Next.js-powered trekking platform featuring real-time booking, interactive route maps, and a vibrant community forum. Increased user engagement by 40% and cut manual booking efforts by 60%."
                tags={["Next.js", "Booking System", "Community Platform"]}
                image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
              />
              <ProjectCard
                title="NammaStore - Luggage Storage Platform"
                description="Developed a Next.js-based platform enabling users to find and book secure luggage storage. Integrated real-time availability tracking and payments, reducing booking time by 50% and increasing customer satisfaction by 35%."
                tags={["Next.js", "Real-Time Tracking", "Payment Integration"]}
                image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
              />
              <ProjectCard
                title="HyperApps - AI-Powered Rapid App Development"
                description="Engineered a Next.js platform for quick app creation using Generative AI (GenAI). Integrated modular templates and AI-powered code generation, reducing development time by 80% and accelerating go-to-market speed by 60%."
                tags={["Next.js", "GenAI", "Low-Code Development"]}
                image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Ping Me
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    disabled={loader}
                  >
                    {loader ? (
                      <>
                        <Loader className="animate-spin mr-2 h-5 w-5" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-2">
                    Prefer to schedule a meeting?
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="https://calendly.com/vikrantzone123/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Meeting
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1aphbgHtS7wCBq0eWbfFnl_4S_PWMgIt8/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon
              icon={<Github />}
              href="https://github.com/vikrant8989"
              label="GitHub"
            />
            <SocialIcon
              icon={<Linkedin />}
              href="https://www.linkedin.com/in/vikrant-pratap-singh-5936451b2/"
              label="LinkedIn"
            />
            <SocialIcon
              icon={<Facebook />}
              href="https://www.facebook.com/vikrantpratap.singh.35912"
              label="Facebook"
            />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Vikrant Pratap Singh. All rights
              reserved.
            </p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

const ProjectCard = ({ title, description, tags, image }) => {
  return (
    <div
      className="p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 rounded-lg"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 text-center md:text-left">
          {description}
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

function ContactEmail() {
  return (
    <div className="mt-2">
      <a
        href="mailto:aakash4dev.me@gmail.com"
        className="text-purple-400 hover:text-purple-300"
      >
        vikrantzone123@gmail.com
      </a>
    </div>
  );
}
