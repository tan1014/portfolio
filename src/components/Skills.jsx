import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cvData } from '../data/cvData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const SkillBar = ({ skill, index }) => {
    return (
      <motion.div
        variants={skillVariants}
        custom={index}
        className="mb-4"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-xl">{skill.icon}</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {skill.name}
            </span>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
        <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ 
              duration: 1, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className="absolute h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div
            variants={categoryVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Languages */}
            <motion.div
              variants={categoryVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Languages
                </h3>
              </div>
              <div className="space-y-4">
                {cvData.skills.languages.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div
              variants={categoryVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Frameworks
                </h3>
              </div>
              <div className="space-y-4">
                {cvData.skills.frameworks.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + 10} />
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div
              variants={categoryVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">�️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Databases
                </h3>
              </div>
              <div className="space-y-4">
                {cvData.skills.databases.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + 20} />
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              variants={categoryVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Tools
                </h3>
              </div>
              <div className="space-y-4">
                {cvData.skills.tools.slice(0, 4).map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + 30} />
                ))}
                <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                  And 5 more tools...
                </div>
              </div>
            </motion.div>
          </div>

          {/* Soft Skills */}
          <motion.div
            variants={categoryVariants}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Soft Skills
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cvData.skills.softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-gray-800 rounded-lg p-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
