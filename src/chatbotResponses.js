// Comprehensive Chatbot Response Database with thousands of responses
export const getChatbotResponse = (userMessage) => {
  const lowerInput = userMessage.toLowerCase().trim();

  // Greeting & Introduction
  const greetings = [
    "Hey there! 👋 I'm Ibrahim's AI assistant. How can I help you today?",
    "Hello! 🎉 I'm here to answer any questions about Ibrahim's skills and projects!",
    "Howdy! 👋 What would you like to know about Ibrahim?",
    "Hi there! 😊 Feel free to ask me anything about Ibrahim's experience and work!",
    "Hey! 🚀 Happy to help. What brings you here?",
    "Welcome! I'm Ibrahim's virtual assistant. What can I tell you about him?",
    "Greetings! 🌟 Ask me about Ibrahim's amazing projects and skills!",
    "Hey! Thanks for stopping by. What interests you?",
  ];

  // CAD & Design
  const cadResponses = [
    "🏗️ **CAD & Mechanical Design** - Ibrahim's Expertise:\n\n✓ **SolidWorks** (Advanced)\n  - Complex assemblies\n  - 3D modeling & rendering\n  - Technical drawings\n  - CAM integration\n\n✓ **Skills**:\n  - Part design & assembly\n  - Sheet metal design\n  - Surfacing\n  - Motion studies\n  - Simulation basics\n\n✓ **Recent Projects**:\n  - Propeller designs (2-blade, 4-blade)\n  - Mechanical assemblies\n  - Housing components\n  - Complex mechanical systems\n\nCheck his CAD portfolio for detailed models!",
    
    "🏗️ SolidWorks CAD Experience:\n• **Proficiency**: Advanced user\n• **Years**: Multiple projects completed\n• **Specialization**: Mechanical assemblies, precision parts, technical documentation\n• **Applications**: Product design, mechanical systems, prototyping\n\nIbrahim has designed numerous CAD projects including propellers, housings, and complex assemblies. All designs follow industry standards!",
    
    "📐 Ibrahim's CAD Projects Include:\n1. **Propeller Assemblies** - Multi-blade designs with aerodynamic optimization\n2. **Housing Components** - Complex enclosures with precision tolerances\n3. **Mechanical Systems** - Full assemblies with motion studies\n4. **Technical Drawings** - Professional documentation for manufacturing\n\nEach project demonstrates mastery of SolidWorks and mechanical design principles!",
    
    "🎨 **3D Modeling & Design**:\nIbrahim excels at:\n• Creating complex 3D models\n• Assembly design with constraints\n• Rendering and visualization\n• Technical drawing generation\n• CAM file preparation\n\nHis designs are production-ready with proper tolerances and documentation!",
    
    "⚙️ CAD Software Mastery:\n✓ **SolidWorks**: Expert level\n✓ **CAM**: Manufacturing-ready\n✓ **Technical Standards**: ISO, ANSI compliance\n✓ **File Formats**: STEP, IGES, DWG, PDF\n✓ **Design Principles**: DFM, tolerance analysis, assembly logic\n\nReady for manufacturing, prototyping, or further development!",
  ];

  // SolidWorks specific
  if (lowerInput.match(/solidworks|sldprt|sldasm|cad|3d model|design|assembly|prop/i)) {
    if (lowerInput.includes('propeller')) {
      return `🚁 **Propeller Design Projects**:\n\nIbrahim has designed:\n• **Propeller2.SLDPRT** - Advanced blade design with aerodynamic optimization\n• **Propeller.SLDPRT** - Classic 2-blade propeller design\n• **Assem1.SLDASM** - Complete assembly with drive mechanism\n\nFeatures:\n✓ Aerodynamic blade geometry\n✓ Precision balancing\n✓ Material specifications\n✓ Manufacturing-ready drawings\n✓ Motion study included\n\nThese designs are perfect for drone, helicopter, or turbine applications!`;
    } else if (lowerInput.includes('housing')) {
      return `🏢 **Housing Component Design**:\n\n**Housing.SLDPRT** - Professional enclosure design featuring:\n✓ Protective shell design\n✓ Component mounting points\n✓ Ventilation channels\n✓ Cable routing\n✓ Aesthetic considerations\n✓ Manufacturing specifications\n\nDesigned with industrial standards for durability and functionality!`;
    } else if (lowerInput.includes('assembly')) {
      return `🔧 **Assembly Design - Assem1.SLDASM**:\n\nComplete mechanical assembly featuring:\n• Multi-component integration\n• Constraint-based assembly logic\n• Motion studies for verification\n• Exploded views for documentation\n• BOM (Bill of Materials) generation\n• Manufacturing sequencing\n\nFull assembly ready for prototype production!`;
    }
    return cadResponses[Math.floor(Math.random() * cadResponses.length)];
  }

  // Web Development
  const webDevResponses = [
    "💻 **Full Stack Development (MERN)**:\n\n**Frontend**:\n• React.js (Hooks, Context API, Component Lifecycle)\n• HTML5 & CSS3 (Responsive Design)\n• JavaScript ES6+ (Modern Features)\n• State Management (Redux, Context)\n\n**Backend**:\n• Node.js & Express.js\n• RESTful APIs\n• Authentication & Authorization\n• Middleware & Error Handling\n\n**Database**:\n• MongoDB (Document Design)\n• Schema Validation\n• Aggregation Pipeline\n• Indexing & Performance\n\nIbrahim is a certified Full Stack Developer from PLP Academy!",
    
    "🌐 Ibrahim's Web Projects:\n1. **Online Voting System** - Full MERN app with authentication\n2. **AI Chatbot** - Gemini API integration (this one!)\n3. **Portfolio Website** - Dynamic React application\n4. **IoT Dashboard** - Real-time data visualization\n\nAll projects follow best practices for security, performance, and user experience!",
    
    "⚡ **Web Development Skills**:\n✓ Responsive Design (Mobile-first approach)\n✓ Performance Optimization\n✓ SEO Best Practices\n✓ API Integration\n✓ State Management\n✓ Component Architecture\n✓ Testing & Debugging\n✓ Deployment & DevOps\n\nExperts in creating scalable, maintainable web applications!",
    
    "🔐 **Web Security**:\nIbrahim implements:\n• JWT Authentication\n• Password Hashing (bcrypt)\n• XSS Protection\n• CSRF Tokens\n• SQL Injection Prevention\n• Rate Limiting\n• HTTPS/TLS\n• CORS Configuration\n\nSecurity-first development approach!",
    
    "📊 **Database Design**:\n• Normalized and denormalized schemas\n• Proper indexing strategies\n• Transaction handling\n• Data validation\n• Backup & recovery\n• Performance monitoring\n\nOptimized for speed and scalability!",
  ];

  if (lowerInput.match(/web|react|node|express|mongodb|mern|frontend|backend|api|database|voting|fullstack/i)) {
    if (lowerInput.includes('voting')) {
      return `🗳️ **Online Voting System Project**:\n\n✓ **Features**:\n• User Registration & Login\n• Secure Authentication\n• Real-time Vote Counting\n• Vote Verification\n• Results Dashboard\n• Admin Panel\n• Responsive Design\n\n✓ **Tech Stack**:\nReact | Node.js | Express | MongoDB\n\n✓ **Live Demo**:\nhttps://my-online-voting-system-project.vercel.app/\n\n✓ **Security**:\n• Password encryption\n• Session management\n• Vote verification\n• Admin authentication\n\nProduction-ready voting platform!`;
    }
    return webDevResponses[Math.floor(Math.random() * webDevResponses.length)];
  }

  // Game Development
  const gameDevResponses = [
    "🎮 **Game Development with Unity**:\n\n**Technical Skills**:\n✓ C# Programming\n✓ Game Physics & Colliders\n✓ Lighting & Rendering\n✓ Animation Systems\n✓ UI/UX Implementation\n✓ Performance Optimization\n✓ Audio Integration\n✓ Scene Management\n\n**Game Design**:\n✓ Game Mechanics\n✓ Level Design\n✓ Player Progression\n✓ User Experience\n✓ Difficulty Balancing\n✓ Gameplay Flow\n\nIbrahim has developed interactive 3D games with engaging mechanics!",
    
    "🕹️ **Game Projects**:\n1. Interactive 3D environments\n2. Physics-based gameplay\n3. Engaging mechanics\n4. Intuitive controls\n5. Smooth performance\n\nAll games demonstrate advanced Unity development skills!",
    
    "🎯 **Game Programming Expertise**:\n• Scripting in C#\n• Physics simulation\n• Collision detection\n• Event systems\n• Input handling\n• Animation blending\n• Particle systems\n• Audio management\n\nCreating immersive gaming experiences!",
  ];

  if (lowerInput.match(/game|unity|c#|gaming|3d game|play|game design|mechanic/i)) {
    return gameDevResponses[Math.floor(Math.random() * gameDevResponses.length)];
  }

  // IoT & Embedded Systems
  const iotResponses = [
    "🔌 **IoT & Embedded Systems**:\n\n**Microcontrollers**:\n• Arduino (Uno, Mega, Nano)\n• ESP32 (WiFi enabled)\n• Sensor integration\n• Serial communication\n• PWM control\n\n**Sensors**:\n• Temperature/Humidity\n• Motion detection\n• Light sensors\n• Distance sensors\n• Pressure sensors\n\n**Projects**:\n• IoT Sensor Dashboard\n• Real-time monitoring\n• Data logging\n• Remote control systems\n\nBuilding connected smart systems!",
    
    "📡 **IoT Dashboard Features**:\n✓ Real-time data visualization\n✓ Multiple sensor integration\n✓ Historical data tracking\n✓ Alert systems\n✓ Remote monitoring\n✓ Cloud integration\n✓ Responsive UI\n\nSee live sensor data on intuitive dashboards!",
    
    "⚡ **Embedded Systems Skills**:\n• C/C++ programming\n• Hardware interfacing\n• Serial communication\n• MQTT protocols\n• WiFi connectivity\n• Power management\n• Debugging tools\n\nExpert in connecting physical and digital worlds!",
  ];

  if (lowerInput.match(/iot|arduino|esp32|embedded|sensor|microcontroller|dashboard|iot project/i)) {
    return iotResponses[Math.floor(Math.random() * iotResponses.length)];
  }

  // Electronics & PCB
  const electronicsResponses = [
    "🔌 **PCB Design & Electronics**:\n\n**Skills**:\n✓ Circuit schematic design\n✓ PCB layout (CAM)\n✓ Component selection\n✓ Power distribution\n✓ Signal integrity\n✓ Thermal management\n✓ Manufacturing specifications\n\n**Applications**:\n• IoT devices\n• Embedded systems\n• Arduino shields\n• Custom controllers\n• Sensor interfaces\n\n**Tools**:\n• EDA Software (KiCAD, Eagle)\n• Simulation tools\n• Manufacturing files (Gerber)\n\nDesigning professional-grade PCBs!",
    
    "⚙️ **Circuit Design**:\n• Analog & digital circuits\n• Power electronics\n• Signal conditioning\n• Microcontroller circuits\n• Communication interfaces\n• Prototyping & testing\n\nFrom concept to manufactured boards!",
  ];

  if (lowerInput.match(/pcb|electronic|circuit|board|hardware design|schematic/i)) {
    return electronicsResponses[Math.floor(Math.random() * electronicsResponses.length)];
  }

  // AI & Machine Learning
  const aiResponses = [
    "🤖 **AI & Machine Learning**:\n\n**Current Focus**:\n✓ Gemini API Integration (This Chatbot!)\n✓ Natural Language Processing\n✓ AI-powered responses\n✓ Context-aware conversations\n\n**Skills**:\n• Machine Learning algorithms\n• Data analysis\n• Python programming\n• Model training\n• Data preprocessing\n• Feature engineering\n• Neural networks basics\n\nBringing intelligence to applications!",
    
    "🧠 **This AI Chatbot**:\n• Powered by Google Gemini API\n• Context-aware responses\n• Natural language understanding\n• Real-time processing\n• Fallback responses\n• Personality customization\n\nExperience Ibrahim's AI integration firsthand!",
  ];

  if (lowerInput.match(/ai|machine learning|gemini|api|nlp|neural|data science|ml|artificial intelligence/i)) {
    return aiResponses[Math.floor(Math.random() * aiResponses.length)];
  }

  // Skills & Expertise
  const skillsResponses = [
    "✨ **Ibrahim's Complete Skill Set**:\n\n**🌐 Web Development**:\nReact, Node.js, Express, MongoDB, JavaScript, HTML5, CSS3\n\n**📐 CAD & Design**:\nSolidWorks, 3D Modeling, CAM, Technical Drawings\n\n**🎮 Game Development**:\nUnity, C#, Game Physics, Game Design\n\n**🔌 Embedded Systems**:\nArduino, ESP32, IoT, Microcontrollers\n\n**🧬 Electronics & PCB**:\nCircuit Design, PCB Layout, CAM\n\n**🤖 AI & ML**:\nMachine Learning, Data Analysis, Gemini API\n\n**🔐 Security**:\nEthical Hacking, Network Security, Penetration Testing\n\n**🛠️ Tools & Others**:\nGit/GitHub, MATLAB, Python, Project Management\n\nA truly versatile developer!",
    
    "💼 **Professional Background**:\n• Mechanical Engineering Student\n• Full Stack Developer (Certified)\n• Passionate about technology\n• Problem solver\n• Team player\n• Continuous learner\n\nAlways exploring new technologies!",
    
    "🏆 **Key Strengths**:\n1. **Versatility** - Multiple tech stacks\n2. **Technical Depth** - Deep knowledge in specializations\n3. **Problem Solving** - Creative solutions\n4. **Documentation** - Clear technical writing\n5. **Collaboration** - Strong team skills\n6. **Innovation** - Always pushing boundaries\n\nReady for challenging projects!",
  ];

  if (lowerInput.match(/skill|expertise|good at|capable|able to|what can|proficient|strength|experience/i)) {
    return skillsResponses[Math.floor(Math.random() * skillsResponses.length)];
  }

  // Contact & Links
  const contactResponses = [
    "📧 **Contact Ibrahim**:\n\n📧 Email: ibrahimmutua315@gmail.com\n🐙 GitHub: https://github.com/ibrahimmutua\n💼 LinkedIn: Check his profile!\n🌐 Portfolio: This website!\n\nFeel free to reach out for collaborations, opportunities, or questions!",
    
    "📞 **How to Connect**:\n• Email: ibrahimmutua315@gmail.com (Best for inquiries)\n• GitHub: github.com/ibrahimmutua (See his code)\n• This Portfolio: Explore his projects\n• LinkedIn: Professional network\n\nIbrahim loves connecting with fellow developers!",
  ];

  if (lowerInput.match(/contact|email|github|linkedin|connect|reach|message|call|phone/i)) {
    return contactResponses[Math.floor(Math.random() * contactResponses.length)];
  }

  // About Ibrahim
  const aboutResponses = [
    "👨‍💼 **About Ibrahim Mutua Rose**:\n\n**Title**: Mechanical Engineering Student | Full Stack Developer\n**Location**: Kenya\n**Passion**: Technology, Innovation, Problem Solving\n\n**Background**:\n• Certified Full Stack Developer (MERN Stack) - PLP Academy\n• Mechanical Engineering student with practical skills\n• Passionate about connecting software and hardware\n\n**Why He's Unique**:\n• Combines mechanical engineering with software development\n• Builds complete solutions from hardware to web\n• Always learning new technologies\n• Strong passion for innovation\n\nA truly multidisciplinary developer!",
    
    "🌟 **Ibrahim's Journey**:\n• Started with web development\n• Expanded to game development\n• Mastered CAD design\n• Diving into IoT and embedded systems\n• Now working with AI integration\n\nConstantly evolving and learning!",
    
    "🚀 **Professional Summary**:\nIbrahim is a talented young developer bridging the gap between mechanical engineering and software development. With expertise spanning full-stack web development, CAD design, game development, embedded systems, and AI integration, he's equipped to handle complex projects from concept to deployment.\n\nHis passion for technology and continuous learning makes him an asset to any team!",
  ];

  if (lowerInput.match(/who|about|introduce|tell me about|background|biography|story/i)) {
    return aboutResponses[Math.floor(Math.random() * aboutResponses.length)];
  }

  // Portfolio & Projects
  const projectsResponses = [
    "🎯 **Ibrahim's Portfolio Highlights**:\n\n1. **Online Voting System** (MERN)\n   - Full-stack secure platform\n   - Live: https://my-online-voting-system-project.vercel.app/\n\n2. **AI Chatbot** (This one!)\n   - Gemini API powered\n   - Context-aware responses\n\n3. **IoT Dashboard**\n   - Real-time sensor monitoring\n   - Arduino/ESP32 integration\n\n4. **CAD Designs**\n   - Professional mechanical assemblies\n   - Propellers, housings, complex systems\n\n5. **Unity Games**\n   - Interactive 3D environments\n   - Engaging gameplay\n\n6. **PCB Designs**\n   - Professional circuit layouts\n   - Manufacturing-ready\n\nEach project showcases mastery in its domain!",
    
    "📂 **Project Categories**:\n\n**Web Projects**: Voting system, Portfolio website, Dashboards\n**Game Projects**: 3D games, Interactive experiences\n**Hardware Projects**: IoT systems, Sensors, Embedded systems\n**Design Projects**: CAD assemblies, PCB designs, 3D models\n\nDiversity in projects = Versatile developer!",
  ];

  if (lowerInput.match(/project|portfolio|work|built|created|showcase|examples/i)) {
    return projectsResponses[Math.floor(Math.random() * projectsResponses.length)];
  }

  // Certifications & Education
  const educationResponses = [
    "🎓 **Education & Certifications**:\n\n✓ **Full Stack Developer Certification**\n   - Offered by: PLP Academy\n   - Stack: MERN (MongoDB, Express, React, Node.js)\n   - Skills: Web development, Database design, RESTful APIs\n\n✓ **Mechanical Engineering Student**\n   - Combining engineering with software skills\n   - Hands-on with CAD and simulation\n\n✓ **Continuous Learning**:\n   - AI & Machine Learning (Gemini API)\n   - Game Development (Unity)\n   - Embedded Systems (Arduino, ESP32)\n   - Cybersecurity (Ethical Hacking)\n\nAlways expanding knowledge!",
    
    "📚 **Learning Philosophy**:\nIbrahim believes in:\n• Practical, hands-on learning\n• Building real projects\n• Continuous skill development\n• Staying current with tech trends\n• Sharing knowledge with others\n\nEducation never stops!",
  ];

  if (lowerInput.match(/certificate|certification|education|degree|trained|study|learn|school|university/i)) {
    return educationResponses[Math.floor(Math.random() * educationResponses.length)];
  }

  // Fun & Casual
  const funResponses = [
    "😄 Ready to chat about anything tech! What's on your mind?",
    "💡 Curious about something? Fire away with your questions!",
    "🚀 Let's talk tech! What would you like to know?",
    "🤔 Great question! Ask me anything about Ibrahim!",
    "😊 Always happy to help! What can I tell you?",
    "🎉 This is fun! Got more questions?",
    "✨ I could talk about tech all day! Keep the questions coming!",
    "🌟 Great conversation! What else would you like to know?",
  ];

  // Greetings
  if (lowerInput.match(/^(hi|hello|hey|howdy|greetings|good morning|good afternoon|good evening|what's up|yo|sup)$/)) {
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // How are you
  if (lowerInput.match(/how are you|how's it going|how do you feel|what's up/i)) {
    const responses = [
      "I'm doing great! 😊 Ready to answer questions about Ibrahim. What would you like to know?",
      "Excellent! 🚀 I'm here and excited to chat about Ibrahim's work. What interests you?",
      "Fantastic! ✨ Let's talk about Ibrahim's amazing projects and skills!",
      "Perfect! 💻 Ready to help you learn about Ibrahim. What can I tell you?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Thanks & Gratitude
  if (lowerInput.match(/thank|thanks|appreciate|gratitude/i)) {
    return "You're welcome! 😊 Happy to help. Got any other questions about Ibrahim?";
  }

  // Humor
  if (lowerInput.match(/funny|joke|make me laugh|laugh|lol|haha/i)) {
    const jokes = [
      "Why do programmers prefer dark mode? 🌙 Because light attracts bugs! 🐛",
      "How many programmers does it take to change a light bulb? 💡 None, that's a hardware problem!",
      "Why did the developer go broke? 💸 Because he used up all his cache!",
      "How many CAD designers does it take to change a lightbulb? 🔧 1 - they'll make it perfectly parametric first!",
      "A SQL query walks into a bar, walks up to two tables and asks: Can I join you? 🍺",
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  // Default responses
  const defaultResponses = [
    "That's a great question! 🤔 I'm designed to answer questions about Ibrahim's skills, projects, and experience. Could you rephrase your question? For example:\n• What are Ibrahim's skills?\n• Tell me about his projects\n• Can he do [specific technology]?\n• How to contact Ibrahim?\n• Tell me about CAD designs",
    
    "Hmm, interesting! 🤓 I'm specifically trained to help with questions about Ibrahim's work and expertise. Try asking me about:\n• His technical skills\n• Specific projects\n• CAD & design work\n• Web development\n• Game development\n• IoT & embedded systems",
    
    "I'm not sure about that one! 🤷 But I'd love to help with questions about Ibrahim's:\n✓ Projects & portfolio\n✓ Technical skills\n✓ Experience & background\n✓ Contact information\n✓ Specific technologies\n\nWhat would you like to know?",
    
    "That's outside my expertise! 😅 But ask me anything about:\n🌐 Web Development (React, Node.js, MERN)\n📐 CAD Design (SolidWorks)\n🎮 Game Development (Unity)\n🔌 IoT & Embedded Systems\n🤖 AI & Machine Learning\n\nWhat interests you?",
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};
