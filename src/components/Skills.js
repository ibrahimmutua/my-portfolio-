import React, { useState, useEffect } from 'react';
import './Skills.css';

function Skills() {
  const [customSkills, setCustomSkills] = useState([]);

  useEffect(() => {
    const savedSkills = localStorage.getItem('portfolioSkills');
    if (savedSkills) {
      setCustomSkills(JSON.parse(savedSkills));
    }
  }, []);

  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      skills: ['Machine Learning', 'Neural Networks', 'Data Analysis', 'AI Chatbots', 'Gemini API'],
      icon: '🤖'
    },
    {
      category: 'Full Stack Development (MERN)',
      skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'PLP Certified'],
      icon: '💻'
    },
    {
      category: 'IoT & Embedded Systems',
      skills: ['Arduino', 'ESP32', 'Microcontrollers', 'Sensor Integration', 'IoT Protocols'],
      icon: '📡'
    },
    {
      category: 'Design & CAD',
      skills: ['SolidWorks', 'CAD Design', 'CAM', '3D Modeling'],
      icon: '📐'
    },
    {
      category: 'Game Development',
      skills: ['Unity', 'C#', 'Game Physics', 'Game Design'],
      icon: '🎮'
    },
    {
      category: 'Hardware & Electronics',
      skills: ['PCB Design', 'Electronics', 'Circuit Design', 'Embedded Programming'],
      icon: '🔌'
    },
    {
      category: 'Cybersecurity',
      skills: ['Ethical Hacking', 'Network Security', 'Penetration Testing', 'Security Analysis'],
      icon: '🔐'
    },
    {
      category: 'Web Technologies',
      skills: ['JavaScript', 'HTML/CSS', 'Responsive Design', 'Web APIs'],
      icon: '🌐'
    }
  ];

  // Combine default and custom skills
  const allSkills = [...skillCategories, ...customSkills];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {allSkills.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skillGroup.icon}</div>
            <h3>{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
