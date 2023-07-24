const Footer = () => {
    return (
        <footer id="footer">
            <div class="inner">
                {/* <section>
                    <h2>Get in touch</h2>
                    <form method="post" action="#">
                        <div class="fields">
                        <div class="field half">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div class="field half">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div class="field">
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                        </div>
                        </div>
                        <ul class="actions">
                            <li><input type="submit" value="Send" class="primary" /></li>
                        </ul>
                    </form>
                  </section>  */}
                <section id="connect">
                    <h2>Contact</h2>
                    <ul class="icons">
                        <li><a href="https://github.com/laurencary" target="_blank" rel="noreferrer"class="icon brands style2 fa-github"><span class="label">GitHub</span></a></li>
                        <li><a href="https://www.linkedin.com/in/laurengcary/" target="_blank" rel="noreferrer"class="icon brands style2 fa-linkedin"><span class="label">LinkedIn</span></a></li>
                        <li><a href="https://wellfound.com/u/lauren-cary-3" target="_blank" rel="noreferrer"class="icon brands style2 fa-angellist"><span class="label">500px</span></a></li>
                    </ul>
                    <p>
                        Email: armstronglg720@gmail.com<br />
                        Phone: (262) 945-5851</p>
                    <ul class="actions">
                        <li><a href="#" target="_blank" rel="noreferrer"class="button primary">Resume 
                            <i class="fa-solid fa-up-right-from-square live-link-icon"></i>
                            {/* <img class="live-link-icon" src="images/up-right-from-square-solid.svg" alt="Open Live Website" /> */}
                        </a></li>
                    </ul>
                </section>
                <ul class="copyright">
                    <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;