import PortfolioPic from '../assets/images/unsplash_2.png';
import django from '../assets/images/django.jpg';
import twoPointers from '../assets/images/two-pointers.jpg';
import linkedList from '../assets/images/linkedList.jpg';

function Blog() {
    return(
    <div className="blog" id="blog">
                <div className="container">
                    <div className="portfolio__text">
                        <h3>Blog</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>
                    <div className="portfolio__primary row">
                        <div className='portfolio__primary--card'>
                            <img src={django} alt="pc" />
                            <div className="portfolio__primary--card-secondary">
                                <p>Django</p>
                                <h4>Slug</h4>
                                <p> In this blog I talked about slug, how it's in handy when used in models.Slug is a wonderful field </p>
                                <a href='https://lordkonadu.medium.com/why-using-slugs-instead-of-ids-is-beneficial-in-web-development-explained-with-code-snippets-8210aa8da903' target='_blank'><button className='about__text--secondary-btn-left'>Chekckout</button></a>
                            </div>
                        </div>
                        <div className='portfolio__primary--card'>
                            <img src={twoPointers} alt="DSA" />
                            <div className="portfolio__primary--card-secondary">
                                <p>Data Structures & Algorithm</p>
                                <h4>Two Pointers</h4>
                                <p>In this blog I talked two pointers algorithmric mental model. Two pointers makes solving varieties problem easy</p>
                                <a href='https://lordkonadu.medium.com/mastering-the-two-pointers-technique-an-in-depth-guide-3c2167584ccc' target='_blank'><button className='about__text--secondary-btn-left'>Chekckout</button></a>
                            </div>
                        </div>
                        <div className='portfolio__primary--card'>
                            <img src={linkedList} alt="LinkedList" />
                            <div className="portfolio__primary--card-secondary">
                                <p>Data Structures & Algorithm</p>
                                <h4>Dummy Heads</h4>
                                <p>This article is about the important of dummy heads and how it can be used to solved a Linked List problem and care off edge cases.</p>
                                <a href='https://lordkonadu.medium.com/unveiling-the-magic-of-dummy-heads-in-linked-lists-a-deep-dive-31462f9d4669' target='_blank'><button className='about__text--secondary-btn-left'>Chekckout</button></a>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    );
}
export default Blog;