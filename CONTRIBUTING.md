# Contributing to Modern Professional Resume Template

Thank you for your interest in contributing to this project! This guide will help you get started with contributing to the Modern Professional Resume Template.

## 🎯 Project Vision

This template aims to be the go-to solution for creating professional resume websites that are:
- **Easy to customize** - Single configuration file approach
- **Professional** - Clean, modern design suitable for all industries
- **Accessible** - Following web accessibility guidelines
- **Performance-focused** - Fast loading and SEO optimized
- **Reusable** - Template system for easy adoption

## 🚀 Development Phases

### Phase 1: Configuration-Driven (Current)
✅ All content managed through `config.js`  
✅ Dynamic rendering from configuration  
✅ Professional design and styling  
✅ Comprehensive documentation  

### Phase 2: Enhanced Template System (Planned)
- Multiple theme variations
- YAML/JSON configuration support
- CMS integration capabilities
- Template layout variants
- Enhanced customization options

### Phase 3: Community Features (Future)
- Visual configuration editor
- One-click deployment tools
- Template marketplace
- AI-powered content suggestions

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git
- Basic knowledge of React.js and Gatsby
- Understanding of SCSS/CSS

### Setting Up Your Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/resumeapp.git
   cd resumeapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a development branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start the development server**
   ```bash
   npm run develop
   ```

5. **Visit** [http://localhost:8000](http://localhost:8000) to see your changes

### Branch Naming Convention

- `feature/` - New features or enhancements
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `style/` - Styling and design changes
- `refactor/` - Code refactoring
- `test/` - Testing improvements

Examples:
- `feature/multiple-themes`
- `fix/mobile-responsiveness`
- `docs/configuration-guide`

## 📁 Project Structure

Understanding the project structure will help you contribute effectively:

```
resumeapp/
├── config.js                 # Main configuration file
├── config.example.js         # Example configuration for new users
├── src/
│   ├── components/
│   │   ├── Layout.js         # Main layout wrapper
│   │   ├── Sidebar.js        # Navigation sidebar
│   │   └── Scroll.js         # Smooth scrolling utility
│   ├── pages/
│   │   ├── index.js          # Main resume page (renders from config)
│   │   └── 404.js            # Error page
│   └── assets/
│       ├── images/           # Static images
│       └── sass/
│           └── resume.scss   # Main stylesheet
├── gatsby-config.js          # Gatsby configuration
├── package.json             # Dependencies and scripts
├── README.md                # Main documentation
└── CONTRIBUTING.md          # This file
```

## 🎨 Design Guidelines

### Color Palette

Our current professional theme uses:

- **Primary**: Navy blue (`#2c3e50`, `#34495e`)
- **Secondary**: Gray (`#6c757d`)
- **Warning/Accent**: Gold/yellow (`#ffc107`)
- **Background**: Light gray (`#f8f9fa`)
- **Text**: Dark gray/black (`#212529`)

### Typography

- **Primary Font**: Clean, modern sans-serif
- **Headings**: Bold, well-spaced
- **Body Text**: Readable, professional
- **Code**: Monospace font for technical elements

### Layout Principles

- **Clean and minimal** - Avoid clutter
- **Professional** - Suitable for corporate environments
- **Responsive** - Works on all device sizes
- **Print-friendly** - Optimized for PDF generation
- **Accessible** - Proper contrast ratios and semantic HTML

## 🤝 Types of Contributions

### 1. Code Contributions

#### New Features
- Additional sections (e.g., Projects, Publications)
- Multiple theme support
- Enhanced configuration options
- Performance improvements

#### Bug Fixes
- Cross-browser compatibility issues
- Mobile responsiveness problems
- Accessibility improvements
- Performance bottlenecks

#### Code Quality
- Refactoring for better maintainability
- Adding TypeScript support
- Improving code organization
- Adding automated tests

### 2. Design Contributions

#### Themes and Styling
- New color schemes
- Alternative layouts
- Industry-specific adaptations
- Print stylesheet improvements

#### User Experience
- Improved navigation
- Better mobile experience
- Enhanced animations
- Accessibility improvements

### 3. Documentation

#### User Documentation
- Configuration guides
- Customization tutorials
- Deployment instructions
- FAQ updates

#### Developer Documentation
- Code comments
- API documentation
- Contributing guidelines
- Architecture decisions

### 4. Testing and Quality Assurance

- Cross-browser testing
- Mobile device testing
- Performance testing
- Accessibility auditing

## 📝 Configuration-Driven Development

When adding new features, follow the configuration-driven approach:

### 1. Add to Configuration Schema

Update `config.js` with new configuration options:

```javascript
// Example: Adding a new section
newSection: {
  title: 'New Section Title',
  enabled: true,
  items: [
    {
      name: 'Item Name',
      description: 'Item Description',
      icon: 'fas fa-icon'
    }
  ]
}
```

**Note**: For sections that support multiple entries (like education, experience), use arrays:

```javascript
// Example: Multiple entries support
education: [
  {
    degree: 'Master Degree',
    institution: 'University Name',
    // ... other properties
  },
  {
    degree: 'Bachelor Degree',
    institution: 'Another University',
    // ... other properties
  }
]
```

### 2. Update Example Configuration

Add the same structure to `config.example.js` with example data.

### 3. Create Rendering Logic

Add the React component to render the new section in `src/pages/index.js`:

```jsx
{config.newSection && config.newSection.enabled && (
  <section className="resume-section" id="new-section">
    <div className="w-100">
      <h2 className="section-title mb-5">
        <i className="fas fa-icon mr-3"></i>
        {config.newSection.title}
      </h2>
      {/* Render section content */}
    </div>
  </section>
)}
```

### 4. Add Styling

Update `src/assets/sass/resume.scss` with appropriate styling.

### 5. Update Documentation

Add the new configuration to the README.md configuration guide.

## 🧪 Testing Your Changes

### Manual Testing

1. **Configuration Testing**
   - Test with minimal configuration
   - Test with full configuration
   - Test with missing optional fields

2. **Responsive Testing**
   - Desktop (1920x1080, 1366x768)
   - Tablet (768x1024)
   - Mobile (375x667, 414x896)

3. **Browser Testing**
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)

