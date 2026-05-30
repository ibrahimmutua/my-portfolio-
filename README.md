# Ibrahim Mutua Rose - Portfolio

A modern, responsive portfolio website built with React, showcasing my projects, skills, and experience as a Mechanical Engineering Student with expertise in AI, Game Development, CAD Design, and more.

## 👨‍💼 About

I'm Ibrahim Mutua Rose, a passionate Mechanical Engineering Student with a diverse skill set spanning:
- 🤖 **AI & Machine Learning**
- 📐 **CAD Design (SolidWorks)**
- 🎮 **Game Development (Unity)**
- 🔌 **PCB Design & Electronics**
- 🔐 **Ethical Hacking**
- 💻 **Web Development (React)**

## 🎨 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds with smooth animations
- **Interactive Navigation**: Easy-to-use navigation between portfolio sections
- **Dynamic Content Management**: Add projects and skills directly from the website
- **Image Support**: Upload images for your projects (Solidworks, PCB, IoT photos, etc.)
- **Sections Included**:
  - About Me - Personal introduction and background
  - Skills - Organized by category with detailed skills
  - Projects - Featured projects showcase
  - Contact - Get in touch with contact form
  - Portfolio Manager - Admin panel to add/manage projects and skills

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: CSS3 with modern features (Flexbox, Grid, Gradients, Animations)
- **Build Tool**: Create React App

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

The portfolio will open automatically at `http://localhost:3000`

### 3. Access Portfolio Manager

Navigate to `/portfolio-manager` and login with password: `portfolio123`

### 4. Build for Production

```bash
npm build
```

## 📁 Project Structure

```
ramirz/
├── public/
│   └── index.html           # Main HTML file
├── src/
│   ├── components/
│   │   ├── Header.js        # Navigation header
│   │   ├── About.js         # About section
│   │   ├── Skills.js        # Skills showcase
│   │   ├── Projects.js      # Projects showcase
│   │   ├── Contact.js       # Contact form
│   │   └── Footer.js        # Footer
│   ├── App.js               # Main App component
│   ├── App.css              # App styles
│   ├── index.js             # React entry point
│   └── index.css            # Global styles
├── package.json             # Dependencies & scripts
└── README.md               # This file
```

## 📚 Documentation

- **[Quick Start Guide](QUICK_START.md)** - Add your first project in 2 minutes
- **[Portfolio Management Guide](PORTFOLIO_MANAGEMENT.md)** - Complete guide for managing projects, skills, and images
- **[Cleanup Guide](CLEANUP_GUIDE.md)** - Remove unnecessary files and optimize the project
- **[Admin Guide](ADMIN_GUIDE.md)** - Administrative features and configuration

## 🎯 Quick Links

### Adding Content to Your Portfolio

#### Option 1: Use Portfolio Manager (Recommended)
- Navigate to `/portfolio-manager`
- Login with password: `portfolio123`
- Add projects with images directly from the web interface
- No coding required!

#### Option 2: Edit Components Directly
For advanced customization, edit component files:

1. **Header Component** - `src/components/Header.js`
   - Update name and tagline

2. **About Section** - `src/components/About.js`
   - Modify personal description and quick facts

3. **Skills Section** - `src/components/Skills.js`
   - Add/remove skill categories and skills

4. **Projects Section** - `src/components/Projects.js`
   - Update project details and descriptions

5. **Contact Section** - `src/components/Contact.js`
   - Add your email, phone, location, and social links

### Customize Colors

Edit `src/App.css` and component CSS files to change:
- Primary gradient: `#667eea` to `#764ba2`
- Update colors in CSS files to match your brand

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px and above)
- Tablet (768px - 1920px)
- Mobile (below 768px)

## ✨ Features Highlights

- **Smooth Animations**: Fade-in and slide-up animations on page load
- **Hover Effects**: Interactive cards with hover animations
- **Modern Styling**: Gradient backgrounds, glassmorphism effects
- **Contact Form**: Functional form for receiving messages
- **Mobile Optimized**: Touch-friendly interface and responsive layout

## 📞 Contact

Feel free to reach out:
- 📧 Email: Ibrahim@example.com
- 📱 Phone: +1 (555) 123-4567
- 📍 Location: Kenya

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React**
   - Update social media links with your actual profiles
   - Consider adding email or phone information

### Colors and Styling

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #007bff;        /* Main color */
    --secondary-color: #6c757d;      /* Secondary color */
    --dark-color: #212529;           /* Text color */
    --light-color: #f8f9fa;          /* Background color */
}
```

## How to Use

1. Open `index.html` in your web browser
2. Customize all sections with your information
3. Replace placeholder images with your actual images
4. Update social media links
5. Deploy to a web hosting service

## Deployment Options

- **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Similar to Netlify, great for static sites
- **Traditional Hosting**: Upload files via FTP to your web host

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips

- Keep the design clean and professional
- Use high-quality project images
- Keep descriptions concise
- Regularly update your projects and achievements
- Test on mobile devices before deploying

## License

Free to use and modify for your personal portfolio.

---

Happy coding! Feel free to customize this portfolio to match your personal brand.
