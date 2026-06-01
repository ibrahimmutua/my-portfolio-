import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero({ setActiveSection }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77, 159, 255, ${p.alpha})`;
        ctx.fill();
      });

      // Connect nearby
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(21, 96, 255, ${0.08 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-content animate-up">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for Projects
        </div>

        <h1 className="hero-name">
          Ibrahim<br />
          <span className="grad-text">Mutua Rose</span>
        </h1>

        <div className="hero-roles">
          <span className="role-tag">Mechanical Engineer</span>
          <span className="role-divider">×</span>
          <span className="role-tag">Full Stack Dev</span>
          <span className="role-divider">×</span>
          <span className="role-tag">AI Builder</span>
        </div>

        <p className="hero-desc">
          I bridge the physical and digital worlds — from mechanical CAD designs and embedded systems
          to AI-powered web applications and game development. Based in Kenya, building the future.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setActiveSection('projects')}>
            View My Work <span>→</span>
          </button>
          <button className="btn-outline" onClick={() => setActiveSection('contact')}>
            Get In Touch
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">8+</span>
            <span className="stat-label">Skills Domains</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">6+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">MERN</span>
            <span className="stat-label">PLP Certified</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-ring ring-outer" />
        <div className="profile-ring ring-mid" />
        <div className="profile-ring ring-inner" />
        <div className="profile-card glass">
          <div className="profile-avatar">IM</div>
          <div className="profile-info">
            <span className="profile-name">Ibrahim Mutua</span>
            <span className="profile-loc">📍 Kenya</span>
          </div>
          <div className="profile-status">
            <span className="status-dot" />Open
          </div>
        </div>

        <div className="orbit-chip chip-1 glass">⚛️ React</div>
        <div className="orbit-chip chip-2 glass">🤖 AI/ML</div>
        <div className="orbit-chip chip-3 glass">📐 CAD</div>
        <div className="orbit-chip chip-4 glass">🎮 Unity</div>
        <div className="orbit-chip chip-5 glass">🔌 IoT</div>
        <div className="orbit-chip chip-6 glass">🔐 Security</div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-bar"><div className="scroll-thumb" /></div>
      </div>
    </section>
  );
}

export default Hero;