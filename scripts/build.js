const fs = require('fs');
const path = require('path');

// Load profile data
const profile = JSON.parse(fs.readFileSync(path.join(__dirname, '../content/profile.json'), 'utf8'));
const websiteConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../content/website-config.json'), 'utf8'));

// Helper function to generate README content
function generateReadme(data) {
  let content = `# 💻 ${data.name}\n`;
  content += `${data.tagline}\n\n`;
  content += `${data.introduction}\n\n`;
  
  // About section
  content += `## 🔹 About Me\n\n`;
  content += `### ${data.about.currentRole.title}\n`;
  data.about.currentRole.points.forEach(point => {
    content += `- ${point}\n`;
  });
  content += `\n### ${data.about.entrepreneurship.title}\n`;
  data.about.entrepreneurship.points.forEach(point => {
    content += `- ${point}\n`;
  });
  
  // AI Agents & LLM Expertise
  content += `\n## ${data.expertise.aiAgentsLLM.title}\n\n`;
  
  // LLMs section
  content += `### ${data.expertise.aiAgentsLLM.sections.llms.title}\n`;
  data.expertise.aiAgentsLLM.sections.llms.items.forEach(item => {
    content += `- **${item.label}:** ${item.description}\n`;
  });
  
  // Agents section
  content += `\n### ${data.expertise.aiAgentsLLM.sections.agents.title}\n`;
  data.expertise.aiAgentsLLM.sections.agents.items.forEach(item => {
    content += `- **${item.label}:** ${item.description}\n`;
  });
  
  // Tech Stack
  content += `\n## ${data.techStack.title}\n`;
  data.techStack.categories.forEach(category => {
    content += `- **${category.name}:** ${category.items.join(', ')}\n`;
  });
  
  // What I Do
  content += `\n## ${data.whatIDo.title}\n`;
  data.whatIDo.items.forEach(item => {
    content += `- ✅ **${item.label}:** ${item.description}\n`;
  });
  
  // Contact
  content += `\n## ${data.contact.title}\n`;
  data.contact.links.forEach(link => {
    content += `- **${link.platform}:** [${link.url}](${link.url})\n`;
  });
  
  content += `-->\n`;
  
  return content;
}

