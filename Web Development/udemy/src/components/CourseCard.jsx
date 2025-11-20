import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-img" />
      <div className="course-content">
        <h3>{course.title}</h3>
        <p className="instructor">{course.instructor}</p>
        <div className="rating-row">
          <span className="rating-num">{course.rating}</span>
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-count">({course.reviews})</span>
        </div>
        <div className="price-row">
          <span className="current-price">{course.price}</span>
          <span className="old-price">{course.oldPrice}</span>
        </div>
        {course.tag && <div className={`tag ${course.tag === 'Premium' ? 'tag-premium' : 'tag-bestseller'}`}>{course.tag}</div>}
      </div>
    </div>
  );
};

export default CourseCard;
