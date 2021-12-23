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
          <h1 className="mb-0">
            {config.firstName}
            {config.lastName}
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          I'm a Technical Consultant with more than 18+ Years of Experience in Banking Product Development, Consulting, Implementation, and Support. 
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Principal Consultant</h3>
              <div className="subheading mb-3">Edgeverve</div>
              <p>
                As a presales technical consultant, I work on an individual role, 
                primarily taking care of technical aspects on RFI/RFP, 
                Technology and Architecture demo, and POC lead.
                <br/><br/>
                For more than a decade in Edgeverve (Infosys), I've played varied roles across the 
                different teams as Solution/Integration Architect, 
                Presales consultant, Developer, as well as the Team lead. 
                <br/><br/>
                Worked closely with Product teams in adapting newer technical components onto the Presales team. 
                I've also successfully deployed these technical components and carried POC/demo to the clients. 
                <br/><br/>
                I've worked as an Integration Architect for Finacle Implementation in a Tier-1 Bank in the USA. 
                Helped the team to quickly complete integration delivery, which helped obtain a further implementation of 
                Finacle across different solutions and geographies.
                <br/><br/>
                Domain Knowledge: Retail Deposits, Unsecured Personal Lending
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">November 2009 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Consultant</h3>
              <div className="subheading mb-3">Oracle Financials Services Sofwtware Ltd</div>
              <p>
              I worked as a developer in the Flexcube Branch Web Application Module for the US market. 
              I have developed Combined Deposit, IRA & Statements for the Branch Module.
              <br/><br/>
              Involved in the Development, Implementation & Post Live Support for First Investment Bank, Bulgaria.
              <br/><br/>
              I have also handled support for Euro Bank EFG from the regional support in Athens.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2005 - November 2009</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Deutsche Software Limited</div>
              <p>
               I worked as part of the Production Management Facilities and 
               handled multiple support projects for the Deutsche Bank Investment Banking Operation. 
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">November 2003 - August 2005</span>
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
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">RVS College of Engineering & Technology</h3>
              <div className="subheading mb-3">Madurai Kamaraj University</div>
              <div className="subheading mb-3">Bachelor of Engineering</div>
              <div>Computer Science</div>
              <p>First Class - Distinction</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jun 1999 - May 2003</span>
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
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Core Banking Platform</h3><br/>
              <div className="subheading mb-3">Finacle Universal Banking Solution</div>
              <div>Finacle Integration Platform, Finacle Extensibility, Finacle Architecture & Technology</div>
            </div>
          </div>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
            <li className="list-inline-item">
              <i class="fas fa-dharmachakra"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-jenkins"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-github"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
          I enjoy exploring newer technologies, learn, and try hands-on.  
          I like attending technology meet-ups and meeting new personalities. 
          I'm currently learning openshift via the Red Hat Partner channel, Redis via Redis University Labs. 
          </p>
          <p className="mb-0">
          My personal site is developed using the Gatsby resume template and deployed using Github Pages.
          I also deployed another personal site, developed using the Gatsby resume cms template, and deployed in vercel. &nbsp;&nbsp;&nbsp;
          <a href="https://sathishkrishnan.com/">
            Personal Site.
          </a>
          </p>
          <p className="mb-0">
          <br/>Indoors, I love playing cricket, PS4 with my two boys (6 & 14), cooking, and movies. 
          </p>
        </div>
      </section>
      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-certificate text-warning"></i>
              AWS Certified Cloud Practitioner
            </li>
            <li>
              <i className="fa-li fa fa-certificate text-warning"></i>
              Microsoft Certified - Azure Fundamentals
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Finacle GEM  - Individual Performance Award - 2011
            </li>
            <li>
              <i className="fa-li fa fa-award text-warning"></i>
              Flexcube - Best Employee - Individual Performance Award - 2006
            </li>
            <li>
              <i className="fa-li fa fa-medal text-warning"></i>
              Finacle Sales Award - Cross Sell Champion - 2017
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Go Gitters - Infosys Automation Hackathon Winner (Openshift - Istio)
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
