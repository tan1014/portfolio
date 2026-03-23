import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, ExternalLink } from 'lucide-react';
import heroImage from '../assets/hero.png';

const backgroundElements = [...Array(100)].map(() => ({
  width: Math.random() * 3 + 'px',
  height: Math.random() * 3 + 'px',
  left: Math.random() * 100 + '%',
  top: Math.random() * 100 + '%',
  duration: Math.random() * 5 + 3,
  opacity: Math.random() * 0.8 + 0.2,
}));

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = React.useMemo(() => [
    "Full Stack Developer",
    "Java Developer", 
    "Backend Developer",
    "Data Science Enthusiast"
  ], []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? displayText.slice(0, -1)
            : currentRole.slice(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const handleViewProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Create a sample resume download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would replace this with actual resume file
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#030614] overflow-hidden">
        {/* Dynamic Aurora Blobs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/40 rounded-full blur-[100px] mix-blend-screen"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] mix-blend-screen"
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/30 rounded-full blur-[120px] mix-blend-screen"
          animate={{ x: [0, 50, -50, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-900/10 blur-[120px]"></div>

        <div className="absolute inset-0">
          {backgroundElements.map((el, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
              style={{
                width: el.width,
                height: el.height,
                left: el.left,
                top: el.top,
              }}
              animate={{
                opacity: [el.opacity * 0.3, el.opacity, el.opacity * 0.3],
              }}
              transition={{
                duration: el.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#4d9ffe]"
            >
              Tanu Kumari
            </motion.h1>

            {/* Typing Animation for Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-8 mb-8"
            >
              <span className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12"
            >
              <motion.button
                onClick={handleViewProjects}
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={handleDownloadResume}
                className="btn-secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center md:justify-start space-x-6 mb-12"
            >
              <motion.a
                href="https://github.com/tan1014"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glowing Aura Behind Image */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_60px_20px_rgba(59,130,246,0.7)] opacity-90 animate-pulseGlow transition-all duration-1000"></div>
              
              {/* Actual Image with bright white border and inner glow effect */}
              <motion.img
                src={heroImage}
                alt="Tanu Kumari"
                className="relative z-10 w-full h-full object-cover rounded-full border-[4px] border-[#e0f2fe] shadow-[0_0_30px_10px_rgba(59,130,246,0.9),inset_0_0_20px_10px_rgba(59,130,246,0.5)] transition-transform"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 dark:text-gray-600 mb-8"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
