import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! 👋 I'm Ibrahim's AI Assistant powered by Google Gemini. Ask me anything - about his skills, projects, or any general question. I can help with coding, research, creative writing, and much more!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getIbrahimContext = () => {
    return `You are an AI assistant representing Ibrahim Mutua Rose - a talented Mechanical Engineering Student and Full Stack Developer. You're friendly, helpful, professional, and enthusiastic about technology.

ABOUT IBRAHIM:
- Name: Ibrahim Mutua Rose
- Title: Mechanical Engineering Student | Full Stack Developer
- Location: Kenya
- Email: ibrahimmutua315@gmail.com
- GitHub: https://github.com/ibrahimmutua
- Certification: Full Stack Developer (MERN Stack) from PLP Academy

EXPERTISE & SKILLS:
Frontend: React.js, HTML5, CSS3, JavaScript (ES6+)
Backend: Node.js, Express.js, RESTful APIs
Database: MongoDB, Data Modeling
AI/ML: Machine Learning, Data Analysis, Gemini API Integration
CAD & Design: SolidWorks, CAM, 3D Modeling, Technical Drawings
Game Development: Unity, C#, Physics Engines, Game Design
Embedded Systems: Arduino, ESP32, IoT, Microcontroller Programming
Electronics: PCB Design, Circuit Design, Sensor Integration
Security: Ethical Hacking, Network Security, Penetration Testing
Other: MATLAB, Python Basics, GitHub, Project Management

NOTABLE PROJECTS:
1. Online Voting System (MERN)
   - Full-stack web application with secure authentication
   - Real-time vote counting and responsive design
   - Live: https://my-online-voting-system-project.vercel.app/

2. AI-Powered Chatbot (this assistant!)
   - Integrated with Google Gemini API
   - Interactive conversation system
   - Context-aware responses

3. IoT Sensor Dashboard
   - Real-time monitoring system
   - Arduino/ESP32 integration
   - Data visualization

4. SolidWorks CAD Designs
   - Complex mechanical assemblies
   - Technical drawings and CAM

5. PCB Design & Electronics
   - Custom PCB designs for IoT applications
   - Professional circuit design and prototyping

6. Unity Game Development
   - 3D interactive games with physics
   - Game mechanics and design

7. This Portfolio Website
   - Built with React
   - Dynamic content management
   - Responsive design

PERSONALITY & COMMUNICATION STYLE:
- Friendly and approachable
- Clear and professional in explanations
- Enthusiastic about technology and innovation
- Helpful and solution-oriented
- Use emojis appropriately to make responses engaging
- Provide practical examples when explaining concepts

INSTRUCTIONS:
1. When asked about Ibrahim: Provide accurate, helpful information from above
2. When asked about projects: Share details and links where applicable
3. For technical questions: Provide clear explanations; Ibrahim is knowledgeable
4. For general questions: Help as a knowledgeable AI assistant
5. Be conversational and engaging
6. Keep responses concise but informative
7. If asked to contact Ibrahim: Share his email (ibrahimmutua315@gmail.com)
8. Always be respectful and professional

Remember: You're representing Ibrahim, so embody his passion for technology and his helpful, collaborative nature!`;
  };

  const callGeminiAPI = async (userMessage) => {
    try {
      const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
      
      if (!API_KEY) {
        console.warn('Gemini API key not found, using fallback responses');
        return provideFallbackResponse(userMessage);
      }

      // Build conversation context for better responses
      const conversationContext = messages
        .slice(-6)  // Include last 6 messages for context
        .map(msg => `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
        .join('\n');

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${getIbrahimContext()}\n\nPrevious Conversation Context:\n${conversationContext}\n\nUser's New Question: ${userMessage}\n\nProvide a helpful, engaging, and natural response. Keep it concise but informative.`
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.9,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
            safetySettings: [
              {
                category: 'HARM_CATEGORY_HARASSMENT',
                threshold: 'BLOCK_NONE'
              },
              {
                category: 'HARM_CATEGORY_HATE_SPEECH',
                threshold: 'BLOCK_NONE'
              },
              {
                category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                threshold: 'BLOCK_NONE'
              },
              {
                category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                threshold: 'BLOCK_NONE'
              }
            ]
          })
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.error('API Error:', error);
        return provideFallbackResponse(userMessage);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      } else {
        console.warn('No valid response from API, using fallback');
        return provideFallbackResponse(userMessage);
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return provideFallbackResponse(userMessage);
    }
  };

  const provideFallbackResponse = (userMessage) => {
    const lowerInput = userMessage.toLowerCase();

    // Skills & Expertise questions
    if (lowerInput.match(/skill|expertise|expert|good at|capable|able to|what can|can you|proficient/i)) {
      if (lowerInput.includes('cad') || lowerInput.includes('solidworks') || lowerInput.includes('design')) {
        return "🏗️ Ibrahim has extensive CAD & Design skills:\n• SolidWorks (advanced)\n• 3D Modeling & Rendering\n• CAM (Computer-Aided Manufacturing)\n• Assembly Design\n• Technical Drawings\n• Mechanical Design\n\nHe uses these skills in his projects regularly!";
      } else if (lowerInput.includes('game') || lowerInput.includes('unity')) {
        return "🎮 Game Development Skills:\n• Unity Game Engine\n• C# Programming\n• Game Physics\n• Game Design\n• Interactive 3D environments\n• User Interface Design\n\nHe's built several interactive game projects!";
      }
      return "✨ Ibrahim's expertise spans:\n\n💻 **Web Development**: React, Node.js, Express, MongoDB (MERN Stack)\n🤖 **AI/ML**: Machine Learning, Data Analysis, Gemini API\n📐 **CAD Design**: SolidWorks, CAM, 3D Modeling\n🎮 **Game Dev**: Unity, C#, Game Physics\n🔌 **Electronics**: PCB Design, Arduino, ESP32, IoT\n🔐 **Security**: Ethical Hacking, Network Security\n📡 **Embedded Systems**: Microcontroller Programming, Sensor Integration\n\nHe's a certified Full Stack Developer (MERN) from PLP!";
    }
    
    // Projects & Work
    if (lowerInput.match(/project|portfolio|work|built|created|made|development|coding/i)) {
      if (lowerInput.includes('voting')) {
        return "🗳️ **Online Voting System** (MERN Project):\n• Full-stack web application\n• Secure authentication\n• Real-time vote counting\n• Responsive design\n• Live Demo: https://my-online-voting-system-project.vercel.app/\n\nTechStack: React, Node.js, Express, MongoDB";
      } else if (lowerInput.includes('game')) {
        return "🎮 **Unity Game Development**:\n• Interactive 3D games\n• Physics simulation\n• Engaging gameplay mechanics\n• Intuitive controls\n\nShowing advanced game development capabilities!";
      } else if (lowerInput.includes('pcb') || lowerInput.includes('circuit') || lowerInput.includes('electronics')) {
        return "🔌 **PCB Design & Electronics**:\n• Custom PCB designs\n• Sensor integration\n• Embedded systems\n• IoT applications\n• Professional circuit design\n• Prototyping and testing\n\nCombining mechanical engineering with electronics expertise!";
      }
      return "💼 **Notable Projects**:\n\n🗳️ Online Voting System (MERN) - https://my-online-voting-system-project.vercel.app/\n🤖 AI-Powered Chatbot (Gemini API Integration)\n🎮 Unity Game Development\n📐 SolidWorks CAD Designs\n🔌 PCB Design & Electronics\n📊 IoT Sensor Dashboard\n🌐 This Portfolio Website (React)\n\nCheck GitHub: https://github.com/ibrahimmutua";
    }
    
    // Contact & Connection
    if (lowerInput.match(/contact|email|reach|connect|linkedin|github|social|call|phone|message/i)) {
      return "📞 **Get in Touch with Ibrahim**:\n\n📧 Email: ibrahimmutua315@gmail.com\n🐙 GitHub: https://github.com/ibrahimmutua\n📍 Location: Kenya\n\nFeel free to:\n• Ask about collaboration opportunities\n• Discuss projects\n• Share feedback\n• Network and connect!\n\nI'll make sure your message gets to him! 👍";
    }
    
    // Education & Background
    if (lowerInput.match(/education|study|school|university|learn|background|degree|certified/i)) {
      return "🎓 **Ibrahim's Background**:\n\n📚 **Current**: Mechanical Engineering Student\n🏆 **Certification**: Full Stack Developer (MERN Stack) - PLP Academy\n\n🚀 **Passionate About**:\n• Building real-world applications\n• Combining mechanical & software engineering\n• IoT and embedded systems\n• AI & Machine Learning\n• Game development\n\nConstantly learning and expanding tech skills!";
    }
    
    // General information about Ibrahim
    if (lowerInput.match(/who|introduce|yourself|about|name|tell me/i)) {
      return "👋 **Hey! I'm Ibrahim's AI Assistant**\n\nI represent Ibrahim Mutua Rose:\n\n🧑‍💼 **About Him**:\n• Mechanical Engineering Student from Kenya\n• Full Stack Developer (MERN Certified)\n• Multi-disciplinary technologist\n• Passionate about AI, Game Dev, CAD, and Embedded Systems\n\n💡 **I can help you with**:\n• Information about his skills & expertise\n• Details about his projects\n• How to contact him\n• Technical questions (coding, design, IoT, etc.)\n\nAsk me anything! 🚀";
    }
    
    // Tech & Programming questions
    if (lowerInput.match(/javascript|react|node|express|mongodb|python|c#|code|programming|language|framework|library/i)) {
      if (lowerInput.includes('react')) {
        return "⚛️ **React Expertise**:\nIbrahim is proficient in React with experience in:\n• Component-based architecture\n• State management\n• Hooks (useState, useEffect, etc.)\n• React Router\n• Performance optimization\n• Building responsive UIs\n\nBuilt this portfolio and voting system using React!";
      } else if (lowerInput.includes('node') || lowerInput.includes('express')) {
        return "🛠️ **Node.js & Express**:\nBackend expertise includes:\n• RESTful API development\n• Express.js server setup\n• Middleware implementation\n• Database integration\n• Authentication & authorization\n• Error handling\n\nUsed in MERN stack projects!";
      } else if (lowerInput.includes('mongodb')) {
        return "🗄️ **MongoDB Skills**:\n• NoSQL database design\n• Document structure optimization\n• Query optimization\n• Aggregation pipelines\n• Data modeling\n• Integration with Node.js\n\nUsed in full-stack MERN applications!";
      }
      return "💻 **Technology Stack**:\n\nFrontend: React, HTML, CSS, JavaScript\nBackend: Node.js, Express.js\nDatabase: MongoDB\nOther: Arduino, ESP32, Unity (C#), SolidWorks\n\nIbrahim is versatile across multiple tech stacks!";
    }
    
    // Creative/Writing requests
    if (lowerInput.match(/write|create|generate|story|poem|content|explain|how does/i)) {
      return "I can help with that! Feel free to ask me to:\n\n✍️ Explain technical concepts\n📝 Help with writing and content\n🔍 Explain how things work\n💡 Brainstorm ideas\n📊 Analyze problems\n🎯 Provide solutions\n\nWhat would you like help with?";
    }
    
    // Default - friendly response
    return "😊 Great question! I'm Ibrahim's AI assistant. I can help with:\n\n📋 Information about Ibrahim (skills, projects, background)\n💼 Technical questions (coding, design, electronics)\n📞 Contact & collaboration opportunities\n💡 General questions & brainstorming\n🤔 Research & explanations\n\nTry asking about his skills, projects, or contact info. Or ask any question you'd like help with!\n\n🔗 For advanced AI responses, I work best when connected to the Gemini API.";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Get bot response
    const responseText = await callGeminiAPI(inputValue);

    const botMessage = {
      id: messages.length + 2,
      text: responseText,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <div className="chatbot-container">
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Open AI Assistant"
      >
        🤖
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="header-content">
              <h3>Ibrahim's AI Assistant</h3>
              <p className="header-subtitle">Powered by Google Gemini</p>
            </div>
            <button 
              className="close-btn"
              onClick={() => setIsOpen(false)}
              title="Close"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="message-content">
                  {msg.sender === 'bot' && <span className="bot-icon">🤖</span>}
                  <div className="message-text">
                    {msg.text.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
                <span className="message-time">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <span className="bot-icon">🤖</span>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="chatbot-input"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="send-btn"
              disabled={isLoading || !inputValue.trim()}
            >
              {isLoading ? '⏳' : '➤'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
