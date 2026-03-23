# Modern Portfolio Website

A stunning, modern portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, dark/light theme toggle, and a fully responsive design.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Smooth Animations**: Beautiful scroll-based animations and micro-interactions
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Component-Based**: Clean, maintainable, and reusable components
- **Interactive Elements**: Typing animations, particle backgrounds, animated counters
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with hover effects

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.jsx
│   ├── data/              # Static data
│   │   ├── achievementsData.js
│   │   ├── projectsData.js
│   │   └── skillsData.js
│   ├── hooks/             # Custom React hooks
│   │   ├── useActiveSection.jsx
│   │   └── useScrollPosition.jsx
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main App component
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json          # Dependencies
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **clsx** - Utility for constructing className strings

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- **Hero Section**: Update name and role in `src/components/Hero.jsx`
- **Contact Information**: Update email, phone, and social links in `src/components/Contact.jsx` and `src/components/Footer.jsx`
- **Projects**: Modify `src/data/projectsData.js` with your actual projects
- **Skills**: Update `src/data/skillsData.js` with your technical skills
- **Achievements**: Modify `src/data/achievementsData.js` with your accomplishments

### Theme Customization

The theme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize your primary color palette
      }
    }
  }
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the section to `App.jsx`
3. Update the navigation in `Navbar.jsx`
4. Add the section ID to the active section hook

## 📱 Sections Included

1. **Hero Section**: Eye-catching introduction with typing animation
2. **About Section**: Professional introduction and key features
3. **Skills Section**: Technical skills with progress bars
4. **Projects Section**: Filterable project gallery
5. **Achievements Section**: Animated counters and statistics
6. **Resume Section**: Downloadable resume and experience timeline
7. **Contact Section**: Contact form and social links
8. **Footer**: Social links and quick navigation

## 🎯 Key Features

### Animations
- Scroll-triggered animations using Framer Motion
- Staggered animations for lists and cards
- Hover effects and micro-interactions
- Loading screen with progress indicator
- Typing animation for roles

### Theme System
- Dark/light mode toggle
- System preference detection
- Persistent theme selection
- Smooth theme transitions

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the amazing CSS framework
- [Framer Motion](https://www.framer.com/motion/) for the animation library
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the lightning-fast build tool

## 📞 Contact

Feel free to reach out if you have any questions or suggestions:

- Email: your.email@example.com
- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourusername

---

Made with ❤️ and lots of ☕
