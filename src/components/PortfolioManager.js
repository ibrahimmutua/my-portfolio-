import React, { useState, useEffect } from 'react';
import './PortfolioManager.css';

function PortfolioManager() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    tech: [],
    icon: '📦',
    image: null,
    imagePreview: '',
    github: '',
    link: ''
  });
  const [newSkill, setNewSkill] = useState({
    category: '',
    skills: []
  });
  const [newGalleryItem, setNewGalleryItem] = useState({
    title: '',
    description: '',
    category: 'SolidWorks',
    image: null,
    imagePreview: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [techInput, setTechInput] = useState('');
  const [skillInput, setSkillInput] = useState('');
  const [activeTab, setActiveTab] = useState('projects');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const GALLERY_CATEGORIES = ['SolidWorks', 'PCB Design', 'IoT & Embedded', 'Hardware & Electronics'];

  const ADMIN_PASSWORD = 'portfolio123'; // Simple password - change in production

  const PROJECT_ICONS = ['📦', '🤖', '💻', '📊', '🏗️', '🎮', '🔌', '📡', '🎨', '📱', '🌐', '💡', '🚀', '⚙️', '🔐'];

  // Load data from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects');
    const savedSkills = localStorage.getItem('portfolioSkills');
    const savedGallery = localStorage.getItem('technicalGallery');
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedSkills) setSkills(JSON.parse(savedSkills));
    if (savedGallery) setGalleryItems(JSON.parse(savedGallery));
  }, []);

  // Save projects to localStorage
  const saveProjects = (updatedProjects) => {
    localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
  };

  // Save skills to localStorage
  const saveSkills = (updatedSkills) => {
    localStorage.setItem('portfolioSkills', JSON.stringify(updatedSkills));
    setSkills(updatedSkills);
  };

  // Save gallery items to localStorage
  const saveGalleryItems = (updatedItems) => {
    localStorage.setItem('technicalGallery', JSON.stringify(updatedItems));
    setGalleryItems(updatedItems);
  };

  // Handle authentication
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Wrong password!');
      setPassword('');
    }
  };

  // Handle image upload for projects
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProject({
          ...newProject,
          image: reader.result,
          imagePreview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle gallery image upload
  const handleGalleryImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewGalleryItem({
          ...newGalleryItem,
          image: reader.result,
          imagePreview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Add technology
  const addTech = () => {
    if (techInput.trim()) {
      setNewProject({
        ...newProject,
        tech: [...newProject.tech, techInput.trim()]
      });
      setTechInput('');
    }
  };

  // Remove technology
  const removeTech = (index) => {
    setNewProject({
      ...newProject,
      tech: newProject.tech.filter((_, i) => i !== index)
    });
  };

  // Add skill
  const addSkillToList = () => {
    if (skillInput.trim()) {
      setNewSkill({
        ...newSkill,
        skills: [...newSkill.skills, skillInput.trim()]
      });
      setSkillInput('');
    }
  };

  // Remove skill
  const removeSkill = (index) => {
    setNewSkill({
      ...newSkill,
      skills: newSkill.skills.filter((_, i) => i !== index)
    });
  };

  // Add new project
  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProject.title && newProject.description) {
      const project = {
        ...newProject,
        id: Date.now()
      };
      const updatedProjects = [...projects, project];
      saveProjects(updatedProjects);
      setNewProject({
        title: '',
        description: '',
        tech: [],
        icon: '📦',
        image: null,
        imagePreview: '',
        github: '',
        link: ''
      });
      alert('Project added successfully!');
    }
  };

  // Delete project
  const deleteProject = (id) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    saveProjects(updatedProjects);
  };

  // Add new skill category
  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.category && newSkill.skills.length > 0) {
      const skill = {
        ...newSkill,
        id: Date.now()
      };
      const updatedSkills = [...skills, skill];
      saveSkills(updatedSkills);
      setNewSkill({
        category: '',
        skills: []
      });
      alert('Skill category added successfully!');
    }
  };

  // Delete skill
  const deleteSkill = (id) => {
    const updatedSkills = skills.filter(s => s.id !== id);
    saveSkills(updatedSkills);
  };

  // Add new gallery item
  const handleAddGalleryItem = (e) => {
    e.preventDefault();
    if (newGalleryItem.title && newGalleryItem.image) {
      const item = {
        ...newGalleryItem,
        id: Date.now()
      };
      const updatedItems = [...galleryItems, item];
      saveGalleryItems(updatedItems);
      setNewGalleryItem({
        title: '',
        description: '',
        category: 'SolidWorks',
        image: null,
        imagePreview: '',
        date: new Date().toISOString().split('T')[0]
      });
      alert('Gallery item added successfully!');
    } else {
      alert('Please fill in title and upload an image');
    }
  };

  // Delete gallery item
  const deleteGalleryItem = (id) => {
    const updatedItems = galleryItems.filter(item => item.id !== id);
    saveGalleryItems(updatedItems);
  };

  if (!isAuthenticated) {
    return (
      <div className="portfolio-manager-container">
        <div className="login-form">
          <h2>Portfolio Manager</h2>
          <p>Enter password to manage your portfolio</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-manager">
      <div className="manager-header">
        <h2>Portfolio Manager</h2>
        <button onClick={() => setIsAuthenticated(false)} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="manager-tabs">
        <button
          className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button
          className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
          onClick={() => setActiveTab('gallery')}
        >
          📸 Tech Gallery
        </button>
      </div>

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <div className="manager-content">
          <div className="add-project-form">
            <h3>Add New Project</h3>
            <form onSubmit={handleAddProject}>
              <div className="form-group">
                <label>Project Title</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  placeholder="e.g., AI Chatbot System"
                  required
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  placeholder="Describe your project..."
                  required
                />
              </div>

              <div className="form-group">
                <label>Project Icon</label>
                <div className="icon-picker">
                  {PROJECT_ICONS.map((icon) => (
                    <button
                      key={icon}
                      type="button"
                      className={`icon-btn ${newProject.icon === icon ? 'active' : ''}`}
                      onClick={() => setNewProject({ ...newProject, icon })}
                      title={icon}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                  Or type custom emoji: 
                  <input
                    type="text"
                    value={newProject.icon}
                    onChange={(e) => setNewProject({ ...newProject, icon: e.target.value })}
                    placeholder="e.g., 🎯"
                    maxLength="2"
                    style={{ width: '60px', marginLeft: '8px' }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>GitHub Link (optional)</label>
                <input
                  type="url"
                  value={newProject.github}
                  onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                  placeholder="https://github.com/..."
                />
              </div>

              <div className="form-group">
                <label>Project Demo/Live Link (optional)</label>
                <input
                  type="url"
                  value={newProject.link}
                  onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                  placeholder="https://your-project-demo.com..."
                />
              </div>

              <div className="form-group">
                <label>Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {newProject.imagePreview && (
                  <div className="image-preview">
                    <img src={newProject.imagePreview} alt="Preview" />
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>Technologies</label>
                <div className="tech-input-group">
                  <input
                    type="text"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    placeholder="Add a technology..."
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                  />
                  <button type="button" onClick={addTech}>Add</button>
                </div>
                <div className="tech-tags">
                  {newProject.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTech(index)}
                        className="remove-btn"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <button type="submit" className="submit-btn">Add Project</button>
            </form>
          </div>

          <div className="projects-list">
            <h3>Your Projects ({projects.length})</h3>
            {projects.length === 0 ? (
              <p className="empty-message">No projects added yet</p>
            ) : (
              projects.map((project) => (
                <div key={project.id} className="project-item">
                  <div className="project-info">
                    <span className="project-icon">{project.icon}</span>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <div className="project-meta">
                        {project.tech.length > 0 && (
                          <span className="tech-count">{project.tech.length} technologies</span>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        )}
                        {project.image && (
                          <span className="has-image">✓ Has Image</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Skills Tab */}
      {activeTab === 'skills' && (
        <div className="manager-content">
          <div className="add-skill-form">
            <h3>Add Skill Category</h3>
            <form onSubmit={handleAddSkill}>
              <div className="form-group">
                <label>Category Name</label>
                <input
                  type="text"
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                  placeholder="e.g., IoT & Embedded Systems"
                  required
                />
              </div>

              <div className="form-group">
                <label>Add Skills</label>
                <div className="tech-input-group">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="Add a skill..."
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkillToList())}
                  />
                  <button type="button" onClick={addSkillToList}>Add</button>
                </div>
                <div className="tech-tags">
                  {newSkill.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(index)}
                        className="remove-btn"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <button type="submit" className="submit-btn">Add Skill</button>
            </form>
          </div>

          <div className="skills-list">
            <h3>Your Skills ({skills.length})</h3>
            {skills.length === 0 ? (
              <p className="empty-message">No skill categories added yet</p>
            ) : (
              skills.map((skill) => (
                <div key={skill.id} className="skill-item">
                  <div className="skill-info">
                    <h4>{skill.category}</h4>
                    <div className="skill-tags">
                      {skill.skills.map((s, index) => (
                        <span key={index} className="skill-tag-small">{s}</span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => deleteSkill(skill.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Technical Gallery Tab */}
      {activeTab === 'gallery' && (
        <div className="manager-content">
          <div className="add-gallery-form">
            <h3>Add Technical Work Image</h3>
            <form onSubmit={handleAddGalleryItem}>
              <div className="form-group">
                <label>Project Title</label>
                <input
                  type="text"
                  value={newGalleryItem.title}
                  onChange={(e) => setNewGalleryItem({ ...newGalleryItem, title: e.target.value })}
                  placeholder="e.g., Mechanical Assembly Design"
                  required
                />
              </div>

              <div className="form-group">
                <label>Description (optional)</label>
                <textarea
                  value={newGalleryItem.description}
                  onChange={(e) => setNewGalleryItem({ ...newGalleryItem, description: e.target.value })}
                  placeholder="Describe your work..."
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  value={newGalleryItem.category}
                  onChange={(e) => setNewGalleryItem({ ...newGalleryItem, category: e.target.value })}
                  required
                >
                  {GALLERY_CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Date Created</label>
                <input
                  type="date"
                  value={newGalleryItem.date}
                  onChange={(e) => setNewGalleryItem({ ...newGalleryItem, date: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleGalleryImageUpload}
                  required
                />
                {newGalleryItem.imagePreview && (
                  <div className="image-preview">
                    <img src={newGalleryItem.imagePreview} alt="Preview" />
                  </div>
                )}
              </div>

              <button type="submit" className="submit-btn">Add to Gallery</button>
            </form>
          </div>

          <div className="gallery-list">
            <h3>Your Technical Work ({galleryItems.length})</h3>
            {galleryItems.length === 0 ? (
              <p className="empty-message">No gallery items added yet</p>
            ) : (
              galleryItems.map((item) => (
                <div key={item.id} className="gallery-item">
                  <div className="gallery-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="gallery-item-info">
                    <h4>{item.title}</h4>
                    <p className="gallery-category">{item.category}</p>
                    {item.description && <p>{item.description}</p>}
                    <p className="gallery-date">{new Date(item.date).toLocaleDateString()}</p>
                  </div>
                  <button
                    onClick={() => deleteGalleryItem(item.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioManager;
