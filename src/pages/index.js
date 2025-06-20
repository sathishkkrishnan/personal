import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      {/* About Section */}
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
              {config.heroTitle}
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
                  {config.stats.map((stat, index) => (
                    <div key={index} className="col-md-4">
                      <div className="stat-card text-center p-3">
                        <i className={`${stat.icon} mb-2`} style={{fontSize: '2rem'}}></i>
                        <h3 className="mb-1">{stat.number}</h3>
                        <p className="mb-0">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="lead description-text">
                <i className="fas fa-quote-left mr-2"></i>
                {config.heroDescription}
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

      {/* Experience Section */}
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
            {config.experience.map((job, index) => (
              <div key={index} className="experience-item mb-5">
                <div className="experience-card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h3 className="position-title mb-2">
                          <i className={`${job.icon} text-primary mr-2`}></i>
                          {job.position}
                        </h3>
                        <div className="company-info mb-3">
                          <i className={`${job.companyIcon} text-warning mr-2`}></i>
                          <span className="company-name">{job.company}</span>
                          {job.companyBadge && (
                            <span className="company-badge ml-2">{job.companyBadge}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4 text-md-right">
                        <div className="duration-badge">
                          <i className="fas fa-calendar-alt mr-2"></i>
                          {job.duration}
                        </div>
                        <div className="years-badge mt-2">
                          <i className="fas fa-clock mr-1"></i>
                          {job.years}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    {job.responsibilities && job.responsibilities.length > 0 && (
                      <div className="role-summary mb-4">
                        <h5 className="mb-3">
                          <i className="fas fa-target text-primary mr-2"></i>
                          Key Responsibilities
                        </h5>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="modern-list">
                              {job.responsibilities.slice(0, Math.ceil(job.responsibilities.length / 2)).map((resp, idx) => (
                                <li key={idx}>
                                  <i className="fas fa-check-circle text-primary mr-2"></i>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="modern-list">
                              {job.responsibilities.slice(Math.ceil(job.responsibilities.length / 2)).map((resp, idx) => (
                                <li key={idx}>
                                  <i className="fas fa-check-circle text-primary mr-2"></i>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {job.achievements && job.achievements.length > 0 && (
                      <div className="achievements mb-4">
                        <h5 className="mb-3">
                          <i className="fas fa-trophy text-warning mr-2"></i>
                          Key Achievements
                        </h5>
                        {job.achievements.map((achievement, idx) => (
                          <div key={idx} className="achievement-item mb-2">
                            <i className="fas fa-star text-warning mr-2"></i>
                            <strong>{achievement.title}:</strong> {achievement.description}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {job.domainExpertise && job.domainExpertise.length > 0 && (
                      <div className="domain-expertise">
                        <h6 className="mb-2">
                          <i className="fas fa-brain text-info mr-2"></i>
                          Domain Expertise
                        </h6>
                        <div className="expertise-tags">
                          {job.domainExpertise.map((expertise, idx) => (
                            <span key={idx} className="expertise-tag">{expertise}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {job.clientProjects && job.clientProjects.length > 0 && (
                      <div className="client-projects">
                        <h6 className="mb-2">
                          <i className="fas fa-handshake text-info mr-2"></i>
                          Major Client Projects
                        </h6>
                        <div className="project-tags">
                          {job.clientProjects.map((project, idx) => (
                            <span key={idx} className="project-tag">{project}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      {/* Education Section */}
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="section-title mb-5">
            <i className="fas fa-graduation-cap mr-3"></i>
            Education
          </h2>

          {config.education.map((edu, index) => (
            <div key={index} className={`education-card ${index < config.education.length - 1 ? 'mb-4' : ''}`}>
              <div className="row align-items-center">
                <div className="col-md-2 text-center">
                  <div className="education-icon">
                    <i className={edu.icon}></i>
                  </div>
                </div>
                <div className="col-md-8">
                  <h3 className="degree-title mb-2">{edu.degree}</h3>
                  <div className="institution-info mb-2">
                    <h4 className="institution-name">{edu.institution}</h4>
                    {edu.university && (
                      <div className="university-name">
                        <i className="fas fa-school text-warning mr-2"></i>
                        {edu.university}
                      </div>
                    )}
                  </div>
                  <div className="degree-details">
                    <div className="specialization">
                      <i className="fas fa-laptop-code text-info mr-2"></i>
                      <strong>{edu.specialization}</strong>
                    </div>
                    {edu.grade && (
                      <div className="achievement mt-2">
                        <i className="fas fa-medal text-warning mr-2"></i>
                        <span className="grade-badge">{edu.grade}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-2 text-center">
                  <div className="duration-info">
                    <div className="year-badge">
                      <i className="fas fa-calendar-alt mb-2"></i>
                      <div>{edu.year}</div>
                    </div>
                    <div className="duration-text">
                      {edu.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="m-0" />

      {/* Skills Section */}
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
                {config.skills.coreBanking.title}
              </h4>
              
              <div className="row">
                {config.skills.coreBanking.categories.map((category, index) => (
                  <div key={index} className="col-md-6">
                    <div className="skill-category mb-4">
                      <h5 className="mb-3">
                        <i className={`${category.icon} text-warning mr-2`}></i>
                        {category.name}
                      </h5>
                      <ul className="list-unstyled">
                        {category.items.map((item, idx) => (
                          <li key={idx}>
                            <i className="fas fa-check-circle text-primary mr-2"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tech-tools-section">
            <h4 className="mb-4">
              <i className="fas fa-code mr-2"></i>
              {config.skills.techStack.title}
            </h4>
            
            <div className="tech-grid">
              {config.skills.techStack.categories.map((category, index) => (
                <div key={index} className="tech-category">
                  <h6 className="tech-category-title">
                    <i className={`${category.icon} text-primary mr-1`}></i>
                    {category.name}
                  </h6>
                  <div className="tech-items">
                    {category.items.map((item, idx) => (
                      <span key={idx} className="tech-badge" title={item.title}>
                        <i className={`${item.icon} mr-1`}></i>
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      {/* Interests Section */}
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
            {config.interests.categories.map((category, index) => (
              <div key={index} className="col-md-6">
                <div className="interest-category mb-4">
                  <h4 className="category-title mb-3">
                    <i className={`${category.icon} mr-2`}></i>
                    {category.title}
                  </h4>
                  <div className="interest-items">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="interest-item">
                        <i className={`${item.icon} text-warning mr-2`}></i>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
                      {config.interests.githubProfile.title}
                    </h5>
                    <p className="project-description mb-2">
                      {config.interests.githubProfile.description}
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <a href={config.interests.githubProfile.url} target="_blank" rel="noopener noreferrer" className="project-link">
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

      {/* Awards & Certifications Section */}
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
                  {config.awards.certifications.map((cert, index) => (
                    <div key={index} className="cert-item">
                      <div className="cert-icon">
                        <i className={`${cert.icon} text-warning`}></i>
                      </div>
                      <div className="cert-details">
                        <h6 className="cert-name">{cert.name}</h6>
                        <p className="cert-issuer">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
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
                  {config.awards.professionalAwards.map((award, index) => (
                    <div key={index} className={`award-item ${award.type || ''}`}>
                      <div className="award-icon">
                        <i className={`${award.icon} text-warning`}></i>
                      </div>
                      <div className="award-details">
                        <h6 className="award-name">{award.name}</h6>
                        {award.year && <p className="award-year">{award.year}</p>}
                        {award.description && <p className="award-description">{award.description}</p>}
                      </div>
                    </div>
                  ))}
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
