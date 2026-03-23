import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cvData } from '../data/cvData';
import { Trophy, Target, Code, BookOpen, Award, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState(
    cvData.achievements.reduce((acc, achievement) => ({
      ...acc,
      [achievement.title]: 0
    }), {})
  );

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        cvData.achievements.forEach((achievement) => {
          let current = 0;
          const increment = achievement.value / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= achievement.value) {
              current = achievement.value;
              clearInterval(timer);
            }
            setCounters(prev => ({
              ...prev,
              [achievement.title]: Math.floor(current)
            }));
          }, 30);
        });
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getIcon = (index) => {
    const icons = [
      <Trophy className="w-8 h-8" />,
      <Target className="w-8 h-8" />,
      <Award className="w-8 h-8" />,
      <Code className="w-8 h-8" />,
      <BookOpen className="w-8 h-8" />,
      <TrendingUp className="w-8 h-8" />
    ];
    return icons[index % icons.length];
  };

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Achievements & <span className="gradient-text">Stats</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {cvData.achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                  {getIcon(achievement.title)}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {counters[achievement.title]}{achievement.suffix}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {achievement.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Achievements Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Competitive Programming & Beyond
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Active participant in competitive programming contests and hackathons. 
                  Regular contributor to open-source projects and technical communities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Codeforces: Expert (1600+ rating)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      LeetCode: Top 10% in weekly contests
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Hackerrank: 5-star programmer
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Multiple hackathon winner and finalist
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Contests Participated
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Global Rankings
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Hours of Coding
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    25+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Certifications
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
