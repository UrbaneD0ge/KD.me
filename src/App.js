import './App.css';

function App() {
  return (
    <div>

    <nav>
        <header>
            <h1><a href="kipdunlap.me" rel="noreferrer">Kipling C. Dunlap</a></h1>
        </header>
        <ul>
            <li><a className="btn orange" href="https://docs.google.com/document/d/1vkpMSKmEacOYjhZEVyZuvSriz0JI9MmWvxPNrwSwGog/edit?usp=sharing" rel="noreferrer">Resume</a></li>
            <li><a className="btn orange" href="#contact">Contact</a></li>
      </ul>
    </nav>
      <img src="https://i.ibb.co/tJB56MY/simit-cover.jpg" alt="cover" id="cover" />

    <div className="container">
    <article>
      <section id="about">
            <h2>About Me</h2>
            <img id="portrait" src="https://i.ibb.co/9twjYxJ/00100l-PORTRAIT-00100-BURST20190919181515033-COVER-2.jpg" height="300vh" alt="I'm an okra pod."/>
            <p> Born and raised in the Atlanta, GA area; Kip holds a Bachelor of Science degree in Public Policy Analysis from Georgia State University, and received a certificate in Full-Stack Web Development coding from Georgia Tech's Bootcamp in December of 2021.
            <br/><br/>
                Kip spent the better part of a decade working in the Land Use and Public Transit Advocacy fields as a practitioner of Transportation Demand Management ("TDM") and was a member of <a href="https://www.actweb.org/" alt="ThreadATL" target="_blank" rel="noreferrer">Americans for Commuter Transportation</a>. He remains on the board of the Atlanta planning advocacy group, <a href="https://www.threadatl.org/" alt="ThreadATL" target="_blank" rel="noreferrer">ThreadATL</a> and serves as Chief Legislative Aide to <a href="https://www.legis.ga.gov/members/house/4880?session=1030" target="_blank" rel="noreferrer">Representative Park Cannon</a>.
            </p>
      </section>
    </article>

    <main>
      <section id="Work" className="work">
                <h2>Work</h2>
                <div className="main">
                    <a href="https://gamaro.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src="https://i.ibb.co/kmxmn7H/gamaro.png" alt="Gamaro"  id="hero"/></a>
                    <h3><a href="https://github.com/UrbaneD0ge/Gamaro" target="_blank" rel="noreferrer">Gamaro</a></h3>
                <h4>React based eCommerce platform</h4>
                </div>
                <div className="item">
                    <a href="https://urbaned0ge.github.io/Musical-Time-Machine/" target="_blank" rel="noreferrer">
                        <img src="https://i.ibb.co/p444Mxc/MTM.png" alt="Project1" className="small"/></a>
            <h3><a href="https://github.com/UrbaneD0ge/Musical-Time-Machine" target="_blank" rel="noreferrer">The MUSICAL Time Machine</a></h3>
              <h4>Multiple API calls take you back in time to find popular music</h4>
                </div>
                <div className="item">
                    <a href="https://group-event-planner.herokuapp.com/login" target="_blank" rel="noreferrer">
                        <img src="https://i.ibb.co/sgKfTyJ/Party-Plannerss.png" alt="PartyPlanner" className="small" /></a>
                    <h3><a href="https://github.com/UrbaneD0ge/event-planner" target="_blank" rel="noreferrer">Party Planner</a></h3>
                <h4>Full-stack web app for creating events and managing RSVPs</h4>
                </div>
                <div className="item">
                    <a href="https://urbaned0ge.github.io/JS-Password-Generator/" target="_blank" rel="noreferrer">
                        <img src="https://i.ibb.co/kXJ8L8G/PWgen.png" href="https://urbaned0ge.github.io/JS-Password-Generator/" alt="Project2" className="small" /></a>
                    <h3><a href="https://github.com/UrbaneD0ge/JS-Password-Generator" target="_blank" rel="noreferrer">JS PW Gen</a></h3>
                    <h4>Generate a randomized password based on user-selected parameters</h4>
                </div>
                <div className="item">
                    <a href="https://urbaned0ge.github.io/HW5-Work-Planner/" target="_blank" rel="noreferrer">
                        <img src="https://i.ibb.co/VwzZthv/Planner.png" href="https://urbaned0ge.github.io/HW5-Work-Planner/" alt="Project3" className="small" /></a>
                    <h3> <a href="https://github.com/UrbaneD0ge/HW5-Work-Planner" target="_blank" rel="noreferrer">Day Planner</a></h3>
                    <h4>Utilizing Moment.js to create a time-aware daily planner</h4>
                </div>
            </section>
      </main>

      <footer>
          <section id="contact" class="contact">
            <h2>Contact <br/> Me</h2>
            <ul class="contact">
              <li class="tab"><a href="tel:+4045906275">404.590.6275</a></li>
              <li class="tab"><a href="mailto:Kip@KipDunlap.me">Kip@KipDunlap.me</a></li>
              <li><a href="https://github.com/UrbaneD0ge" target="_blank" rel="noreferrer">Github</a></li>
              <li><a href="https://www.linkedin.com/in/kiplingdunlap/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/UrbaneDoge" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://open.spotify.com/user/pirateonptree" target="_blank" rel="noreferrer">Spotify</a></li>
            </ul>
          </section>
        </footer>
        </div>
    </div>
  );
}

export default App;
