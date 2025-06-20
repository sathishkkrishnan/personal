import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <div className="hero-content">
            <h1 className="mb-3 hero-name">
              <span className="text-primary">{config.firstName}</span>
              <span className="text-dark">{config.lastName}</span>
            </h1>
            <div className="hero-title mb-4">
              <i className="fas fa-crown mr-2"></i>
              Industry Principal
            </div>
            <div className="contact-info mb-5">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>{config.address}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone mr-2"></i>
                <span>{config.phone}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope mr-2"></i>
                <a href={`mailto:${config.email}`} className="text-decoration-none">{config.email}</a>
              </div>
            </div>
            
            <div className="hero-description mb-5">
              <div className="experience-highlight mb-4">
                <div className="row">
                  <div className="col-md-4">
                    <div className="stat-card text-center p-3">
                      <i className="fas fa-calendar-alt mb-2" style={{fontSize: '2rem'}}></i>
                      <h3 className="mb-1">21+</h3>
                      <p className="mb-0">Years Experience</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat-card text-center p-3">
                      <i className="fas fa-university mb-2" style={{fontSize: '2rem'}}></i>
                      <h3 className="mb-1">Banking</h3>
                      <p className="mb-0">Core Platform Expert</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat-card text-center p-3">
                      <i className="fas fa-cloud mb-2" style={{fontSize: '2rem'}}></i>
                      <h3 className="mb-1">Cloud</h3>
                      <p className="mb-0">Multi-Platform Certified</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="lead description-text">
                <i className="fas fa-quote-left mr-2"></i>
                Seasoned <strong>Finacle Technical Consultant</strong> with extensive expertise in banking product consulting, 
                implementation, development, and production support. Specialized in architecting scalable banking solutions 
                and leading digital transformation initiatives across global financial institutions.
                <i className="fas fa-quote-right ml-2"></i>
              </p>
            </div>
            
            <div className="social-section">
              <h6 className="mb-3">
                <i className="fas fa-share-alt mr-2"></i>
                Connect With Me
              </h6>
              <div className="social-icons">
                {config.socialLinks.map(social => {
                  const { icon, url } = social;
                  return (
                    <a key={url} href={url} className="social-link" target="_blank" rel="noopener noreferrer">
                      <i className={`fab ${icon}`}></i>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="section-title mb-5">
            <i className="fas fa-briefcase mr-3"></i>
            Professional Experience
          </h2>

          <div className="experience-timeline">
            <div className="experience-item mb-5">
              <div className="experience-card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h3 className="position-title mb-2">
                        <i className="fas fa-user-tie text-primary mr-2"></i>
                        Industry Principal
                      </h3>
                      <div className="company-info mb-3">
                        <i className="fas fa-building text-warning mr-2"></i>
                        <span className="company-name">Edgeverve Systems Limited</span>
                        <span className="company-badge ml-2">Infosys</span>
                      </div>
                    </div>
                    <div className="col-md-4 text-md-left">
                      <div className="duration-badge">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        November 2009 - Present
                      </div>
                      <div className="years-badge mt-2">
                        <i className="fas fa-clock mr-1"></i>
                        15+ Years
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="role-summary mb-4">
                    <h5 className="mb-3">
                      <i className="fas fa-target text-primary mr-2"></i>
                      Key Responsibilities
                    </h5>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="modern-list">
                          <li><i className="fas fa-check-circle text-primary mr-2"></i>Presales Technical Consulting</li>
                          <li><i className="fas fa-check-circle text-primary mr-2"></i>RFI/RFP Technical Leadership</li>
                          <li><i className="fas fa-check-circle text-primary mr-2"></i>Architecture Demonstrations</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="modern-list">
                          <li><i className="fas fa-check-circle text-primary mr-2"></i>POC Development & Leadership</li>
                          <li><i className="fas fa-check-circle text-primary mr-2"></i>Solution Architecture</li>
                          <li><i className="fas fa-check-circle text-primary mr-2"></i>Integration Architecture</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="achievements mb-4">
                    <h5 className="mb-3">
                      <i className="fas fa-trophy text-warning mr-2"></i>
                      Key Achievements
                    </h5>
                    <div className="achievement-item mb-2">
                      <i className="fas fa-star text-warning mr-2"></i>
                      <strong>Tier-1 US Bank Implementation:</strong> Led integration architecture for successful Finacle deployment
                    </div>
                    <div className="achievement-item mb-2">
                      <i className="fas fa-star text-warning mr-2"></i>
                      <strong>Product Innovation:</strong> Adapted cutting-edge technical components for presales demonstrations
                    </div>
                    <div className="achievement-item mb-2">
                      <i className="fas fa-star text-warning mr-2"></i>
                      <strong>Global Expansion:</strong> Enabled Finacle implementation across multiple geographies
                    </div>
                  </div>
                  
                  <div className="domain-expertise">
                    <h6 className="mb-2">
                      <i className="fas fa-brain text-info mr-2"></i>
                      Domain Expertise
                    </h6>
                    <div class="expertise-tags">
                      <span className="expertise-tag">Retail Deposits</span>
                      <span className="expertise-tag">Unsecured Personal Lending</span>
                      <span className="expertise-tag">Banking Operations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-item mb-5">
              <div className="experience-card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h3 className="position-title mb-2">
                        <i className="fas fa-code text-primary mr-2"></i>
                        Senior Consultant
                      </h3>
                      <div className="company-info mb-3">
                        <i className="fas fa-building text-warning mr-2"></i>
                        <span className="company-name">Oracle Financial Services</span>
                        <span className="company-badge ml-2">Flexcube</span>
                      </div>
                    </div>
                    <div className="col-md-4 text-md-right">
                      <div className="duration-badge">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        August 2005 - November 2009
                      </div>
                      <div className="years-badge mt-2">
                        <i className="fas fa-clock mr-1"></i>
                        4+ Years
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="role-summary mb-4">
                    <h5 className="mb-3">
                      <i className="fas fa-cogs text-primary mr-2"></i>
                      Core Responsibilities
                    </h5>
                    <ul className="modern-list">
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Flexcube Branch Web Application development for US market</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Combined Deposit, IRA & Statements module development</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>End-to-end implementation and post-live support</li>
                    </ul>
                  </div>
                  
                  <div class="client-projects">
                    <h6 className="mb-2">
                      <i className="fas fa-handshake text-info mr-2"></i>
                      Major Client Projects
                    </h6>
                    <div className="project-tags">
                      <span className="project-tag">First Investment Bank, Bulgaria</span>
                      <span className="project-tag">Euro Bank EFG, Athens</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-item mb-5">
              <div className="experience-card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h3 className="position-title mb-2">
                        <i className="fas fa-laptop-code text-primary mr-2"></i>
                        Software Engineer
                      </h3>
                      <div className="company-info mb-3">
                        <i className="fas fa-building text-warning mr-2"></i>
                        <span className="company-name">Deutsche Software Limited</span>
                        <span className="company-badge ml-2">Deutsche Bank</span>
                      </div>
                    </div>
                    <div className="col-md-4 text-md-right">
                      <div className="duration-badge">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        November 2003 - August 2005
                      </div>
                      <div className="years-badge mt-2">
                        <i className="fas fa-clock mr-1"></i>
                        2 Years
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="role-summary">
                    <ul className="modern-list">
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Production Management Facilities development</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Investment Banking Operations support projects</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Critical financial systems maintenance and enhancement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="section-title mb-5">
            <i className="fas fa-graduation-cap mr-3"></i>
            Education
          </h2>

          <div className="education-card">
            <div className="row align-items-center">
              <div className="col-md-2 text-center">
                <div className="education-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
              </div>
              <div className="col-md-8">
                <h3 className="degree-title mb-2">Bachelor of Engineering</h3>
                <div className="institution-info mb-2">
                  <h4 className="institution-name">RVS College of Engineering & Technology</h4>
                  <div className="university-name">
                    <i className="fas fa-school text-warning mr-2"></i>
                    Madurai Kamaraj University
                  </div>
                </div>
                <div className="degree-details">
                  <div className="specialization">
                    <i className="fas fa-laptop-code text-info mr-2"></i>
                    <strong>Computer Science & Engineering</strong>
                  </div>
                  <div className="achievement mt-2">
                    <i className="fas fa-medal text-warning mr-2"></i>
                    <span className="grade-badge">First Class - Distinction</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <div className="duration-info">
                  <div className="year-badge">
                    <i className="fas fa-calendar-alt mb-2"></i>
                    <div>2003</div>
                  </div>
                  <div className="duration-text">
                    Jun 1999 - May 2003
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Technical Skills</h2>
          
          <div className="row mb-5">
            <div className="col-md-12">
              <h4 className="mb-4">
                <i className="fas fa-university mr-2"></i>
                Core Banking Platform Expertise
              </h4>
              
              <div className="row">
                <div className="col-md-6">
                  <div className="skill-category mb-4">
                    <h5 className="mb-3">
                      <i className="fas fa-cog text-warning mr-2"></i>
                      Finacle Architecture & Technology
                    </h5>
                    <ul className="list-unstyled">
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Core Banking Architecture</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>System Integration</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Performance Optimization</li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="skill-category mb-4">
                    <h5 className="mb-3">
                      <i className="fas fa-plug text-warning mr-2"></i>
                      Integration & Extensions
                    </h5>
                    <ul className="list-unstyled">
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Finacle Integration Platform</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Finacle Extensibility</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>OECloud Platform</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6">
                  <div className="skill-category mb-4">
                    <h5 className="mb-3">
                      <i className="fas fa-shipping-fast text-warning mr-2"></i>
                      Deployment & Operations
                    </h5>
                    <ul className="list-unstyled">
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Containerization</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Production Deployment</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>System Monitoring</li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="skill-category mb-4">
                    <h5 className="mb-3">
                      <i className="fas fa-chart-line text-warning mr-2"></i>
                      Domain Expertise
                    </h5>
                    <ul className="list-unstyled">
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Retail Deposits</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Personal Lending</li>
                      <li><i className="fas fa-check-circle text-primary mr-2"></i>Banking Operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-tools-section">
            <h4 className="mb-4">
              <i className="fas fa-code mr-2"></i>
              Programming Languages &amp; Tools
            </h4>
            
            <div className="tech-grid">
              <div className="tech-category">
                <h6 className="tech-category-title">
                  <i className="fas fa-university text-primary mr-1"></i>
                  Core Banking
                </h6>
                <div className="tech-items">
                  <span className="tech-badge" title="Finacle Universal Banking">
                    <i className="fas fa-university mr-1"></i>Finacle
                  </span>
                  <span className="tech-badge" title="Java Enterprise">
                    <i className="fab fa-java mr-1"></i>Java
                  </span>
                  <span className="tech-badge" title="Spring Boot Framework">
                    <i className="fas fa-leaf mr-1"></i>Spring Boot
                  </span>
                </div>
              </div>
              
              <div className="tech-category">
                <h6 className="tech-category-title">
                  <i className="fas fa-cloud text-primary mr-1"></i>
                  Cloud Platforms
                </h6>
                <div className="tech-items">
                  <span className="tech-badge" title="Amazon Web Services">
                    <i className="fab fa-aws mr-1"></i>AWS
                  </span>
                  <span className="tech-badge" title="Microsoft Azure">
                    <i className="fab fa-microsoft mr-1"></i>Azure
                  </span>
                  <span className="tech-badge" title="Oracle Cloud Infrastructure">
                    <i className="fas fa-cloud mr-1"></i>OCI
                  </span>
                </div>
              </div>
              
              <div className="tech-category">
                <h6 className="tech-category-title">
                  <i className="fas fa-cube text-primary mr-1"></i>
                  DevOps & Containers
                </h6>
                <div className="tech-items">
                  <span className="tech-badge" title="Docker Containerization">
                    <i className="fab fa-docker mr-1"></i>Docker
                  </span>
                  <span className="tech-badge" title="Kubernetes Orchestration">
                    <i className="fas fa-dharmachakra mr-1"></i>Kubernetes
                  </span>
                  <span className="tech-badge" title="Jenkins CI/CD">
                    <i className="fab fa-jenkins mr-1"></i>Jenkins
                  </span>
                </div>
              </div>
              
              <div className="tech-category">
                <h6 className="tech-category-title">
                  <i className="fas fa-laptop-code text-primary mr-1"></i>
                  Development
                </h6>
                <div className="tech-items">
                  <span className="tech-badge" title="Node.js Runtime">
                    <i className="fab fa-node-js mr-1"></i>Node.js
                  </span>
                  <span className="tech-badge" title="Git Version Control">
                    <i className="fab fa-github mr-1"></i>Git
                  </span>
                  <span className="tech-badge" title="REST APIs">
                    <i className="fas fa-exchange-alt mr-1"></i>REST APIs
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="section-title mb-5">
            <i className="fas fa-heart mr-3"></i>
            Interests & Passions
          </h2>
          
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="interest-category mb-4">
                <h4 className="category-title mb-3">
                  <i className="fas fa-laptop-code mr-2"></i>
                  Technology & Innovation
                </h4>
                <div className="interest-items">
                  <div className="interest-item">
                    <i className="fas fa-rocket text-warning mr-2"></i>
                    <span>Exploring cutting-edge technologies</span>
                  </div>
                  <div className="interest-item">
                    <i className="fas fa-brain text-warning mr-2"></i>
                    <span>Generative AI & Machine Learning</span>
                  </div>
                  <div className="interest-item">
                    <i className="fas fa-magic text-warning mr-2"></i>
                    <span>No-code/Low-code platforms</span>
                  </div>
                  <div className="interest-item">
                    <i className="fas fa-code text-warning mr-2"></i>
                    <span>Vibe coding & creative development</span>
                  </div>
                  <div className="interest-item">
                    <i className="fas fa-users text-warning mr-2"></i>
                    <span>Technology meetups & networking</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="interest-category mb-4">
                <h4 className="category-title mb-3">
                  <i className="fas fa-home mr-2"></i>
                  Personal & Family
                </h4>
                <div className="interest-items">
                  <div className="interest-item">
                    <i className="fas fa-table-tennis text-warning mr-2"></i>
                    <span>Pickleball enthusiast (DUPR 3.6)</span>
                  </div>
                  <div className="interest-item">
                    <i className="fas fa-running text-warning mr-2"></i>
                    <span>Badminton player</span>
                  </div>
                  <div className="interest-item">
                    <i className="fab fa-playstation text-warning mr-2"></i>
                    <span>PS5 gaming with my boys</span>
                  </div>
                  <div className="interest-item">
                    <i className="fas fa-utensils text-warning mr-2"></i>
                    <span>Cooking & culinary experiments</span>
                  </div>
                  <div className="interest-item">
                    <i className="fas fa-film text-warning mr-2"></i>
                    <span>Movies & entertainment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="projects-showcase">
            <h4 className="mb-3">
              <i className="fab fa-github mr-2"></i>
              Code Repository
            </h4>
            <div className="project-card">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="project-info">
                    <h5 className="project-title mb-2">
                      <i className="fas fa-code-branch mr-2"></i>
                      GitHub Projects & Contributions
                    </h5>
                    <p className="project-description mb-2">
                      Explore my coding journey, open-source contributions, and technical experiments. 
                      From banking solutions to modern web development, discover the projects that showcase 
                      my passion for innovative technology and continuous learning.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <a href="https://github.com/rapidcoderx" target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github mr-2"></i>
                    Visit GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="section-title mb-5">
            <i className="fas fa-trophy mr-3"></i>
            Awards & Certifications
          </h2>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="certification-category">
                <h4 className="category-title mb-4">
                  <i className="fas fa-certificate mr-2"></i>
                  Cloud Certifications
                </h4>
                <div className="certification-list">
                  <div className="cert-item">
                    <div className="cert-icon">
                      <i className="fab fa-aws text-warning"></i>
                    </div>
                    <div className="cert-details">
                      <h6 className="cert-name">AWS Certified Cloud Practitioner</h6>
                      <p className="cert-issuer">Amazon Web Services</p>
                    </div>
                  </div>
                  
                  <div className="cert-item">
                    <div className="cert-icon">
                      <i className="fab fa-microsoft text-warning"></i>
                    </div>
                    <div className="cert-details">
                      <h6 className="cert-name">Azure Fundamentals</h6>
                      <p className="cert-issuer">Microsoft</p>
                    </div>
                  </div>
                  
                  <div className="cert-item">
                    <div className="cert-icon">
                      <i className="fas fa-cloud text-warning"></i>
                    </div>
                    <div className="cert-details">
                      <h6 className="cert-name">Oracle Cloud Infrastructure Foundations</h6>
                      <p className="cert-issuer">Oracle</p>
                    </div>
                  </div>
                  
                  <div className="cert-item">
                    <div className="cert-icon">
                      <i className="fas fa-cloud text-warning"></i>
                    </div>
                    <div className="cert-details">
                      <h6 className="cert-name">Oracle Cloud Architect Associate</h6>
                      <p className="cert-issuer">Oracle</p>
                    </div>
                  </div>
                  
                  <div className="cert-item">
                    <div className="cert-icon">
                      <i className="fab fa-google text-warning"></i>
                    </div>
                    <div className="cert-details">
                      <h6 className="cert-name">Google Cloud Digital Leader</h6>
                      <p className="cert-issuer">Google Cloud</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="awards-category">
                <h4 className="category-title mb-4">
                  <i className="fas fa-award mr-2"></i>
                  Professional Awards & Recognition
                </h4>
                <div className="awards-list">
                  <div className="award-item gold">
                    <div className="award-icon">
                      <i className="fas fa-trophy text-warning"></i>
                    </div>
                    <div className="award-details">
                      <h6 className="award-name">Finacle Acer Award - Technology Excellence (Gold)</h6>
                      <p className="award-year">2023</p>
                    </div>
                  </div>
                  
                  <div className="award-item">
                    <div className="award-icon">
                      <i className="fas fa-trophy text-warning"></i>
                    </div>
                    <div className="award-details">
                      <h6 className="award-name">Finacle Sales Award</h6>
                      <p className="award-year">2023</p>
                    </div>
                  </div>
                  
                  <div className="award-item">
                    <div className="award-icon">
                      <i className="fas fa-trophy text-warning"></i>
                    </div>
                    <div className="award-details">
                      <h6 className="award-name">Go Gitters - Infosys Automation Hackathon Winner</h6>
                      <p className="award-description">Openshift - Istio Implementation</p>
                    </div>
                  </div>
                  
                  <div className="award-item">
                    <div className="award-icon">
                      <i className="fas fa-medal text-warning"></i>
                    </div>
                    <div className="award-details">
                      <h6 className="award-name">Finacle Sales Award - Cross Sell Champion</h6>
                      <p className="award-year">2017</p>
                    </div>
                  </div>
                  
                  <div className="award-item">
                    <div className="award-icon">
                      <i className="fas fa-award text-warning"></i>
                    </div>
                    <div className="award-details">
                      <h6 className="award-name">Finacle GEM - Individual Performance Award</h6>
                      <p className="award-year">2011</p>
                    </div>
                  </div>
                  
                  <div className="award-item">
                    <div className="award-icon">
                      <i className="fas fa-award text-warning"></i>
                    </div>
                    <div className="award-details">
                      <h6 className="award-name">Flexcube - Best Employee Award</h6>
                      <p className="award-year">2006</p>
                    </div>
                  </div>
                  
                  <div className="award-item">
                    <div className="award-icon">
                      <i className="fab fa-redhat text-warning"></i>
                    </div>
                    <div className="award-details">
                      <h6 className="award-name">Red Hat Ascend Champion</h6>
                      <p className="award-description">Open Source Advocacy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    {/* Go to Top Button */}
    <button 
      className="go-to-top-btn" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Go to Top"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  </Layout>
);

export default IndexPage;
