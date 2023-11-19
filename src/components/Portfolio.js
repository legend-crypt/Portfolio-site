import PortfolioPic from '../assets/images/successbuilders.png'
import PortfolioPic_2 from '../assets/images/cleanservice_1.png'
import PortfolioPic_3 from '../assets/images/purplewig.png';
function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <section className="container">
                <div class="portfolio__text">
                    <h3>Portfolio</h3>
                    <p>Explore some of my recent projects that showcase my skills and passion for creating impactful digital experiences.</p>
                </div>
                <div className="portfolio__primary row">
                    <div className='portfolio__primary--card'>
                        <img src={PortfolioPic} alt="pc" />
                        <div className="portfolio__primary--card-secondary">
                            <p>Stack Used: React, Django</p>
                            <h4>SuccessBuilderHub</h4>
                            <p>Worked in a team to Developed an e-learning platform for client. Worked on this project as Backend Developed. </p>
                            <a href='https://successbuilderhub.com/' target='_blank'><button className='about__text--secondary-btn-left'>Chekckout</button></a>
                        </div>
                    </div>

                    <div className='portfolio__primary--card'>
                        <img src={PortfolioPic_2} alt="pc" />
                        <div className="portfolio__primary--card-secondary">
                            <p>Stack: JavaScript, Django</p>
                            <h4>Purple Wig</h4>
                            <p>Working with a team to develop a booking system for client for managing the customer booking for services.</p>
                            <a href='https://github.com/Goldac77/purplewigfix' target='_blank'><button className='about__text--secondary-btn-left'>Chekckout</button></a>
                        </div>
                    </div>

                    <div className='portfolio__primary--card'>
                        <img src={PortfolioPic_3} alt="pc" />
                        <div className="portfolio__primary--card-secondary">
                            <p>Stack: React Native, Django</p>
                            <h4>Cleans</h4>
                            <p>The "Cleaning Services Mobile App" is a ground-breaking project that aims to change the way cleaning services are delivered and experienced.</p>
                            <a href='https://github.com/Group-12-Cleaning-Services/Group-12-Cleaning-Services-repo' target='_blank'><button className='about__text--secondary-btn-left'>Chekckout</button></a>
                        </div>
                    </div>


                </div>

            </section>
            <section className='portfolio__footer'>
                <div className='container'>
                    <div class="portfolio--sm-container">
                        <h4 className='portfolio__footer--heading'>Do you have Project Idea? Let's discuss your project!</h4>
                        <p className='portfolio__footer--paragraph'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        <a href="#"><button className='btn__normal'>Let's Work Togther</button></a>
                    </div>
                </div>
            </section>
        </div>

    );
}
export default Portfolio;