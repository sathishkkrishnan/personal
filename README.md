# Modern Professional Resume Template (Gatsby)

A sleek, professional, and fully **configuration-driven** resume website built with Gatsby.js. This template features a modern design, responsive layout, and easy customization through a single configuration file.

## 🎯 **Phase 1: Configuration-Driven Development** (Current)

This template is designed for easy customization and reuse. All content is managed through a central configuration file, making it simple to create your own professional resume website.

## ✨ Features

- **📱 Fully Responsive**: Perfect on desktop, tablet, and mobile
- **🎨 Modern Design**: Professional navy/gray color scheme with clean typography
- **⚙️ Configuration-Driven**: All content managed through `config.js`
- **📊 Dynamic Sections**: Experience, Education, Skills, Awards, and more
- **🔝 Smooth Scrolling**: Enhanced user experience with floating "Go to Top" button
- **🖨️ Print-Friendly**: Optimized for PDF generation
- **⚡ Fast Performance**: Built with Gatsby for optimal loading speed
- **♿ Accessible**: Following web accessibility best practices

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/satskrishnan/resumeapp.git
   cd resumeapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize your resume**
   - Edit `config.js` with your personal information (see [Configuration Guide](#-configuration-guide))
   - Replace `src/assets/images/profile.jpg` with your profile photo

4. **Start development server**
   ```bash
   npm run develop
   ```

5. **View your resume**
   - Open [http://localhost:8000](http://localhost:8000) in your browser

## 📝 Configuration Guide

All resume content is managed through the `config.js` file. Here's what you can customize:

### Personal Information
```javascript
firstName: 'Your First Name',
lastName: 'Your Last Name',
email: 'your.email@domain.com',
phone: '+1 234 567 8900',
address: 'Your City, Country',
heroTitle: 'Your Professional Title',
heroDescription: 'A brief professional summary...',
```

### Social Links
```javascript
socialLinks: [
  {
    icon: 'fa-github',
    name: 'Github',
    url: 'https://github.com/yourusername',
  },
  // Add more social links
],
```

### Statistics Cards (Hero Section)
```javascript
stats: [
  {
    icon: 'fas fa-calendar-alt',
    number: '10+',
    label: 'Years Experience'
  },
  // Add more stats
],
```

### Professional Experience
```javascript
experience: [
  {
    position: 'Your Job Title',
    company: 'Company Name',
    companyBadge: 'Optional Badge',
    duration: 'Start Date - End Date',
    years: 'X+ Years',
    icon: 'fas fa-briefcase',
    companyIcon: 'fas fa-building',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
    ],
    achievements: [
      {
        title: 'Achievement Title',
        description: 'Achievement description'
      }
    ],
    domainExpertise: ['Skill 1', 'Skill 2'],
    clientProjects: ['Project 1', 'Project 2'] // Optional
  },
  // Add more experiences
],
```

### Education
```javascript
education: [
  {
    degree: 'Your Degree',
    institution: 'Institution Name',
    university: 'University Name', // Optional
    specialization: 'Your Major',
    grade: 'Your Grade/GPA', // Optional
    year: 'Graduation Year',
    duration: 'Start - End',
    icon: 'fas fa-graduation-cap'
  },
  // Add more education entries
],
```

### Skills
```javascript
skills: {
  coreBanking: {
    title: 'Your Core Expertise Title',
    categories: [
      {
        name: 'Category Name',
        icon: 'fas fa-icon',
        items: ['Skill 1', 'Skill 2']
      }
    ]
  },
  techStack: {
    title: 'Technical Skills',
    categories: [
      {
        name: 'Category Name',
        icon: 'fas fa-icon',
        items: [
          { name: 'Technology', icon: 'fab fa-tech', title: 'Tooltip' }
        ]
      }
    ]
  }
}
```

### Interests
```javascript
interests: {
  categories: [
    {
      title: 'Category Title',
      icon: 'fas fa-icon',
      items: [
        { text: 'Interest description', icon: 'fas fa-icon' }
      ]
    }
  ],
  githubProfile: {
    title: 'GitHub Projects & Contributions',
    description: 'Description text...',
    url: 'https://github.com/yourusername'
  }
}
```

### Awards & Certifications
```javascript
awards: {
  certifications: [
    {
      name: 'Certification Name',
      issuer: 'Issuing Organization',
      icon: 'fab fa-provider-icon'
    }
  ],
  professionalAwards: [
    {
      name: 'Award Name',
      year: '2023',
      icon: 'fas fa-trophy',
      type: 'gold' // Optional for special styling
    }
  ]
}
```

## 🎨 Customizing Colors and Styling

The template uses a professional navy/gray color scheme. To customize:

1. **Colors**: Edit `src/assets/sass/resume.scss`
2. **Fonts**: Modify font imports in the same file
3. **Layout**: Adjust spacing and layout in the SCSS file

### Current Color Palette
- **Primary**: Navy blue (#2c3e50, #34495e)
- **Secondary**: Gray (#6c757d)
- **Warning**: Gold/yellow accents
- **Background**: Light gray (#f8f9fa)

## 📦 Build and Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages

This template is pre-configured for easy deployment to GitHub Pages. Follow these steps:

#### Step 1: Prepare Your Repository

1. **Fork or Clone** this repository to your GitHub account
2. **Rename** the repository to match your desired URL structure:
   - For personal site: `yourusername.github.io`
   - For project site: `your-resume` (will be available at `yourusername.github.io/your-resume`)

#### Step 2: Update Configuration

1. **Edit `gatsby-config.js`** to set the correct `pathPrefix`:
   ```javascript
   module.exports = {
     pathPrefix: `/your-repository-name`, // Remove this line for yourusername.github.io
     // ... other config
   }
   ```

2. **Edit `config.js`** to update the `pathPrefix`:
   ```javascript
   pathPrefix: `/your-repository-name/`, // Remove this line for yourusername.github.io
   ```

   **For personal GitHub Pages site** (yourusername.github.io):
   ```javascript
   pathPrefix: `/`, // Set to root
   ```

   **For project GitHub Pages site** (yourusername.github.io/project-name):
   ```javascript
   pathPrefix: `/project-name/`, // Match your repository name
   ```

#### Step 3: Deploy Using npm Script

The easiest way to deploy:

```bash
npm run deploy
```

This command will:
- Clean previous builds
- Build the project with path prefixes
- Deploy to the `gh-pages` branch
- Make your site available at GitHub Pages

#### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch
6. Click **Save**

Your site will be available at:
- Personal site: `https://yourusername.github.io`
- Project site: `https://yourusername.github.io/repository-name`

#### Step 5: Custom Domain (Optional)

To use a custom domain:

1. **Add a CNAME file** to the `static/` directory:
   ```
   static/CNAME
   ```
   
2. **Add your domain** to the CNAME file:
   ```
   yourdomain.com
   ```

3. **Configure DNS** with your domain provider:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IP addresses

4. **Update pathPrefix** in config files to `/`

#### Troubleshooting GitHub Pages Deployment

**Issue: Site shows 404 or blank page**
- Check that `pathPrefix` matches your repository name
- Ensure GitHub Pages is enabled in repository settings
- Wait a few minutes for deployment to complete

**Issue: CSS/JS files not loading**
- Verify `pathPrefix` is correctly set in both config files
- Check browser console for 404 errors
- Ensure you're using `npm run deploy` (not `npm run build`)

**Issue: Images not displaying**
- Place images in `src/assets/images/` directory
- Use relative paths in config
- Avoid absolute URLs for local images

### Deploy to Other Platforms

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `public/`
4. Deploy automatically on git push

#### Vercel
1. Connect your GitHub repository to Vercel
2. Framework preset: **Gatsby**
3. Build command: `npm run build`
4. Output directory: `public/`

#### AWS S3 + CloudFront
1. Build the project: `npm run build`
2. Upload `public/` directory contents to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain (optional)

#### Traditional Web Hosting
1. Build the project: `npm run build`
2. Upload all files from `public/` directory to your web server
3. Ensure your hosting supports single-page applications (SPA)

## 📁 Project Structure

```
resumeapp/
├── config.js                 # 📝 Main configuration file
├── src/
│   ├── components/
│   │   ├── Layout.js         # Main layout wrapper
│   │   ├── Sidebar.js        # Navigation sidebar
│   │   └── Scroll.js         # Smooth scrolling utility
│   ├── pages/
│   │   ├── index.js          # 🏠 Main resume page (renders from config)
│   │   └── 404.js            # Error page
│   └── assets/
│       ├── images/
│       │   └── profile.jpg   # 📸 Your profile photo
│       └── sass/
│           └── resume.scss   # 🎨 Main stylesheet
├── gatsby-config.js          # Gatsby configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🛠️ Development Workflow

### Making Changes
1. **Content Changes**: Edit `config.js`
2. **Styling Changes**: Edit `src/assets/sass/resume.scss`
3. **Structure Changes**: Edit React components in `src/`

### Testing Your Changes
```bash
npm run develop
```
View at [http://localhost:8000](http://localhost:8000)

### Git Workflow
```bash
# Create a feature branch
git checkout -b feature/your-changes

# Make your changes and commit
git add .
git commit -m "Description of changes"

# Push and create a pull request
git push origin feature/your-changes
```

## 🤝 Contributing

This template is designed to be easily customizable and reusable. Contributions are welcome!

### How to Contribute
1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Contribution Ideas
- New section components
- Additional themes/color schemes
- Performance improvements
- Accessibility enhancements
- Mobile optimizations
- New configuration options

## 🗺️ Roadmap

### Phase 1: Configuration-Driven (Current) ✅
✅ Single config file for all content  
✅ Dynamic rendering from config  
✅ Easy customization  
✅ Professional design  
✅ Multiple education support  
✅ GitHub Pages deployment guide  

### Phase 2: Enhanced Template System (Next)
- Multiple themes/color schemes
- YAML/JSON configuration support
- Template variants (different layouts)
- Advanced styling customization options
- Theme switching capabilities

### Phase 3: Advanced Features & Optimization (Planned)
- Projects/Portfolio section
- Publications section
- Testimonials/Recommendations
- Advanced animations and interactions
- Performance optimizations
- Enhanced accessibility features
- SEO improvements
- Multi-language support

### Phase 4: Community Features (Future)
- Visual configuration editor
- Template marketplace
- One-click deployments
- CMS integration options (Contentful, Strapi)
- AI-powered content suggestions
- Collaborative features

## 📋 Prerequisites for Contributors

- Knowledge of React.js and Gatsby
- Understanding of SCSS/CSS
- Git version control
- Basic understanding of web performance and accessibility

## 🔧 Technical Stack

- **Framework**: Gatsby.js (React-based)
- **Styling**: SCSS with Bootstrap utilities
- **Icons**: FontAwesome
- **Deployment**: GitHub Pages / Netlify / Vercel
- **Package Manager**: npm

## ❓ FAQ

**Q: Can I use this for commercial purposes?**
A: Yes, this template is open source and free to use commercially.

**Q: How do I add a new section?**
A: Add the content to `config.js` and create the corresponding rendering logic in `index.js`.

**Q: Can I change the color scheme?**
A: Yes, edit the SCSS variables in `src/assets/sass/resume.scss`.

**Q: How do I add more social links?**
A: Add them to the `socialLinks` array in `config.js` with the appropriate FontAwesome icon class.

**Q: Is this template SEO-friendly?**
A: Yes, built with Gatsby for optimal SEO and performance.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Credits

- **Original Template**: Based on the Resume Bootstrap theme
- **Framework**: Gatsby.js
- **Icons**: FontAwesome
- **Modernization**: Comprehensive redesign for professional use

---

**Made with ❤️ for the developer community**

*Easily create a professional resume website that stands out. Perfect for developers, consultants, and tech professionals.*