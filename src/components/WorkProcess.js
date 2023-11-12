import notes from '../assets/images/notes.svg';
import analyze from '../assets/images/analyze.svg';
import pen from '../assets/images/pen.svg';
import launch from '../assets/images/analyze.svg';


function WorkProcess() {
    return (
        <section className="work-process">
            <div className="container row">
                <article className='work-process__primary'>
                    <h3>Work Process</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </article>
                <article className='work-process__secondary'>
                    <div className="work-process__secondary-col">
                        <div className="work-process__secondary-col--primary">
                            <div>
                                <img className="work-process__icons" src={notes} alt="notes" />
                            </div>
                            <div>
                                <h3>1. Research</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            </div>
                        </div>
                        <div className="work-process__secondary-col--primary">
                            <div>
                            <img className="work-process__icons" src={analyze} alt="analyze" />
                            </div>
                            <div>
                                <h3>2. Analyze</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="work-process__secondary-col">
                        <div className="work-process__secondary-col--primary">
                            <div>
                            <img className="work-process__icons" src={pen} alt="pen" />
                            </div>
                            <div>
                                <h3>3. Design</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            </div>
                        </div>
                        <div className="work-process__secondary-col--primary">
                            <div>
                            <img className="work-process__icons" src={launch} alt="launch" />
                            </div>
                            <div>
                                <h3>4. Launch</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
    
}

export default WorkProcess;