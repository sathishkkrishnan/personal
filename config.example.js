module.exports = {
  // Site Configuration
  siteTitle: 'Resume | Your Name', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/personal/`, // This path is subpath of your hosting https://domain/portfolio

  // Personal Information
  firstName: 'Your First',
  lastName: 'Name',
  email: 'your.email@domain.com',
  phone: '+1 234 567 8900',
  address: 'Your City, Country',
  
  // Hero Section
  heroTitle: 'Your Professional Title',
  heroDescription: 'A brief professional summary that highlights your expertise and value proposition. Keep it concise but impactful.',
  
  // Statistics Cards
  stats: [
    {
      icon: 'fas fa-calendar-alt',
      number: '10+',
      label: 'Years Experience'
    },
    {
      icon: 'fas fa-university',
      number: 'Industry',
      label: 'Expert'
    },
    {
      icon: 'fas fa-cloud',
      number: 'Multi',
      label: 'Platform Certified'
    }
  ],

  // Social Links
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/yourusername',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/in/yourprofile/',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://facebook.com/yourprofile',
    },
  ],

  // Experience Section
  experience: [
    {
      position: 'Senior Software Engineer',
      company: 'Your Company Name',
      companyBadge: 'Tech Giant', // Optional
      duration: 'January 2020 - Present',
      years: '4+ Years',
      icon: 'fas fa-code',
      companyIcon: 'fas fa-building',
      responsibilities: [
        'Lead development of key product features',
        'Mentor junior developers and conduct code reviews',
        'Architect scalable solutions for complex problems',
        'Collaborate with product and design teams'
      ],
      achievements: [
        {
          title: 'Performance Optimization',
          description: 'Improved application performance by 40% through strategic refactoring'
        },
        {
          title: 'Team Leadership',
          description: 'Successfully led a team of 5 developers on critical project delivery'
        }
      ],
      domainExpertise: [
        'Full Stack Development',
        'Cloud Architecture',
        'Team Leadership'
      ]
    },
    {
      position: 'Software Developer',
      company: 'Previous Company',
      companyBadge: 'Startup',
      duration: 'June 2018 - December 2019',
      years: '1.5 Years',
      icon: 'fas fa-laptop-code',
      companyIcon: 'fas fa-building',
      responsibilities: [
        'Developed and maintained web applications',
        'Worked with modern JavaScript frameworks',
        'Participated in agile development processes'
      ],
      achievements: [],
      clientProjects: [
        'E-commerce Platform',
        'Customer Management System'
      ]
    }
  ],

  // Education Section
  education: [
    {
      degree: 'Master of Computer Science',
      institution: 'Your Graduate University',
      university: 'University System', // Optional
      specialization: 'Artificial Intelligence',
      grade: 'Summa Cum Laude', // Optional
      year: '2020',
      duration: 'Aug 2018 - May 2020',
      icon: 'fas fa-user-graduate'
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Your Undergraduate University',
      university: 'University System',
      specialization: 'Computer Science',
      grade: 'Magna Cum Laude',
      year: '2018',
      duration: 'Aug 2014 - May 2018',
      icon: 'fas fa-graduation-cap'
    }
  ],

  // Skills Section
  skills: {
    coreBanking: {
      title: 'Core Technical Expertise',
      categories: [
        {
          name: 'Frontend Development',
          icon: 'fas fa-desktop',
          items: [
            'React.js & Redux',
            'Vue.js & Vuex',
            'Modern JavaScript (ES6+)'
          ]
        },
        {
          name: 'Backend Development',
          icon: 'fas fa-server',
          items: [
            'Node.js & Express',
            'Python & Django',
            'RESTful API Design'
          ]
        },
        {
          name: 'Cloud & DevOps',
          icon: 'fas fa-cloud',
          items: [
            'AWS Services',
            'Docker & Kubernetes',
            'CI/CD Pipelines'
          ]
        },
        {
          name: 'Database & Tools',
          icon: 'fas fa-database',
          items: [
            'MongoDB & PostgreSQL',
            'Git Version Control',
            'Agile Methodologies'
          ]
        }
      ]
    },
    techStack: {
      title: 'Programming Languages & Tools',
      categories: [
        {
          name: 'Languages',
          icon: 'fas fa-code',
          items: [
            { name: 'JavaScript', icon: 'fab fa-js-square', title: 'JavaScript ES6+' },
            { name: 'Python', icon: 'fab fa-python', title: 'Python 3.x' },
            { name: 'TypeScript', icon: 'fas fa-code', title: 'TypeScript' }
          ]
        },
        {
          name: 'Frameworks',
          icon: 'fas fa-layer-group',
          items: [
            { name: 'React', icon: 'fab fa-react', title: 'React.js' },
            { name: 'Vue', icon: 'fab fa-vuejs', title: 'Vue.js' },
            { name: 'Node.js', icon: 'fab fa-node-js', title: 'Node.js Runtime' }
          ]
        },
        {
          name: 'Cloud Platforms',
          icon: 'fas fa-cloud',
          items: [
            { name: 'AWS', icon: 'fab fa-aws', title: 'Amazon Web Services' },
            { name: 'Azure', icon: 'fab fa-microsoft', title: 'Microsoft Azure' },
            { name: 'Google Cloud', icon: 'fab fa-google', title: 'Google Cloud Platform' }
          ]
        },
        {
          name: 'Tools & Others',
          icon: 'fas fa-tools',
          items: [
            { name: 'Docker', icon: 'fab fa-docker', title: 'Docker Containerization' },
            { name: 'Git', icon: 'fab fa-github', title: 'Git Version Control' },
            { name: 'Kubernetes', icon: 'fas fa-dharmachakra', title: 'Kubernetes Orchestration' }
          ]
        }
      ]
    }
  },

  // Interests Section
  interests: {
    categories: [
      {
        title: 'Technology & Innovation',
        icon: 'fas fa-laptop-code',
        items: [
          { text: 'Open Source Contributions', icon: 'fab fa-github' },
          { text: 'Machine Learning & AI', icon: 'fas fa-robot' },
          { text: 'Web3 and Blockchain Technology', icon: 'fab fa-bitcoin' },
          { text: 'Tech Conferences & Meetups', icon: 'fas fa-users' },
          { text: 'Continuous Learning', icon: 'fas fa-graduation-cap' }
        ]
      },
      {
        title: 'Personal & Hobbies',
        icon: 'fas fa-heart',
        items: [
          { text: 'Photography', icon: 'fas fa-camera' },
          { text: 'Hiking & Outdoor Activities', icon: 'fas fa-mountain' },
          { text: 'Reading Tech Blogs', icon: 'fas fa-book' },
          { text: 'Cooking & Food Exploration', icon: 'fas fa-utensils' },
          { text: 'Gaming & Entertainment', icon: 'fas fa-gamepad' }
        ]
      }
    ],
    githubProfile: {
      title: 'Open Source Contributions',
      description: 'Explore my coding journey, open-source contributions, and personal projects. From web applications to utility tools, discover the projects that showcase my passion for clean code and innovative solutions.',
      url: 'https://github.com/yourusername'
    }
  },

  // Awards & Certifications Section
  awards: {
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        icon: 'fab fa-aws'
      },
      {
        name: 'Google Cloud Professional Developer',
        issuer: 'Google Cloud',
        icon: 'fab fa-google'
      },
      {
        name: 'Microsoft Azure Developer Associate',
        issuer: 'Microsoft',
        icon: 'fab fa-microsoft'
      },
      {
        name: 'Certified Kubernetes Administrator',
        issuer: 'Cloud Native Computing Foundation',
        icon: 'fas fa-dharmachakra'
      }
    ],
    professionalAwards: [
      {
        name: 'Employee of the Year',
        year: '2023',
        icon: 'fas fa-trophy',
        type: 'gold'
      },
      {
        name: 'Innovation Award',
        year: '2022',
        icon: 'fas fa-lightbulb'
      },
      {
        name: 'Hackathon Winner - Best Technical Solution',
        year: '2021',
        description: 'First place in company-wide innovation challenge',
        icon: 'fas fa-medal'
      },
      {
        name: 'Technical Excellence Recognition',
        year: '2020',
        icon: 'fas fa-award'
      }
    ]
  }
};
