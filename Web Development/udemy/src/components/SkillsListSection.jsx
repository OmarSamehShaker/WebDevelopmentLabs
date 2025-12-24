import React from 'react';
import CourseCard from './CourseCard';

const SkillsListSection = ({ courses, categories }) => (
  <section className="section-padding">
    <div className="section-header">
      <h2>Skills to transform your career and life</h2>
      <p className="sub-text">From critical skills to technical topics, Udemy supports your professional development.</p>
    </div>
    <div className="category-tabs">
      {categories.map((cat, index) => (
        <button key={index} className={`cat-btn ${index === 0 ? 'active' : ''}`}>{cat}</button>
      ))}
    </div>
    <div className="courses-grid">
      {courses.map((course) => <CourseCard key={course.id} course={course} />)}
    </div>
    <button className="show-all-btn">Show all Artificial Intelligence (AI) courses →</button>
  </section>
);

export default SkillsListSection;
