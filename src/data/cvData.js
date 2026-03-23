export const cvData = {
  personalInfo: {
    name: "Tanu Kumari",
    email: "tannukumari56009@gmail.com",
    mobile: "+91 9942168929",
    linkedin: "https://www.linkedin.com/tanukumario1/",
    github: "https://github.com/tan1014"
  },
  skills: {
    languages: [
      { name: "Java", level: 90, icon: "☕" },
      { name: "C++", level: 75, icon: "⚙️" },
      { name: "Python", level: 80, icon: "🐍" }
    ],
    frameworks: [
      { name: "Spring Boot", level: 85, icon: "🍃" },
      { name: "Spring Data JPA", level: 80, icon: "🗃️" },
      { name: "Scikit-learn", level: 70, icon: "🤖" }
    ],
    databases: [
      { name: "MySQL", level: 85, icon: "🐬" }
    ],
    tools: [
      { name: "Ubuntu", level: 90, icon: "🐧" },
      { name: "Git", level: 85, icon: "📦" },
      { name: "GitHub", level: 90, icon: "🐙" },
      { name: "Maven", level: 80, icon: "🔧" },
      { name: "Postman", level: 85, icon: "📮" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "MySQL Workbench", level: 80, icon: "🗄️" },
      { name: "Microsoft Excel", level: 85, icon: "📊" },
      { name: "Power BI", level: 75, icon: "📈" }
    ],
    softSkills: [
      "Problem-Solving",
      "Team Player", 
      "Leadership",
      "Adaptability"
    ]
  },
  projects: [
    {
      title: "Command-Driven In-Memory Database",
      description: "Designed and implemented a command-driven in-memory database supporting dynamic data storage and manipulation without external persistence. Implemented core functionalities including insert, update, delete, and query using structured command parsing. Architected a modular command execution system following SOLID principles to ensure scalability, maintainability, and clean separation of concerns.",
      techStack: ["Java", "Maven", "OOP"],
      githubUrl: "https://github.com/tan1014/Command-Driven-In-Memory-Database",
      liveUrl: "#",
      category: "backend",
      date: "Feb 2026"
    },
    {
      title: "Social Media Backend Application",
      description: "Developed a full-stack social media application implementing complete CRUD operations for Users, Posts, Comments, and Likes using Spring Boot and layered architecture (Controller-service-Repository). Designed and managed entity relationship using JPA annotations and integrated Spring Data JPA for efficient database operations. Applied DTO pattern, Jakarta Bean Validation and Global Exception Handling to ensure secure and robust API design.",
      techStack: ["Java", "Spring Boot", "Spring Data JPA", "REST APIs", "Jakarta Validation", "MySQL", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/tan1014/Social-Media-Backend-Application",
      liveUrl: "#",
      category: "full-stack",
      date: "Feb 2026"
    },
    {
      title: "Mental Health Medication Trend",
      description: "Designed and implemented a Python-based EDA pipeline using inbuilt libraries to analyze real-world CDC mental health prescription data. Performed data cleaning, filtering, and transformation using pandas and NumPy to enable accurate demographic analysis and trend identification.",
      techStack: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Data Analysis"],
      githubUrl: "https://github.com/tan1014/Mental-Health-Medication-Trend",
      liveUrl: "#",
      category: "data-science",
      date: "Aug 2025"
    }
  ],
  achievements: [
    {
      title: "Projects Completed",
      value: 3,
      suffix: "+",
      description: "Full-stack applications and data science projects"
    },
    {
      title: "Technical Skills",
      value: 10,
      suffix: "+",
      description: "Programming languages and tools mastered"
    },
    {
      title: "Frameworks",
      value: 3,
      suffix: "+",
      description: "Spring Boot, JPA, Scikit-learn"
    },
    {
      title: "Database Expertise",
      value: 1,
      suffix: "",
      description: "MySQL database management"
    },
    {
      title: "Tools Proficiency",
      value: 9,
      suffix: "+",
      description: "Development and analysis tools"
    },
    {
      title: "Soft Skills",
      value: 4,
      suffix: "",
      description: "Professional competencies"
    }
  ]
};
