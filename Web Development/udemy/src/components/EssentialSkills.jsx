import React from 'react';

const EssentialSkills = ({ skills }) => (
  <section className="section-padding bg-light">
    <div className="section-header">
      <h2>Learn essential career and life skills</h2>
      <p className="sub-text">Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>
    </div>
    <div className="skills-cards-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-category-card">
          <div className="skill-img-wrapper"><img src={skill.image} alt={skill.title} /></div>
          <div className="skill-card-footer">
             <div className="skill-info">
               <span className="learner-badge">👥 {skill.count}</span>
               <h3>{skill.title}</h3>
             </div>
             <span className="arrow-icon">→</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EssentialSkills;