// Helper function to generate HTML for website
function generateWebsite(data) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - ${data.title}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 0;
            text-align: center;
            margin-bottom: 40px;
            border-radius: 10px;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .tagline {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .intro {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        
        section {
            background: white;
            padding: 30px;
            margin-bottom: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        h2 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 1.8rem;
        }
        
        h3 {
            color: #444;
            margin-bottom: 15px;
            margin-top: 20px;
            font-size: 1.4rem;
        }
        
        ul {
            list-style: none;
            padding-left: 0;
        }
        
        li {
            margin-bottom: 10px;
            padding-left: 25px;
            position: relative;
        }
        
        li:before {
            content: "▸";
            position: absolute;
            left: 0;
            color: #667eea;
            font-weight: bold;
        }
        
        .tech-stack {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .tech-category {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }
        
        .tech-category h4 {
            color: #667eea;
            margin-bottom: 10px;
        }
        
        .contact-links {
            display: flex;
            gap: 20px;
            margin-top: 20px;
        }
        
        .contact-link {
            background: #667eea;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            transition: background 0.3s;
        }
        
        .contact-link:hover {
            background: #764ba2;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            .tech-stack {
                grid-template-columns: 1fr;
            }
            
            .contact-links {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>${data.name}</h1>
            <p class="tagline">${data.title}</p>
        </header>
        
        <div class="intro">
            <p>${data.introduction}</p>
        </div>
        
        <section>
            <h2>About Me</h2>
            <h3>${data.about.currentRole.title}</h3>
            <ul>
                ${data.about.currentRole.points.map(point => `<li>${point}</li>`).join('\n                ')}
            </ul>
            
            <h3>${data.about.entrepreneurship.title}</h3>
            <ul>
                ${data.about.entrepreneurship.points.map(point => `<li>${point}</li>`).join('\n                ')}
            </ul>
        </section>
        
        <section>
            <h2>${data.expertise.aiAgentsLLM.title}</h2>
            
            <h3>${data.expertise.aiAgentsLLM.sections.llms.title}</h3>
            <ul>
                ${data.expertise.aiAgentsLLM.sections.llms.items.map(item => 
                    `<li><strong>${item.label}:</strong> ${item.description}</li>`
                ).join('\n                ')}
            </ul>
            
            <h3>${data.expertise.aiAgentsLLM.sections.agents.title}</h3>
            <ul>
                ${data.expertise.aiAgentsLLM.sections.agents.items.map(item => 
                    `<li><strong>${item.label}:</strong> ${item.description}</li>`
                ).join('\n                ')}
            </ul>
        </section>
        
        <section>
            <h2>${data.techStack.title}</h2>
            <div class="tech-stack">
                ${data.techStack.categories.map(category => `
                <div class="tech-category">
                    <h4>${category.name}</h4>
                    <p>${category.items.join(', ')}</p>
                </div>
                `).join('\n                ')}
            </div>
        </section>
        
        <section>
            <h2>${data.whatIDo.title}</h2>
            <ul>
                ${data.whatIDo.items.map(item => 
                    `<li>✅ <strong>${item.label}:</strong> ${item.description}</li>`
                ).join('\n                ')}
            </ul>
        </section>
        
        <section>
            <h2>${data.contact.title}</h2>
            <div class="contact-links">
                ${data.contact.links.map(link => 
                    `<a href="${link.url}" class="contact-link" target="_blank">${link.platform}</a>`
                ).join('\n                ')}
            </div>
        </section>
    </div>
</body>
</html>`;
  
  return html;
}

// Helper function to generate minimal website (your existing style)
function generateMinimalWebsite(config) {
  const data = config.versions.minimal;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - ${data.title}</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        
        .container {
            background: white;
            padding: 40px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 10px;
        }
        
        .info-section {
            margin: 20px 0;
        }
        
        .info-item {
            margin: 10px 0;
        }
        
        .info-label {
            font-weight: bold;
            display: inline-block;
            width: 120px;
        }
        
        .social-links {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
        }
        
        .social-links a {
            margin-right: 20px;
            color: #0066cc;
            text-decoration: none;
        }
        
        .social-links a:hover {
            text-decoration: underline;
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            color: #666;
            font-size: 0.9em;
        }
    </style>
    ${config.analytics?.googleAnalytics ? `
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${config.analytics.googleAnalytics}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${config.analytics.googleAnalytics}');
    </script>` : ''}
</head>
<body>
    <div class="container">
        <h1>${data.name}</h1>
        <p><strong>${data.title}</strong></p>
        <p>${data.location}</p>
        
        <div class="info-section">
            <h2>About Me</h2>
            <p>${data.about}</p>
        </div>
        
        <div class="info-section">
            <h2>Personal Details</h2>
            <div class="info-item">
                <span class="info-label">Age:</span> ${data.age}
            </div>
            <div class="info-item">
                <span class="info-label">Residence:</span> ${data.residence}
            </div>
            <div class="info-item">
                <span class="info-label">Address:</span> ${data.address}
            </div>
            <div class="info-item">
                <span class="info-label">Email:</span> ${data.email}
            </div>
            <div class="info-item">
                <span class="info-label">Company:</span> ${data.company}
            </div>
        </div>
        
        <div class="social-links">
            <a href="${data.social.linkedin}" target="_blank">LinkedIn</a>
            <a href="${data.social.stackoverflow}" target="_blank">Stack Overflow</a>
            <a href="${data.social.github}" target="_blank">GitHub</a>
            <a href="${data.social.scholar}" target="_blank">Google Scholar</a>
        </div>
        
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${data.name}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  
  return html;
}

// Main build function
function build() {
  const args = process.argv.slice(2);
  const buildReadme = args.includes('--readme') || args.length === 0;
  const buildWeb = args.includes('--web') || args.length === 0;
  const useMinimal = args.includes('--minimal');
  const useProfessional = args.includes('--professional');
  
  // Determine which website version to build
  let websiteVersion = websiteConfig.defaultVersion;
  if (useMinimal) websiteVersion = 'minimal';
  if (useProfessional) websiteVersion = 'professional';
  
  // Create directories if they don't exist
  if (!fs.existsSync(path.join(__dirname, '../public'))) {
    fs.mkdirSync(path.join(__dirname, '../public'));
  }
  
  if (buildReadme) {
    const readmeContent = generateReadme(profile);
    fs.writeFileSync(path.join(__dirname, '../README.md'), readmeContent);
    console.log('✅ README.md generated successfully');
  }
  
  if (buildWeb) {
    let htmlContent;
    if (websiteVersion === 'minimal') {
      htmlContent = generateMinimalWebsite(websiteConfig);
      console.log('🌐 Building minimal website version');
    } else {
      htmlContent = generateWebsite(profile);
      console.log('🚀 Building professional website version');
    }
    fs.writeFileSync(path.join(__dirname, '../public/index.html'), htmlContent);
    console.log('✅ Website generated successfully');
  }
}

// Run build
build();