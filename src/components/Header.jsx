import Me from '../images/me.jpg'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div class="heading">
            <div className='heading-left'>
                <img src={Me} alt="Lauren Cary" class="headshot" />
                <div className='heading-text-container'>
                    <h1 class="heading-me-text">Hi, I'm Lauren Cary<br /></h1>
                    <h1> {"<ThoughtfulBuilder />"} </h1>
                </div>
            </div>
            <div className='heading-right'>
                <NavLink className="nav-link" to="/swe">Software Engineer</NavLink>
                <NavLink className="nav-link" to="/woodworker">Woodworker</NavLink>
            </div>
        </div>
    )
}

export default Header