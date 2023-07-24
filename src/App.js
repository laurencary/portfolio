import Me from './images/me.jpg'
import SlaqueSnap from './images/slaque.png'
import WeatherSnap from './images/what-weather-where.png'
import RendezView from './images/rendez-view.png'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div id="wrapper">
        <header id="header">
          <div class="inner">
            <nav>
              <ul>
                <li><a href="#menu">Menu</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <div id="main">
          <div class="inner">
            <header id="about">
              <div class="heading">
                <img src={Me} alt="Lauren Cary" class="headshot" />
                <h1 class="heading-me-text">Hi, I'm Lauren Cary<br />
                  {"<ThoughtfulBuilder />"} </h1>
              </div>
              <p>The first time I was described as a go getter, I was shocked.
                But that was because I was thinking of the type of person who
                has the ambition of gaining influence and prestige. For me,
                my drive comes from curiousity, determination, and the joy of learning. I aim
                to understand, reflect, refine and master.
                  <br /><br />
                I started my career as an actuary. My passion to build tools,
                and automate workflows for myself and teammates made me realize
                that what I really wanted to be doing was developing software.
                Throughout my time as an actuary and data analyst, I used SQL
                and python daily. Knowing how important having a solid conception foundation
                for computer science would be, I enrolled in App Academy.

                  <br /><br />
                Now, I'm so excited to call myself a software engineer. Some of my favorite tools and languages include React, Redux,
                Ruby on Rails, SQL, and Python. I'm currently looking for a job where I can make an impact, continue learning and
                refining my skills, and work alongside passionate and motivated people.

              </p>
            </header>
            <h1 id="projects" class="section-title">Projects</h1>
            <section class="tiles">
              <article class="style1">
                <span class="image">
                  <img src={SlaqueSnap} alt="Slack Clone - Full stack project" />
                </span>
                <div class="tile-text">
                  <h2>Slaque</h2>
                  <div class="content">
                    <p class="tech-list">
                      <strong>React.js | Redux | Ruby on Rails | Web Sockets</strong>
                    </p>
                    <p>A Slack clone where users can launch workspaces,
                      manage channels, direct messages, and workspace profiles.
                      The main feature is chatting, editing and deleting messages
                      in real time with other users.</p>
                    <div class="project-links-container">
                      <a href="https://github.com/laurencary/Slaque" target="_blank" rel="noreferrer"class="icon brands style2 fa-github project-link"><span class="label">GitHub</span></a>
                      <a href="https://slaque-app-dddbd857f989.herokuapp.com/" target="_blank" rel="noreferrer"class="icon brands style2 project-link"><i class="fa-solid fa-up-right-from-square live-link-icon"></i></a>
                    </div>
                  </div>
                </div>
              </article>
              <article class="style2">
                <span class="image">
                  <img src={WeatherSnap} alt="What Weather Where - Vanilla JS" />
                </span>
                <div class="tile-text">
                  <h2>What Weather Where</h2>
                  <div class="content">
                    <p class="tech-list">
                      <strong>JS | Chart.js</strong>
                    </p>
                    <p>A historical weather metrics dashboard using Open-Mateo APIs to
                      fetch weather data for multiple locations in vanilla JavaScript.
                      The dynamic charts were created using Chart.js.
                    </p>
                    <div class="project-links-container">
                      <a href="https://github.com/laurencary/what-weather-where" target="_blank" rel="noreferrer"
                        class="icon brands style2 fa-github project-link"><span class="label">GitHub</span></a>
                      <a href="https://laurencary.github.io/what-weather-where/" target="_blank" rel="noreferrer"class="icon brands style2 project-link"><i
                        class="fa-solid fa-up-right-from-square live-link-icon"></i></a>
                    </div>
                  </div>
                </div>
              </article>
              <article class="style3">
                <span class="image">
                  <img src={RendezView} alt="MERN Stack - Group Project" />
                </span>
                <div class="tile-text">
                  <h2>RendezView</h2>
                  <div class="content">
                    <p class="tech-list">
                      <strong>MongoDB | Express.js | React | Node.js</strong>
                    </p>
                    <p>RendezView is a unique web application designed to streamline event planning amongst friends. Leveraging the power of
                      OpenAI, RendezView generates event ideas, perfect for those who want to socialize but aren't sure what activities are
                      available.</p>
                    <div class="project-links-container">
                      <a href="https://github.com/kennyvungo/smelk" target="_blank" rel="noreferrer"
                        class="icon brands style2 fa-github project-link"><span class="label">GitHub</span></a>
                      <a href="https://smelk.onrender.com/" target="_blank" rel="noreferrer"class="icon brands style2 project-link"><i
                        class="fa-solid fa-up-right-from-square live-link-icon"></i></a>
                    </div>
                  </div>
                </div>
              </article>

            </section>
            <h1 id="skills" class="section-title">Skills</h1>
            <div>
              <i class="skill-icon major-icon devicon-ruby-plain-wordmark colored"></i>
              <i class="skill-icon major-icon devicon-rails-plain-wordmark colored"></i>
              <i class="skill-icon major-icon devicon-javascript-plain colored"></i>
              <i class="skill-icon major-icon devicon-python-plain-wordmark colored"></i>
              <i class="skill-icon major-icon devicon-react-original-wordmark colored"></i>
              <i class="skill-icon major-icon devicon-redux-original colored"></i>
              <i class="skill-icon major-icon devicon-express-original-wordmark"></i>
              <i class="skill-icon major-icon devicon-nodejs-plain-wordmark colored"></i>
              <i class="skill-icon major-icon devicon-postgresql-plain-wordmark colored"></i>
              <i class="skill-icon devicon-sqlite-plain-wordmark colored"></i>
              <i class="skill-icon major-icon devicon-mongodb-plain-wordmark colored"></i>
              <i class="skill-icon major-icon devicon-html5-plain-wordmark colored"></i>
              <i class="skill-icon devicon-css3-plain-wordmark colored"></i>
              <i class="skill-icon major-icon devicon-heroku-plain-wordmark colored"></i>
              <i class="skill-icon major-icon devicon-babel-plain colored colored"></i>
              <i class="skill-icon major-icon devicon-npm-original-wordmark colored"></i>
              <i class="skill-icon major-icon devicon-git-plain-wordmark colored"></i>
              <i class="skill-icon major-icon devicon-github-original-wordmark"></i>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <nav id="menu">
        <div class="inner">
          <h2>Menu</h2>
          <ul>
            {/* <li><a href="index.html">Home</a></li> */}
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#connect">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
