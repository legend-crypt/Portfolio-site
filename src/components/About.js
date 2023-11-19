import manCrop from "../assets/images/Man2_crop.png";
import githubIcon from "../assets/images/teenyicons_github-solid.svg";
import linkedinIcon from "../assets/images/devicon-plain_linkedin.svg";
import twitterIcon from "../assets/images/uim_twitter.svg";
import { Link } from "react-router-dom";
import resume from '../assets/files/my_resume.pdf';
function About() {
    return (
        <section className="row about container" id="about">
            <div className="about__img">
                <div className="avator__crop">
                    <img src={manCrop} alt="Man Avator" />
                </div>
                <div className="row icons">
                    <a href="https://github.com/legend-crypt" target="_blank"><img src={githubIcon} alt="gitHub" /></a>
                    <a href="https://www.linkedin.com/in/konadu-lord-80100521a/" target="_blank"><img src={linkedinIcon} alt="linkedIn" /></a>
                    <a href="https://twitter.com/konadulord" target="_blank"><img src={twitterIcon} alt="twitter" /></a>
                </div>
            </div>
            <div className="about__text">
                <article className="about__text--primary">
                    <h2>I am a Professional FullStack Developer</h2>
                    <p>I'm a Full-Stack Developer, dedicated to creating immersive and visually appealing web applications through meticulously crafted code and a user-centric design approach</p>
                    <p>
                    My skills and experience in UI/UX design and development allow me to bring a unique blend of creativity and technical expertise to every project I undertake. I'm passionate about building solutions that not only look great but also provide a seamless user experience
                    </p>
                </article>
                <div className="about__text--secondary">
                    <Link to="/form"><button className="btn__normal about__text--secondary-btn">My Projects</button></Link>
                    <a href={resume} download="resume.pdf"><button className=" btn__normal about__text--secondary-btn-left">Download Resume</button></a>
                </div>
            </div>
        </section>
    )
}

export default About;