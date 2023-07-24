import Me from '../images/me.jpg'

const Header = () => {
    return (
        <div class="heading">
            <img src={Me} alt="Lauren Cary" class="headshot" />
            <h1 class="heading-me-text">Hi, I'm Lauren Cary<br />
                {"<ThoughtfulBuilder />"} </h1>
        </div>
    )
}

export default Header