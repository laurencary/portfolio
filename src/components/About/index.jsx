import Headshot from '../../images/headshot.jpeg'
import './About.css'

const About = () => {
    return(
        <section>
            <img src={Headshot} alt="Lauren Cary" className='headshot'/>
            Hi, I'm Lauren
        </section>    
    )
}

export default About