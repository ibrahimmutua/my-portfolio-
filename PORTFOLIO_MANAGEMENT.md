# Portfolio Management Guide

This guide explains how to manage your portfolio website, including adding projects, skills, and managing project files.

## Overview

Your portfolio website has two main sections:
- **Projects**: Display your work including Solidworks drawings, PCB designs, IoT projects, etc.
- **Skills**: Showcase your technical skills organized by category

Both sections support dynamic content that you can add directly from the website without editing code.

---

## Access the Portfolio Manager

1. Navigate to `/portfolio-manager` route on your website
2. Enter the admin password: `portfolio123` (⚠️ **Change this in production!**)
3. You'll see two tabs: **Projects** and **Skills**

### ⚠️ Important Security Note
The current password is hardcoded. For production, implement:
- Server-side authentication
- Database for persistent storage
- Secure API endpoints

---

## Adding Projects

### Steps to Add a Project:

1. Go to **Portfolio Manager** → **Projects** tab
2. Click **Add New Project** form
3. Fill in the following fields:

#### Required Fields:
- **Project Title**: Name of your project (e.g., "Solidworks CAD Assembly")
- **Description**: Detailed description of what the project is and what technologies were used

#### Optional Fields:
- **Project Icon**: 
  - Click one of the suggested emoji buttons (e.g., 📐 for CAD, 🔌 for PCB, 📡 for IoT)
  - Or type a custom emoji
- **GitHub Link**: Link to your GitHub repository (e.g., `https://github.com/username/project`)
- **Demo Link**: Live demo or portfolio link for your project
- **Upload Image**: Add images of your project
  - Supported formats: JPG, PNG, GIF, WebP
  - Perfect for: Solidworks renderings, PCB photos, IoT setup photos
- **Technologies**: List all technologies used
  - Type each tech and click "Add"
  - Examples: "SolidWorks", "EAGLE", "KiCAD", "Arduino", "ESP32", etc.

### Example Projects to Add:

#### 1. Solidworks Drawings
```
Title: Advanced Mechanical Assembly
Description: Complex 3D CAD assembly with moving parts and constraints
Icon: 📐 (or 🏗️)
Technologies: SolidWorks, CAM, 3D Modeling
Image: Upload your rendering/screenshot
```

#### 2. PCB Design
```
Title: IoT Sensor PCB Design
Description: Custom PCB designed for environmental monitoring with multiple sensors
Icon: 🔌
Technologies: PCB Design, EAGLE/KiCAD, Electronics, Schematic Design
Image: Upload PCB layout photo or design screenshot
```

#### 3. IoT Project
```
Title: Smart Home Monitoring System
Description: Real-time monitoring dashboard for home automation
Icon: 📡
Technologies: Arduino, ESP32, IoT, MQTT, Node.js
Image: Upload system setup or dashboard screenshot
```

### After Adding a Project:
- The project immediately appears on your portfolio page
- Data is saved to your browser's **localStorage**
- The project will display with your icon, description, technologies, and image

---

## Adding Skills

### Steps to Add a Skill Category:

1. Go to **Portfolio Manager** → **Skills** tab
2. Click **Add Skill Category** form
3. Fill in:
   - **Category Name**: (e.g., "Hardware & Electronics", "CAD Design")
   - **Skills**: Add individual skills, one at a time

### Example Skill Categories:

#### Design & CAD
- SolidWorks
- EAGLE
- KiCAD
- 3D Modeling
- CAM

#### Hardware & Electronics
- PCB Design
- Circuit Design
- Embedded Programming
- Soldering
- Prototyping

#### IoT & Embedded Systems
- Arduino
- ESP32
- Microcontrollers
- Sensor Integration
- MQTT

---

## Managing Your Files

