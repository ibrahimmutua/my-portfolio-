import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [customProjects, setCustomProjects] = useState([]);

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
      setCustomProjects(JSON.parse(savedProjects));
    }
  }, []);

  const projects = [
    {
      title: 'Online Voting System',
      description: 'A full-featured online voting platform built with MERN stack. Features secure authentication, real-time vote counting, and responsive design.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      icon: '🗳️',
      link: 'https://my-online-voting-system-project.vercel.app/'
    },
    {
      title: 'AI-Powered Chatbot',
      description: 'Intelligent chatbot integrated with Gemini API for natural conversations and AI-powered responses. Showcases advanced AI capabilities.',
      tech: ['React', 'Gemini API', 'AI/ML', 'Natural Language Processing'],
      icon: '🤖'
    },
    {
      title: 'IoT Sensor Dashboard',
      description: 'Real-time monitoring dashboard for IoT devices. Integrated with Arduino and ESP32 microcontrollers for data collection and visualization.',
      tech: ['Arduino', 'ESP32', 'IoT', 'Sensor Integration'],
      icon: '📊'
    },
    {
      title: 'SolidWorks CAD Designs',
      description: 'Complex mechanical assemblies and CAD drawings using SolidWorks. View my CAD practice repository with various design projects.',
      tech: ['SolidWorks', 'CAD', 'Mechanical Design'],
      icon: '🏗️',
      link: 'https://github.com/ibrahimmutua/practice-cad-practice-'
    },
    {
      title: 'Unity Game Development',
      description: 'Interactive 3D game with physics simulation, engaging gameplay mechanics, and intuitive controls.',
      tech: ['Unity', 'C#', 'Game Physics'],
      icon: '🎮'
    },
    {
      title: 'PCB Design & Electronics',
      description: 'Custom PCBs designed and prototyped for embedded systems and IoT applications with professional circuit design.',
      tech: ['PCB Design', 'Electronics', 'CAM'],
      icon: '🔌'
    }
  ];

  // Combine default and custom projects
  const allProjects = [...projects, ...customProjects];

  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-container">
        {allProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.imagePreview || project.image ? (
              <img src={project.imagePreview || project.image} alt={project.title} className="project-image" />
            ) : null}
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link || project.github ? (
              <a href={project.link || project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
