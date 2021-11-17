import Facebook from "assets/icons/Facebook.png";
import Twitter from "assets/icons/Twitter.png";
import YouTube from "assets/icons/YouTube.png";
import Instagram from "assets/icons/Instagram.png";

export default function Footer(){
    return(
        <div id="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" ><img src={Facebook} alt="letter f in a square"/></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" ><img src={Instagram} alt="a retro camera illustration"/></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer" ><img src={Twitter} alt="a bird shape illustration"/></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" ><img src={YouTube} alt="triangle in a square"/></a>
                </div>
                <div className="contact-links">
                    <a href="https://www.google.com" target="_blank" rel="noreferrer" >Audio and Subtitles</a>
                    <a href="https://www.google.com" target="_blank" rel="noreferrer" >Audio Description</a>
                    <a href="https://www.google.com" target="_blank" rel="noreferrer" >Help Center</a>
                    <a href="https://www.amazon.com" target="_blank" rel="noreferrer" >Gift Cards</a>
                    <a href="https://www.google.com" target="_blank" rel="noreferrer" >Corporate Information</a>
                    <a href="mailto:netelix@info.com" target="_blank" rel="noreferrer" >Contact us</a>
                    <a href="https://www.linkedin.com/jobs/" target="_blank" rel="noreferrer" >Jobs</a>
                    <a href="mailto:netelix@media.com" target="_blank" rel="noreferrer" >Media Center</a>
                </div>
                    <small>
                        © 2021 Netelix
                    </small>
            </div>
        </div>
    )
}