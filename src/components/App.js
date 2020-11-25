import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import portfolioData from './../ResumeData/portfolioData.json';

function App() {

  const [resumeData, setResumeData] = useState(portfolioData);

  return (
    <div className="App">
      <Header data={resumeData.main}/>
      <Home data={resumeData.main}/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
