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
                    <p>Here's how I approach projects, ensuring a thorough and successful outcome.</p>
                </article>
                <article className='work-process__secondary'>
                    <div className="work-process__secondary-col">
                        <div className="work-process__secondary-col--primary">
                            <div>
                                <img className="work-process__icons" src={notes} alt="notes" />
                            </div>
                            <div>
                                <h3>1. Research</h3>
                                <p>Before diving into a project, I conduct in-depth research to understand the industry, target audience, and competitors. This forms the foundation for informed decision-making throughout the process.</p>

                            </div>
                        </div>
                        <div className="work-process__secondary-col--primary">
                            <div>
                            <img className="work-process__icons" src={analyze} alt="analyze" />
                            </div>
                            <div>
                                <h3>2. Analyze</h3>
                                <p>With the gathered information, I analyze and identify key insights. This includes assessing challenges, opportunities, and potential strategies to ensure a well-informed approach in the project's development.</p>

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
                                <p>Using the insights gained, I move on to the design phase. This involves creating wireframes, prototypes, and visual designs that align with the project goals. The design stage ensures a user-friendly and visually appealing final product.</p>

                            </div>
                        </div>
                        <div className="work-process__secondary-col--primary">
                            <div>
                            <img className="work-process__icons" src={launch} alt="launch" />
                            </div>
                            <div>
                                <h3>4. Launch</h3>
                                <p>After thorough testing and client feedback, it's time to launch the project. I ensure a smooth transition from development to deployment, making the project live and ready for the intended audience.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
    
}

export default WorkProcess;