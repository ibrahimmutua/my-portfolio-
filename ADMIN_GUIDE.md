# 🎯 Portfolio Admin Panel - Setup & Usage Guide

## 🔐 Admin Access

Your portfolio now includes a **Portfolio Manager** for managing projects and skills directly from the website.

### How to Access Admin Panel:
1. Click the **⚙️ gear icon** in the bottom-right corner
2. Enter the admin password: **`portfolio123`**
3. You're now in the admin panel!

### Admin Panel Features:

#### 📌 Projects Tab
- **Add New Projects** with:
  - Title & Description
  - Technology tags (add multiple)
  - Custom emoji icons
  - Project images (upload from device)
  - GitHub repository links
- **View all projects** you've added
- **Delete projects** anytime

#### 🎓 Skills Tab
- **Add Skill Categories** like:
  - "Advanced Robotics"
  - "Cloud Computing"
  - "Data Science"
- **Add multiple skills** per category
- **View & manage** all skill categories
- **Delete skills** anytime

---

## 🖼️ Upload SolidWorks Drawings

You can now add images of your SolidWorks CAD drawings directly:

1. Go to **Portfolio Manager** → **Projects Tab**
2. Fill in project details:
   - Title: "My SolidWorks Design"
   - Description: "Design of [component]"
   - Icon: 📐
   - GitHub Link: https://github.com/ibrahimmutua/practice-cad-practice-
3. Click **"Upload Image"** button
4. Select your SolidWorks drawing image
5. Click **"Add Project"**

Your CAD drawings will appear in the Projects section!

---

## 📊 Data Storage

- All custom projects and skills are stored in your browser's **localStorage**
- Data persists between sessions
- Clear browser data will remove all custom entries (default items remain)

---

## 🔧 Customization Tips

### Change Admin Password:
Edit `src/components/PortfolioManager.js`

Find this line:
```javascript
const ADMIN_PASSWORD = 'portfolio123'; // Change this
```

Replace with your desired password

### Add Default Projects:
Edit `src/components/Projects.js` and add to the `projects` array

### Add Default Skills:
Edit `src/components/Skills.js` and add to the `skillCategories` array

---

## 📱 Your Portfolio Now Includes:

✅ **Custom Projects Management**
- Add/delete projects dynamically
- Upload project images
- Add technology tags

✅ **Custom Skills Management**  
- Add skill categories
- Multiple skills per category
- Delete categories

✅ **SolidWorks Integration**
- Default SolidWorks project link
- Ability to add drawings with images
- CAD repository link: https://github.com/ibrahimmutua/practice-cad-practice-

✅ **Full-Stack MERN Developer**
- Certified from PLP
- Online Voting System project showcase
- Full stack capabilities

✅ **AI Chatbot** (Gemini API)
- Ask any questions
- Real-time responses
- No code in responses

✅ **IoT & Embedded Systems**
- Arduino, ESP32, Microcontrollers
- Sensor integration
- Embedded programming

---

## 🚀 Quick Start

```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Start the development server
npm start

# 3. Access admin panel
# Click ⚙️ icon in bottom-right
# Password: portfolio123

# 4. Build for production
npm run build
```

---

## 📝 Tips for Best Results

1. **Use high-quality images** for CAD drawings (PNG/JPG)
2. **Keep project descriptions** concise and clear
3. **Organize skills** by category for better presentation
4. **Update projects regularly** to showcase your work
5. **Test on mobile** to ensure responsive design

---

## 💡 Features Showcase

Your portfolio demonstrates:
- **React Skills**: Component management, state management
- **Full-Stack Development**: Admin CRUD operations
- **Design**: Beautiful UI with gradients and animations
- **Functionality**: LocalStorage data persistence
- **AI Integration**: Gemini API chatbot

---

## 🆘 Troubleshooting

**Q: Admin panel not showing?**  
A: Scroll to the bottom-right corner and look for the ⚙️ icon

**Q: Projects not saving?**  
A: Make sure localStorage is enabled in your browser

**Q: Forgot admin password?**  
A: Edit `PortfolioManager.js` to change the password

**Q: Images not uploading?**  
A: Check file size and format (JPEG, PNG recommended)

---

**Need help?** Check your browser's developer console for error messages!
