function App() {
  return (
    <div className="App">

      <main id='work' className="row">
        <div className="col s12 m6 l6 project">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <a href='https://urbaned0ge.github.io/VotingForm/' rel='noreferrer noopener' target='_blank'>
                <img className='demoPic' target="_blank" rel="noreferrer" alt="DCP Voting Form"
                  src="https://user-images.githubusercontent.com/88916382/181673287-2ce8ea42-6620-4dfd-81e8-7501325f20e8.png"></img></a>
            </div>
            <div className="card-action">
              <h2 className="card-title">DCP Voting Form</h2>
              <a href="https://github.com/UrbaneD0ge/VotingForm" target='_blank' rel='noreferrer' alt="Project Repo Link">View Repo</a>
              <p>An online tool for the Atlanta Department of City Planning to generate and submit NPU voting report
                forms.</p>
            </div>
          </div>
        </div>


        <div className="col s12 m6 l6 project">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <a href='https://urbaned0ge.github.io/NPUNGL0Tron-2/' rel='noreferrer' target='_blank'>
                <img className='demoPic'
                  src="https://user-images.githubusercontent.com/88916382/172173811-ddba31de-80e8-4651-aa72-6692fd26c455.png" alt="NPUNGL0Tron-2"></img></a>
            </div>
            <div className="card-action">
              <h2 className="card-title">NPUNGL0TRON-2</h2>
              <a href="https://github.com/UrbaneD0ge/NPUNGL0Tron-2" target='_blank' rel='noreferrer' alt="Project Repo Link">View Repo</a>
              <p>A Web-hosted version of the previous "NPUNGLR8R" CLI tool for generating form emails, and social posts.
                Now with additional tools and resources.</p>
            </div>
          </div>
        </div>

        <div className="col s12 m6 l6 project">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <a href="https://agendenator.onrender.com/" rel='noreferrer noopener' target='_blank'>
                <img className='demoPic'
                  src="https://user-images.githubusercontent.com/88916382/224571269-f60a29ae-f6e2-48cc-86f9-d2924ebfd36a.png" alt="Agendenator" ></img></a>
            </div>
            <div className="card-action">
              <h2 className="card-title">Agendenator</h2>
              <a href="https://github.com/UrbaneD0ge/Agendenator" target='_blank' rel="noreferrer">View Repo</a>
              <p>Database application for procedurally generating NPU agendas. Envisioned as a one-stop resource for Atlanta NPU staff to end duplication of data-entry tasks related to NPU agenda items.</p>
            </div>
          </div>
        </div>

        <div className="col s12 m6 l6 project">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <a href='https://urbaned0ge.github.io/Musical-Time-Machine/' rel='noreferrer noopener' target='_blank'>
                <img className='demoPic' alt="Musical Time Machine"
                  src="https://user-images.githubusercontent.com/89173968/135728428-03d061c8-c073-4b4b-8167-7a74e4c631a1.png"></img></a>
            </div>
            <div className="card-action">
              <h2 className="card-title">The Musical Time Machine</h2>
              <a href="https://github.com/UrbaneD0ge/Musical-Time-Machine" target='_blank' rel="noreferrer" alt="Project Repo Link">View Repo</a>
              <p>On of my first projects: I discovered my interest in front-end development and web design building this
                novelty page with my team.</p>
            </div>

          </div>

          {/* <!-- <div className="col s12 m6 l6 project">
            <div className="card medium">
              <div className="card-image">
                <img className='demoPic'
                  src="https://user-images.githubusercontent.com/88916382/181673287-2ce8ea42-6620-4dfd-81e8-7501325f20e8.png">
              </div>
              <div className="card-content">
                <span className="card-title">DCP Voting Form</span>
                <p>An online tool for the Atlanta Department of City Planning to generate and submit NPU voting
                  report
                  forms.</p>
              </div>
              <div className="card-action">
                <a href="https://github.com/UrbaneD0ge/VotingForm">View Repo</a>
              </div>
            </div>
          </div> --> */}
        </div>
      </main>

    </div>
  );
}

export default App;
