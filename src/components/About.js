import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Ibrahim Mutua Rose</strong>, a passionate <strong>Mechanical Engineering Student</strong> 
            and <strong>Certified Full Stack Developer (MERN Stack)</strong> from PLP (Power Learn Project).
          </p>
          <p>
            I combine traditional engineering principles with modern tech skills to create innovative solutions. My expertise spans 
            across multiple domains - from designing mechanical systems with CAD, to developing AI-powered applications, creating 
            engaging games with Unity, exploring IoT with Arduino and ESP32, and cybersecurity.
          </p>
          <p>
            I'm driven by curiosity and the desire to solve real-world problems using both hardware and software expertise. 
            Whether it's building robust full-stack applications, designing intelligent AI systems, or working with embedded 
            systems, I'm passionate about pushing the boundaries of what's possible.
          </p>
        </div>

        <div className="about-highlights">
          <h3>Quick Facts</h3>
          <ul>
            <li>📚 Mechanical Engineering Student</li>
            <li>💻 Full Stack Developer (MERN - PLP Certified)</li>
            <li>🤖 AI & Chatbot Developer</li>
            <li>📡 IoT & Embedded Systems (Arduino, ESP32)</li>
            <li>🎮 Game Developer (Unity)</li>
            <li>📐 CAD Designer (SolidWorks)</li>
            <li>🔐 Ethical Hacker</li>
            <li>🔌 PCB Designer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
