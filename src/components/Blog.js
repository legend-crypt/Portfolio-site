import PortfolioPic from '../assets/images/unsplash_2.png';


function Blog() {
    return(
    <div className="blog">
                <div className="container">
                    <div className="portfolio__text">
                        <h3>Blog</h3>
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
                </div>
    </div>
    );
}
export default Blog;