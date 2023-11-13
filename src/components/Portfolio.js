import PortfolioPic from '../assets/images/unsplash_1.png'
import PortfolioPic_2 from '../assets/images/unsplash_2.png'
import Portfolio_3 from '../assets/images/unsplash_3.png';
function Portfolio() {
    return (
        <div className="portfolio">
            <section className="container">
                <div class="portfolio__text">
                    <h3>Portfolio</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div className="portfolio__primary row">
                    <div className='portfolio__primary--card'>
                        <img src={PortfolioPic} alt="pc" />
                        <div className="portfolio__primary--card-secondary">
                            <p>Backend</p>
                            <h4>SuccessBuilderHub</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            <a href='#'><button className='about__text--secondary-btn-left'>Chekckout</button></a>
                        </div>
                    </div>

                    <div className='portfolio__primary--card'>
                        <img src={PortfolioPic} alt="pc" />
                        <div className="portfolio__primary--card-secondary">
                            <p>Backend</p>
                            <h4>SuccessBuilderHub</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            <a href='#'><button className='about__text--secondary-btn-left'>Chekckout</button></a>
                        </div>
                    </div>

                    <div className='portfolio__primary--card'>
                        <img src={PortfolioPic} alt="pc" />
                        <div className="portfolio__primary--card-secondary">
                            <p>Backend</p>
                            <h4>SuccessBuilderHub</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            <a href='#'><button className='about__text--secondary-btn-left'>Chekckout</button></a>
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