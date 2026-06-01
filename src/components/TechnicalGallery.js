import React, { useState, useEffect } from 'react';
import './TechnicalGallery.css';

function TechnicalGallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const CATEGORIES = ['SolidWorks', 'PCB Design', 'IoT & Embedded', 'Hardware & Electronics'];

  useEffect(() => {
    const savedItems = localStorage.getItem('technicalGallery');
    if (savedItems) {
      setGalleryItems(JSON.parse(savedItems));
    }
  }, []);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="technical-gallery">
      <div className="gallery-header">
        <h2>Technical Work Gallery</h2>
        <p>My daily technical projects and designs</p>
      </div>

      <div className="category-filters">
        <button 
          className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('All')}
        >
          All Work
        </button>
        {CATEGORIES.map(category => (
          <button 
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {galleryItems.length === 0 ? (
        <div className="empty-gallery">
          <p>📷 No technical work added yet. Use the Portfolio Manager to add your first image!</p>
        </div>
      ) : (
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="gallery-card">
              <div className="gallery-image-container">
                <img src={item.image} alt={item.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <span className="category-badge">{item.category}</span>
                </div>
              </div>
              <div className="gallery-content">
                <h3>{item.title}</h3>
                <p className="gallery-description">{item.description}</p>
                <p className="gallery-date">{new Date(item.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="gallery-info">
        <p>💡 To add more technical work images, use the Portfolio Manager (accessible from the admin panel)</p>
      </div>
    </section>
  );
}

export default TechnicalGallery;
