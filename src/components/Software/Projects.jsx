import SlaqueSnap from '../../images/slaque.png'
import WeatherSnap from '../../images/what-weather-where.png'
import RendezView from '../../images/rendez-view.png'

const Projects = () => {
    return (
        <>
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
                                <a href="https://github.com/laurencary/Slaque" target="_blank" rel="noreferrer" class="icon brands style2 fa-github project-link"><span class="label">GitHub</span></a>
                                <a href="https://slaque-app-dddbd857f989.herokuapp.com/" target="_blank" rel="noreferrer" class="icon brands style2 project-link"><i class="fa-solid fa-up-right-from-square live-link-icon"></i></a>
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
                                <a href="https://laurencary.github.io/what-weather-where/" target="_blank" rel="noreferrer" class="icon brands style2 project-link"><i
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
                                <a href="https://smelk.onrender.com/" target="_blank" rel="noreferrer" class="icon brands style2 project-link"><i
                                    class="fa-solid fa-up-right-from-square live-link-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </article>

            </section>
        </>
    )
}

export default Projects;