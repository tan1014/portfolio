import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Zap, Target, Heart, User, Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skills = [
    "Problem-Solving",
    "Team Player", 
    "Leadership",
    "Adaptability"
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Tanu Kumari
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Driven and detail-oriented Computer Science student specializing in Java backend development and data science. I build scalable, high-performance applications using Spring Boot while also extracting meaningful insights through data analysis and visualization.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  With a strong foundation in object-oriented programming, data structures, and modern development practices, I focus on writing clean, efficient, and production-ready code. I am passionate about solving real-world problems by combining backend engineering with data-driven decision-making.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Along with my technical skills, I possess strong communication and teamwork abilities, enabling me to collaborate effectively and present ideas clearly.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Continuously learning and evolving, I aim to contribute to impactful projects and grow as a versatile software developer.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300">tannukumari56009@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300">+91 9942168929</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300">India</span>
                  </div>
                </div>
              </div>
              
              {/* Skills Overview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technical Skills</div>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Frameworks</div>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">Java</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Core Language</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={containerVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center"
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-2">
                    <Heart className="w-6 h-6 mx-auto" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {skill}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
