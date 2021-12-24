import './App.css';
import AboutMe from './components/aboutMe';
import Work from './components/work';
import { useState } from 'react';

function App() {
  const [currentSection, setCurrentSection] = useState(AboutMe);

  return (
    <div>
      <nav>
          <header>
              <h1>Kipling C. Dunlap</h1>
          </header>
          <ul class="right">
              <li><button className="btn" onClick={() => setCurrentSection(AboutMe)}>About Me</button></li>
              <li><button className="btn" onClick={() => setCurrentSection(Work)}>Work</button></li>
              <li><a className="btn" href="https://docs.google.com/document/d/1vkpMSKmEacOYjhZEVyZuvSriz0JI9MmWvxPNrwSwGog/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
      </nav>
      <img src="https://i.ibb.co/tJB56MY/simit-cover.jpg" alt="cover" id="cover"/>
      {currentSection}
    </div>
  );
}

export default App;
