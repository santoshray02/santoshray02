const fs = require('fs');
const path = require('path');

// Load profile data
const profile = JSON.parse(fs.readFileSync(path.join(__dirname, '../content/profile.json'), 'utf8'));

// Helper function to generate executive website
function generateExecutiveWebsite(data) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - VP of Technology</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Space+Mono&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary: #0f1419;
            --secondary: #1a1f2e;
            --accent: #2a4d3a;
            --highlight: #3a5f4d;
            --text-primary: #ffffff;
            --text-secondary: #b8c5d6;
            --success: #4ade80;
            --gradient-start: #1e3a2f;
            --gradient-end: #2d5a4a;
            --emerald: #059669;
            --mint: #6ee7b7;
            --slate: #334155;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: var(--primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }
        
        /* Animated background */
        .bg-animation {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            overflow: hidden;
        }
        
        .bg-animation::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            top: -50%;
            left: -50%;
            background: radial-gradient(circle, rgba(45, 134, 89, 0.1) 0%, transparent 70%);
            animation: rotate 30s linear infinite;
        }
        
        @keyframes rotate {
            to { transform: rotate(360deg); }
        }
        
        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(10, 31, 27, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            padding: 1rem 0;
            transition: all 0.3s ease;
        }
        
        nav.scrolled {
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }
        
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--emerald), var(--mint));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }
        
        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s ease;
            position: relative;
        }
        
        .nav-links a:hover {
            color: var(--success);
        }
        
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--success);
            transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
            width: 100%;
        }
        
        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 2rem;
            position: relative;
        }
        
        .hero-content {
            max-width: 1200px;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        
        .hero-image {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .profile-photo {
            width: 350px;
            height: 350px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid var(--emerald);
            box-shadow: 0 0 50px rgba(45, 134, 89, 0.3);
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .hero-text h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.2;
        }
        
        .hero-text h1 .highlight {
            background: linear-gradient(135deg, var(--emerald), var(--mint));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .hero-subtitle {
            font-size: 1.5rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
        }
        
        .hero-description {
            font-size: 1.1rem;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            line-height: 1.8;
        }
        
        .cta-buttons {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
            color: white;
            box-shadow: 0 4px 15px rgba(45, 134, 89, 0.3);
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(45, 134, 89, 0.4);
        }
        
        .btn-secondary {
            border: 2px solid var(--highlight);
            color: var(--highlight);
        }
        
        .btn-secondary:hover {
            background: var(--highlight);
            color: white;
        }
        
        /* Animated terminal */
        .terminal {
            background: rgba(15, 41, 34, 0.8);
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            font-family: 'Space Mono', monospace;
            position: relative;
            overflow: hidden;
        }
        
        .terminal::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 30px;
            background: rgba(10, 31, 27, 0.9);
            display: flex;
            align-items: center;
            padding: 0 1rem;
        }
        
        .terminal-header {
            position: absolute;
            top: 8px;
            left: 1rem;
            display: flex;
            gap: 0.5rem;
        }
        
        .terminal-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }
        
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }
        
        .terminal-content {
            margin-top: 2rem;
            font-size: 0.9rem;
        }
        
        .terminal-line {
            margin: 0.5rem 0;
            opacity: 0;
            animation: fadeIn 0.5s ease forwards;
        }
        
        .terminal-line:nth-child(1) { animation-delay: 0.1s; }
        .terminal-line:nth-child(2) { animation-delay: 0.3s; }
        .terminal-line:nth-child(3) { animation-delay: 0.5s; }
        .terminal-line:nth-child(4) { animation-delay: 0.7s; }
        .terminal-line:nth-child(5) { animation-delay: 0.9s; }
        
        @keyframes fadeIn {
            to {
                opacity: 1;
            }
        }
        
        .prompt { color: var(--success); }
        .command { color: var(--text-primary); }
        .output { color: var(--text-secondary); }
        
        /* Sections */
        section {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-align: center;
        }
        
        .section-subtitle {
            text-align: center;
            color: var(--text-secondary);
            font-size: 1.2rem;
            margin-bottom: 3rem;
        }
        
        /* Expertise Grid */
        .expertise-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .expertise-card {
            background: rgba(15, 41, 34, 0.5);
            border: 1px solid rgba(45, 134, 89, 0.2);
            border-radius: 10px;
            padding: 2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .expertise-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, var(--emerald), var(--mint));
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }
        
        .expertise-card:hover {
            transform: translateY(-5px);
            border-color: var(--highlight);
        }
        
        .expertise-card:hover::before {
            transform: scaleX(1);
        }
        
        .expertise-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .expertise-title {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: var(--success);
        }
        
        /* Tech Stack */
        .tech-categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .tech-category {
            background: rgba(15, 41, 34, 0.3);
            border-radius: 10px;
            padding: 1.5rem;
            border: 1px solid rgba(45, 134, 89, 0.1);
        }
        
        .tech-category h3 {
            color: var(--highlight);
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }
        
        .tech-items {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        
        .tech-item {
            background: rgba(45, 134, 89, 0.2);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        
        .tech-item:hover {
            background: var(--highlight);
            transform: scale(1.05);
        }
        
        /* Leadership Section */
        .leadership-philosophy {
            background: rgba(15, 41, 34, 0.3);
            border-radius: 15px;
            padding: 3rem;
            margin: 3rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .leadership-philosophy::before {
            content: '"';
            position: absolute;
            top: -20px;
            left: 20px;
            font-size: 8rem;
            color: rgba(45, 134, 89, 0.1);
        }
        
        .philosophy-text {
            font-size: 1.3rem;
            line-height: 1.8;
            font-style: italic;
            color: var(--text-secondary);
            position: relative;
            z-index: 1;
        }
        
        /* Contact Section */
        .contact-section {
            background: rgba(15, 41, 34, 0.5);
            border-radius: 15px;
            padding: 3rem;
            text-align: center;
        }
        
        .contact-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        
        .contact-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8rem 1.5rem;
            background: rgba(45, 134, 89, 0.2);
            border-radius: 30px;
            color: var(--text-primary);
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .contact-link:hover {
            background: var(--highlight);
            transform: translateY(-2px);
        }
        
        /* Footer */
        footer {
            text-align: center;
            padding: 2rem;
            color: var(--text-secondary);
            border-top: 1px solid rgba(45, 134, 89, 0.2);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .hero-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .hero-text h1 {
                font-size: 2.5rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .expertise-grid {
                grid-template-columns: 1fr;
            }
            
            .cta-buttons {
                justify-content: center;
            }
            
            .profile-photo {
                width: 250px;
                height: 250px;
            }
        }
        
        /* Scroll animations */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <div class="bg-animation"></div>
    
    <nav id="navbar">
        <div class="nav-container">
            <div class="logo">${data.name}</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#technology">Technology</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <section class="hero" id="home">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Hi, I'm <span class="highlight">${data.name}</span></h1>
                <p class="hero-subtitle">VP of Technology | Agentic AI Architect</p>
                <p class="hero-description">
                    Pioneering the future of autonomous AI systems, I specialize in building sophisticated 
                    multi-agent architectures and intelligent workflow automation that revolutionize how 
                    businesses operate at scale.
                </p>
                <div class="cta-buttons">
                    <a href="#contact" class="btn btn-primary">
                        <span>Let's Connect</span>
                        <span>→</span>
                    </a>
                    <a href="#expertise" class="btn btn-secondary">
                        <span>View My Work</span>
                    </a>
                </div>
            </div>
            <div class="hero-image">
                <img src="images/photo.png" alt="${data.name}" class="profile-photo" />
            </div>
        </div>
    </section>
    
    <section id="expertise" class="fade-in">
        <h2 class="section-title">Agentic AI & Automation Expertise</h2>
        <p class="section-subtitle">Building autonomous systems that think, learn, and act</p>
        
        <div class="expertise-grid">
            ${data.expertise.aiAgentsLLM.sections.llms.items.concat(data.expertise.aiAgentsLLM.sections.agents.items).map((item, index) => {
                const icons = ['🤖', '🧠', '💡', '⚡', '🔄', '🎯', '📊', '🔧'];
                return `
                <div class="expertise-card">
                    <div class="expertise-icon">${icons[index % icons.length]}</div>
                    <h3 class="expertise-title">${item.label}</h3>
                    <p>${item.description}</p>
                </div>
                `;
            }).join('')}
        </div>
        
        <h3 style="margin-top: 4rem; margin-bottom: 2rem; text-align: center; color: var(--success);">
            Workflow Automation Excellence
        </h3>
        <div class="expertise-grid">
            <div class="expertise-card">
                <div class="expertise-icon">⚙️</div>
                <h3 class="expertise-title">Process Orchestration</h3>
                <p>Designing complex workflows that seamlessly integrate AI agents with business processes</p>
            </div>
            <div class="expertise-card">
                <div class="expertise-icon">🔗</div>
                <h3 class="expertise-title">Tool Integration</h3>
                <p>Connecting disparate systems through intelligent APIs and custom automation frameworks</p>
            </div>
            <div class="expertise-card">
                <div class="expertise-icon">📈</div>
                <h3 class="expertise-title">Scalable Automation</h3>
                <p>Building enterprise-grade automation solutions that handle millions of operations daily</p>
            </div>
            <div class="expertise-card">
                <div class="expertise-icon">🎛️</div>
                <h3 class="expertise-title">Decision Intelligence</h3>
                <p>Implementing AI-driven decision engines that adapt and optimize in real-time</p>
            </div>
        </div>
    </section>
    
    <section id="technology" class="fade-in">
        <h2 class="section-title">Technology Stack</h2>
        <p class="section-subtitle">Mastery across the modern AI ecosystem</p>
        
        <div class="tech-categories">
            ${data.techStack.categories.map(category => `
            <div class="tech-category">
                <h3>${category.name}</h3>
                <div class="tech-items">
                    ${category.items.map(item => `<span class="tech-item">${item}</span>`).join('')}
                </div>
            </div>
            `).join('')}
        </div>
    </section>
    
    <section id="leadership" class="fade-in">
        <h2 class="section-title">Leadership Philosophy</h2>
        <p class="section-subtitle">Building teams that innovate</p>
        
        <div class="leadership-philosophy">
            <p class="philosophy-text">
                "The future belongs to autonomous systems that augment human intelligence. 
                My focus is on building agentic AI architectures that not only automate tasks 
                but create intelligent workflows that learn, adapt, and evolve with your business needs."
            </p>
        </div>
    </section>
    
    <section id="contact" class="fade-in">
        <div class="contact-section">
            <h2 class="section-title">Let's Build the Future Together</h2>
            <p class="section-subtitle">
                Whether you're looking to transform your business with AI or discuss the latest in technology leadership, 
                I'm always open to meaningful conversations.
            </p>
            
            <div class="contact-links">
                ${data.contact.links.map(link => `
                <a href="${link.url}" class="contact-link" target="_blank">
                    <span>${link.platform === 'GitHub' ? '⚡' : '🔗'}</span>
                    <span>${link.platform}</span>
                </a>
                `).join('')}
                <a href="mailto:santoshray02@gmail.com" class="contact-link">
                    <span>📧</span>
                    <span>Email</span>
                </a>
                <a href="https://stackoverflow.com/users/6291749/santosh-ray" class="contact-link" target="_blank">
                    <span>📚</span>
                    <span>Stack Overflow</span>
                </a>
            </div>
        </div>
    </section>
    
    <footer>
        <p>&copy; ${new Date().getFullYear()} ${data.name}. Innovating at the speed of thought.</p>
    </footer>
    
    <script>
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Fade in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
        
        // Terminal typing effect
        const terminalLines = document.querySelectorAll('.terminal-line');
        terminalLines.forEach((line, index) => {
            line.style.animationDelay = \`\${index * 0.5}s\`;
        });
    </script>
</body>
</html>`;
  
  return html;
}

// Build the executive website
const html = generateExecutiveWebsite(profile);
fs.writeFileSync(path.join(__dirname, '../public/index.html'), html);
console.log('✅ Executive website generated successfully');