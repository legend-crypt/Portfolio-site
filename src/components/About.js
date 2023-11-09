import manCrop from "../assets/images/Man2_crop.png";
import githubIcon from "../assets/images/teenyicons_github-solid.svg";
import linkedinIcon from "../assets/images/devicon-plain_linkedin.svg";
import twitterIcon from "../assets/images/uim_twitter.svg";
function About() {
    return (
        <section className="row about">
            <div className="about__img">
                <span>
                    <img src={manCrop} alt="Man Avator" />
                </span>

                <span className="row">
                    <img src={githubIcon} alt="gitHub" />
                    <img src={linkedinIcon} alt="linkedIn" />
                    <img src={twitterIcon} alt="twitter" />
                </span>
            </div>
            <div className="about__text">
                <div className="about__text--primary">
                    <h2>I am a Professional FullStack Developer</h2>
                    <p>I'm a Full-Stack Developer, dedicated to creating immersive and visually appealing web applications through meticulously crafted code and a user-centric design approach</p>
                    <p>
                    My skills and experience in UI/UX design and development allow me to bring a unique blend of creativity and technical expertise to every project I undertake. I'm passionate about building solutions that not only look great but also provide a seamless user experience
                    </p>
                </div>
                <div className="about__text--secondary">
                    <a href="#"><button className="btn__normal about__text--secondary-btn">My Projects</button></a>
                    <a href="#"><button className=" btn__normal about__text--secondary-btn-left">Download Resume</button></a>
                </div>
            </div>
        </section>
    )
}

export default About;