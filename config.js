module.exports = {
  // Site Configuration
  siteTitle: 'Resume | Sathishkumar Krishnan', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/personal/`, // This path is subpath of your hosting https://domain/portfolio

  // Personal Information
  firstName: 'Sathishkumar ',
  lastName: 'Krishnan',
  email: 'sathishkrishnan@digisco.dev',
  phone: '+1 5879734255',
  address: 'Calgary, Canada',
  
  // Hero Section
  heroTitle: 'Industry Principal',
  heroDescription: 'Seasoned Finacle Technical Consultant with extensive expertise in banking product consulting, implementation, development, and production support. Specialized in architecting scalable banking solutions and leading digital transformation initiatives across global financial institutions.',
  
  // Statistics Cards
  stats: [
    {
      icon: 'fas fa-calendar-alt',
      number: '21+',
      label: 'Years Experience'
    },
    {
      icon: 'fas fa-university',
      number: 'Banking',
      label: 'Core Platform Expert'
    },
    {
      icon: 'fas fa-cloud',
      number: 'Cloud',
      label: 'Multi-Platform Certified'
    }
  ],

  // Social Links
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/rapidcoderx',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/in/sathishkr/',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/sathishkr',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://facebook.com/sathishvt',
    },
  ],

  // Experience Section
  experience: [
    {
      position: 'Industry Principal',
      company: 'Edgeverve Systems Limited',
      companyBadge: 'Infosys',
      duration: 'November 2009 - Present',
      years: '15+ Years',
      icon: 'fas fa-user-tie',
      companyIcon: 'fas fa-building',
      responsibilities: [
        'Presales Technical Consulting',
        'RFI/RFP Technical Leadership',
        'Architecture Demonstrations',
        'POC Development & Leadership',
        'Solution Architecture',
        'Integration Architecture'
      ],
      achievements: [
        {
          title: 'Tier-1 US Bank Implementation',
          description: 'Led integration architecture for successful Finacle deployment'
        },
        {
          title: 'Product Innovation',
          description: 'Adapted cutting-edge technical components for presales demonstrations'
        },
        {
          title: 'Global Expansion',
          description: 'Enabled Finacle implementation across multiple geographies'
        }
      ],
      domainExpertise: [
        'Retail Deposits',
        'Unsecured Personal Lending',
        'Banking Operations'
      ]
    },
    {
      position: 'Senior Consultant',
      company: 'Oracle Financial Services',
      companyBadge: 'Flexcube',
      duration: 'August 2005 - November 2009',
      years: '4+ Years',
      icon: 'fas fa-code',
      companyIcon: 'fas fa-building',
      responsibilities: [
        'Flexcube Branch Web Application development for US market',
        'Combined Deposit, IRA & Statements module development',
        'End-to-end implementation and post-live support'
      ],
      achievements: [],
      clientProjects: [
        'First Investment Bank, Bulgaria',
        'Euro Bank EFG, Athens'
      ]
    },
    {
      position: 'Software Engineer',
      company: 'Deutsche Software Limited',
      companyBadge: 'Deutsche Bank',
      duration: 'November 2003 - August 2005',
      years: '2 Years',
      icon: 'fas fa-laptop-code',
      companyIcon: 'fas fa-building',
      responsibilities: [
        'Production Management Facilities development',
        'Investment Banking Operations support projects',
        'Critical financial systems maintenance and enhancement'
      ],
      achievements: []
    }
  ],

  // Education Section
  education: [
    {
      degree: 'Bachelor of Engineering',
      institution: 'RVS College of Engineering & Technology',
      university: 'Madurai Kamaraj University',
      specialization: 'Computer Science & Engineering',
      grade: 'First Class - Distinction',
      year: '2003',
      duration: 'Jun 1999 - May 2003',
      icon: 'fas fa-user-graduate'
    }
  ],

  // Skills Section
  skills: {
    coreBanking: {
      title: 'Core Banking Platform Expertise',
      categories: [
        {
          name: 'Finacle Architecture & Technology',
          icon: 'fas fa-cog',
          items: [
            'Core Banking Architecture',
            'System Integration',
            'Performance Optimization'
          ]
        },
        {
          name: 'Integration & Extensions',
          icon: 'fas fa-plug',
          items: [
            'Finacle Integration Platform',
            'Finacle Extensibility',
            'OECloud Platform'
          ]
        },
        {
          name: 'Deployment & Operations',
          icon: 'fas fa-shipping-fast',
          items: [
            'Containerization',
            'Production Deployment',
            'System Monitoring'
          ]
        },
        {
          name: 'Domain Expertise',
          icon: 'fas fa-chart-line',
          items: [
            'Retail Deposits',
            'Personal Lending',
            'Banking Operations'
          ]
        }
      ]
    },
    techStack: {
      title: 'Programming Languages & Tools',
      categories: [
        {
          name: 'Core Banking',
          icon: 'fas fa-university',
          items: [
            { name: 'Finacle', icon: 'fas fa-university', title: 'Finacle Universal Banking' },
            { name: 'Java', icon: 'fab fa-java', title: 'Java Enterprise' },
            { name: 'Spring Boot', icon: 'fas fa-leaf', title: 'Spring Boot Framework' }
          ]
        },
        {
          name: 'Cloud Platforms',
          icon: 'fas fa-cloud',
          items: [
            { name: 'AWS', icon: 'fab fa-aws', title: 'Amazon Web Services' },
            { name: 'Azure', icon: 'fab fa-microsoft', title: 'Microsoft Azure' },
            { name: 'OCI', icon: 'fas fa-cloud', title: 'Oracle Cloud Infrastructure' }
          ]
        },
        {
          name: 'DevOps & Containers',
          icon: 'fas fa-cube',
          items: [
            { name: 'Docker', icon: 'fab fa-docker', title: 'Docker Containerization' },
            { name: 'Kubernetes', icon: 'fas fa-dharmachakra', title: 'Kubernetes Orchestration' },
            { name: 'Jenkins', icon: 'fab fa-jenkins', title: 'Jenkins CI/CD' }
          ]
        },
        {
          name: 'Development',
          icon: 'fas fa-laptop-code',
          items: [
            { name: 'Node.js', icon: 'fab fa-node-js', title: 'Node.js Runtime' },
            { name: 'Git', icon: 'fab fa-github', title: 'Git Version Control' },
            { name: 'REST APIs', icon: 'fas fa-exchange-alt', title: 'REST APIs' }
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
          { text: 'Exploring cutting-edge technologies', icon: 'fas fa-rocket' },
          { text: 'Generative AI & Machine Learning', icon: 'fas fa-brain' },
          { text: 'No-code/Low-code platforms', icon: 'fas fa-magic' },
          { text: 'Vibe coding & creative development', icon: 'fas fa-code' },
          { text: 'Technology meetups & networking', icon: 'fas fa-users' }
        ]
      },
      {
        title: 'Personal & Family',
        icon: 'fas fa-home',
        items: [
          { text: 'Pickleball enthusiast (DUPR 3.6)', icon: 'fas fa-table-tennis' },
          { text: 'Badminton player', icon: 'fas fa-running' },
          { text: 'PS5 gaming with my boys', icon: 'fab fa-playstation' },
          { text: 'Cooking & culinary experiments', icon: 'fas fa-utensils' },
          { text: 'Movies & entertainment', icon: 'fas fa-film' }
        ]
      }
    ],
    githubProfile: {
      title: 'GitHub Projects & Contributions',
      description: 'Explore my coding journey, open-source contributions, and technical experiments. From banking solutions to modern web development, discover the projects that showcase my passion for innovative technology and continuous learning.',
      url: 'https://github.com/rapidcoderx'
    }
  },

  // Awards & Certifications Section
  awards: {
    certifications: [
      {
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        icon: 'fab fa-aws'
      },
      {
        name: 'Azure Fundamentals',
        issuer: 'Microsoft',
        icon: 'fab fa-microsoft'
      },
      {
        name: 'Oracle Cloud Infrastructure Foundations',
        issuer: 'Oracle',
        icon: 'fas fa-cloud'
      },
      {
        name: 'Oracle Cloud Architect Associate',
        issuer: 'Oracle',
        icon: 'fas fa-cloud'
      },
      {
        name: 'Google Cloud Digital Leader',
        issuer: 'Google Cloud',
        icon: 'fab fa-google'
      }
    ],
    professionalAwards: [
      {
        name: 'Finacle Acer Award - Technology Excellence (Gold)',
        year: '2023',
        icon: 'fas fa-trophy',
        type: 'gold'
      },
      {
        name: 'Finacle Sales Award',
        year: '2023',
        icon: 'fas fa-trophy'
      },
      {
        name: 'Go Gitters - Infosys Automation Hackathon Winner',
        description: 'Openshift - Istio Implementation',
        icon: 'fas fa-trophy'
      },
      {
        name: 'Finacle Sales Award - Cross Sell Champion',
        year: '2017',
        icon: 'fas fa-medal'
      },
      {
        name: 'Finacle GEM - Individual Performance Award',
        year: '2011',
        icon: 'fas fa-award'
      },
      {
        name: 'Flexcube - Best Employee Award',
        year: '2006',
        icon: 'fas fa-award'
      },
      {
        name: 'Red Hat Ascend Champion',
        description: 'Open Source Advocacy',
        icon: 'fab fa-redhat'
      }
    ]
  }
};