### File Organization

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Projects.js         # Displays projects (no edit needed)
│   │   ├── Skills.js           # Displays skills (no edit needed)
│   │   ├── PortfolioManager.js # Admin panel
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Chatbot.js
│   │   └── (CSS files)
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
├── package.json
└── README.md
```

### Unnecessary Files to Remove

The following files can be safely removed if not needed:

1. **Test files** (if you're not running tests):
   - `src/**/*.test.js`
   - `src/setupTests.js`

2. **Unused dependencies** in `package.json`:
   - Check which packages are actually imported

3. **Legacy documentation** (if updated):
   - `PORTFOLIO_SETUP.md` (optional - use PORTFOLIO_MANAGEMENT.md instead)

### Unused Dependencies to Consider Removing

If not using chatbot features:
- Remove `axios` if not making API calls
- Remove `which` if not checking system executables

Check usage:
```bash
# Search for imports in your code
grep -r "import.*axios" src/
grep -r "import.*which" src/
```

---

## Adding Images to Projects

### Best Practices:

1. **Image Size**:
   - Recommended: 400x300px to 800x600px
   - Max recommended: 1MB per image
   - Format: JPG, PNG, WebP

2. **Image Types to Add**:
   - **Solidworks**: High-quality renderings, isometric views, assembly diagrams
   - **PCB**: PCB layout screenshots, board photos, schematic diagrams
   - **IoT**: System setup photos, dashboard screenshots, sensor placements
   - **Electronics**: Breadboard prototypes, soldered boards, circuit layouts

3. **Uploading**:
   - Click "Choose File" in Portfolio Manager
   - Select your image
   - Preview appears immediately
   - Click "Add Project" to save

---

## Data Persistence

### Where Your Data is Stored:

- **Browser's Local Storage**: Projects and skills data
- **Not backed up**: Data is local to your browser only
- **Clearing browser data**: Will delete all added projects/skills

### Backup Your Data:

1. Open browser DevTools (F12)
2. Go to Application → Local Storage
3. Copy `portfolioProjects` and `portfolioSkills` entries
4. Save to a text file for backup

Or use this in the browser console:
```javascript
// Export all portfolio data
const data = {
  projects: localStorage.getItem('portfolioProjects'),
  skills: localStorage.getItem('portfolioSkills')
};
console.log(JSON.stringify(data, null, 2));
```

---

## Updating the Admin Password

### Important: Change in Production

1. Open `src/components/PortfolioManager.js`
2. Find line with `const ADMIN_PASSWORD = 'portfolio123';`
3. Change to a secure password
4. Redeploy the website

Example:
```javascript
const ADMIN_PASSWORD = 'your-secure-password-here'; // Change this!
```

**For production applications**, consider:
- Moving password to environment variables
- Using proper authentication (Firebase, Auth0, etc.)
- Implementing server-side validation

---

## Troubleshooting

### Projects not showing up?
1. Refresh the page
2. Check if localStorage is enabled (shouldn't be disabled)
3. Verify you clicked "Add Project"

### Image not displaying?
1. Check file size (should be under 5MB)
2. Ensure image format is supported (JPG, PNG, WebP)
3. Try re-uploading the image

### Lost all my data?
1. Cleared browser cache? Restore from backup
2. Check browser's Application → Local Storage
3. Contact browser support if local storage was cleared

### Can't log in?
1. Check caps lock
2. Verify you're using correct password: `portfolio123`
3. Try refreshing the page

---

## Tips & Best Practices

### For Solidworks Projects:
- Export high-quality renderings (PNG or PDF)
- Include assembly drawings showing all components
- Describe the design process and challenges faced
- Link to CAD GitHub repository if available

### For PCB Designs:
- Include both schematic and PCB layout images
- Describe the circuit functionality
- List all components used (resistors, capacitors, ICs, etc.)
- Share design tools used (EAGLE, KiCAD, Altium, etc.)

### For IoT Projects:
- Show the physical setup/prototype
- Include dashboard or monitoring interface screenshots
- List all sensors and microcontrollers used
- Describe data flow and communication protocols

### For All Projects:
- Be specific about technologies used
- Include project duration if applicable
- Link to live demos or GitHub repositories
- Add multiple high-quality images
- Keep descriptions concise but informative

---

## Next Steps

1. ✅ Access Portfolio Manager
2. ✅ Add your first project (try Solidworks or PCB design)
3. ✅ Add project images
4. ✅ Add relevant technologies
5. ✅ Add new skill categories
6. ✅ Change admin password for security
7. ✅ Backup your data periodically

---

## Questions or Issues?

If you encounter any issues:
1. Check the troubleshooting section
2. Review browser console for error messages (F12)
3. Ensure all required fields are filled
4. Check file sizes and formats for images

Happy showcasing your projects! 🚀
