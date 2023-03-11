import './App.css';

function App() {
  return (
    <div id="outermost">

      <nav>
        <header>
          <h1><a href="http:kipdunlap.me" rel="noreferrer">Kipling C. Dunlap</a></h1>
        </header>
        <ul>
          <li><a className="btn orange" href="#work">Work</a></li>
          <li><a className="btn orange" href="#contact">Contact</a></li>
          <li><a className="btn orange" href="https://docs.google.com/document/d/1vkpMSKmEacOYjhZEVyZuvSriz0JI9MmWvxPNrwSwGog/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
      </nav>
      <img src="https://i.ibb.co/tJB56MY/simit-cover.jpg" alt="cover" id="cover" />

      <div className="container" id="content">
        <article>
          <section id="about">
            <h2>About Me</h2>
            <img id="portrait" src="https://i.ibb.co/9twjYxJ/00100l-PORTRAIT-00100-BURST20190919181515033-COVER-2.jpg" height="300vh" alt="I'm an okra pod." />
            <p> Born and raised in the Atlanta, GA area; Kip holds a Bachelor of Science degree in Public Policy Analysis from Georgia State University, and received a certificate in Full-Stack Web Development coding from Georgia Tech's Bootcamp in December of 2021.
              <br /><br />
              Kip spent the better part of a decade working in the Land Use and Public Transit Advocacy fields as a practitioner of Transportation Demand Management ("TDM") and was a member of <a href="https://www.actweb.org/" alt="ThreadATL" target="_blank" rel="noreferrer">Americans for Commuter Transportation</a>. He serves on the board of the SoPo Bicycle Cooperative <a href="https://www.sopobikes.org/" alt="SoPo" target="_blank" rel="noreferrer">SoPo</a> and serves as Chief Legislative Aide to <a href="https://www.legis.ga.gov/members/house/4880?session=1030" target="_blank" rel="noreferrer">Representative Park Cannon</a>.
            </p>
          </section>
        </article>

        <main id="work" className="work">
          <div>
            <div class="col s4 m4">
              <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class='demoPic' alt='DCP Voting Form screenshot'
                    src="https://user-images.githubusercontent.com/88916382/181673287-2ce8ea42-6620-4dfd-81e8-7501325f20e8.png"></img>
                </div>
                <div class="card-content">
                  <span class="card-title">DCP Voting Form</span>
                  <div>
                    <p>An online tool for the Atlanta Department of City Planning to generate and submit NPU voting report
                      forms.</p>
                  </div>
                </div>
                <div class="card-action">
                  <a href="https://github.com/UrbaneD0ge/VotingForm">View Repo</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="col s4 m4">
              <div class="card medium">
                <div class="card-image">
                  <img class='demoPic' alt='NPUNGL0TRON screenshot'
                    src="https://user-images.githubusercontent.com/88916382/172173811-ddba31de-80e8-4651-aa72-6692fd26c455.png"></img>
                </div>
                <div class="card-content">
                  <span class="card-title">NPUNGL0TRON</span>
                  <p>A Web-hosted version of the previous "NPUNGLR8R" CLI tool for generating form emails.</p>
                </div>
                <div class="card-action">
                  <a href="https://github.com/UrbaneD0ge/NPUNGL0Tron-2">View Repo</a>
                </div>
              </div>
            </div>

            <div>
              <div class="col s4 m4">
                <div class="card medium">
                  <div class="card-image">
                    <img class='demoPic' alt='Agendenator screenshot'
                      src="https://user-images.githubusercontent.com/88916382/200208354-56a02459-9712-4f41-b8b3-5da3fedaca0d.png"></img>
                  </div>
                  <div class="card-content">
                    <span class="card-title">Agendenator</span>
                    <p>Database application for procedurally generating NPU agendas for the City of Atlanta.</p>
                  </div>
                  <div class="card-action">
                    <a href="https://github.com/UrbaneD0ge/Agendenator">View Repo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main >

        <footer id="contact" class="contact m4">
          <div>
            <div class="card card-tabs white col">
              <h3 class='text-white'>Contact Kip</h3>
              <ul class="card contact tabs tabs-fixed-width black-text">
                <li class="tab"><a href="tel:+4045906275">404.590.6275</a></li>
                <li class="tab"><a href="mailto:Kip@KipDunlap.me">Kip@KipDunlap.me</a></li>
                <li class="tab"><a href="https://github.com/UrbaneD0ge" target="_blank" rel="noreferrer">Github</a></li>
                <li class="tab"><a href="https://www.linkedin.com/in/kiplingdunlap/" target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
                <li class="tab"><a href="https://twitter.com/UrbaneDoge" target="_blank" rel="noreferrer">Twitter</a></li>
                <li class="tab"><a href="https://open.spotify.com/user/pirateonptree" target="_blank" rel="noreferrer">Spotify</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div >
    </div >
  );
}

export default App;
