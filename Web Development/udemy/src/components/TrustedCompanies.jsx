import React from 'react';

const TrustedCompanies = ({ companies }) => (
  <section className="companies-section">
    <p>Trusted by over 17,000 companies and millions of learners around the world</p>
    <div className="logos-row">
      {companies.map((company, index) => <span key={index} className="company-logo">{company}</span>)}
    </div>
  </section>
);

export default TrustedCompanies;
