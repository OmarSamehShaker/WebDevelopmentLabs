import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EssentialSkills from './components/EssentialSkills';
import AIEraSection from './components/AIEraSection';
import SkillsListSection from './components/SkillsListSection';
import TrustedCompanies from './components/TrustedCompanies';
import { courses, categories, essentialSkills, companies } from './data/data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <EssentialSkills skills={essentialSkills} />
      <AIEraSection />
      <SkillsListSection courses={courses} categories={categories} />
      <TrustedCompanies companies={companies} />
    </div>
  );
}

export default App;