4. **Print Testing**
   - Print preview functionality
   - PDF generation quality
   - Page breaks and formatting

### Code Quality

Before submitting, ensure:
- Code follows existing patterns
- No console errors or warnings
- Proper error handling
- Accessible HTML structure
- Responsive design maintained

## 📋 Pull Request Process

### Before Submitting

1. **Test thoroughly** on multiple devices and browsers
2. **Update documentation** if needed
3. **Add yourself** to contributors if it's your first contribution
4. **Write clear commit messages**

### Commit Message Format

```
type(scope): brief description

Longer description if needed

Fixes #issue-number
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
- `feat(config): add projects section support`
- `fix(mobile): resolve sidebar navigation on iOS`
- `docs(readme): update configuration guide`

### Pull Request Template

When creating a pull request, include:

1. **Description**: What does this PR do?
2. **Type of Change**: Feature, bug fix, documentation, etc.
3. **Testing**: How was this tested?
4. **Screenshots**: For UI changes
5. **Breaking Changes**: Any breaking changes?
6. **Checklist**: Complete the provided checklist

### Review Process

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** in various environments
4. **Documentation review** if applicable
5. **Merge** after approval

## 🏷️ Issue Guidelines

### Reporting Bugs

Use the bug report template and include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable

### Feature Requests

Use the feature request template and include:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach
- Priority level

### Questions and Discussions

- Use GitHub Discussions for questions
- Check existing issues and discussions first
- Provide context and examples

## 🎖️ Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Special recognition for major features

## 📞 Getting Help

- **GitHub Issues**: Technical problems or bugs
- **GitHub Discussions**: General questions and ideas
- **Documentation**: Check README.md and other docs first

## 🔮 Future Roadmap

### Planned Features

- **Multiple Themes**: Dark theme, industry-specific themes
- **CMS Integration**: Contentful, Strapi support
- **Advanced Sections**: Projects, Publications, Testimonials
- **Export Options**: PDF, Word document generation
- **Analytics**: Built-in analytics support
- **A11y Improvements**: Enhanced accessibility features

### Technology Considerations

- **TypeScript**: Gradual migration to TypeScript
- **Testing**: Jest and Cypress test suites
- **CI/CD**: Automated testing and deployment
- **Performance**: Bundle optimization and lazy loading

## 📜 Code of Conduct

This project follows a code of conduct to ensure a welcoming environment:

- **Be respectful** and inclusive
- **Be constructive** in feedback
- **Be patient** with newcomers
- **Be collaborative** in discussions

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to making professional resume creation easier for everyone! 🎉
