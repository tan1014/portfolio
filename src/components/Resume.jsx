import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, Eye, Calendar, MapPin, Mail, Phone } from 'lucide-react';

const Resume = () => {
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

  const handleDownloadResume = () => {
    // Create a sample resume download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with actual resume file
    link.download = 'YOUR_NAME_Resume.pdf';
    link.click();
  };

  const handlePreviewResume = () => {
    // Open resume in new tab
    window.open('/resume.pdf', '_blank');
  };

  const resumeSections = [
    {
      title: "Experience",
      items: [
        {
          title: "Senior Full Stack Developer",
          company: "Tech Company",
          period: "2022 - Present",
          description: "Led development of scalable web applications, mentored junior developers, and implemented best practices."
        },
        {
          title: "Full Stack Developer",
          company: "StartupXYZ",
          period: "2020 - 2022",
          description: "Developed and maintained multiple client projects using React, Node.js, and cloud technologies."
        }
      ]
    },
    {
      title: "Education",
      items: [
        {
          title: "Bachelor of Technology in Computer Science",
          company: "University Name",
          period: "2016 - 2020",
          description: "GPA: 8.5/10.0 | Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems"
        }
      ]
    },
    {
      title: "Certifications",
      items: [
        {
          title: "AWS Certified Solutions Architect",
          company: "Amazon Web Services",
          period: "2023",
          description: "Professional level certification in cloud architecture and deployment."
        },
        {
          title: "Google Cloud Professional Developer",
          company: "Google Cloud",
          period: "2022",
          description: "Expertise in developing scalable applications on Google Cloud Platform."
        }
      ]
    }
  ];

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resume & <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              onClick={handleDownloadResume}
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </motion.button>
            
            <motion.button
              onClick={handlePreviewResume}
              className="btn-secondary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Preview Resume
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12"
          >
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Email</span>
                <span className="text-gray-900 dark:text-white">tannukumari56009@gmail.com</span>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Phone</span>
                <span className="text-gray-900 dark:text-white">9942168929</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Location</span>
                <span className="text-gray-900 dark:text-white">Phagwara, 144401</span>
              </div>
              <div className="flex flex-col items-center">
                <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Available</span>
                <span className="text-gray-900 dark:text-white">Open to opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Resume Sections */}
          <div className="grid md:grid-cols-3 gap-8">
            {resumeSections.map((section) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FileText className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                  {section.title}
                </h3>
                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span>{item.company}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.period}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                "Frontend Development",
                "Backend Development",
                "Database Design",
                "Cloud Architecture",
                "API Development",
                "UI/UX Design",
                "Agile/Scrum",
                "Problem Solving"
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
