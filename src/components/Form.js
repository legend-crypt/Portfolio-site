import location from '../assets/images/akar-icons_location.svg';
import mailicon from '../assets/images/mail.svg';
import phoneicon from '../assets/images/phone.svg';
function Form () {
    return (
        <footer className="footer">
            <div className="container row">
                <div className="footer__col--right">
                    <h3>Let's Talk</h3>
                    <p>Have a project you'd like to discuss?</p>
                    <div className="footer__col--card">
                        <div className="footer__col--card--left">
                            <img src={location} alt="location" />
                        </div>
                        <div className="footer__col--card--right">
                            <p>1234 Street Name, City Name, United States</p>
                        </div>
                    </div>
                    <div className="footer__col--card">
                        <div className="footer__col--card--left">
                            <img src={mailicon} alt="location" />
                        </div>
                        <div className="footer__col--card--right">
                            <p>1234 Street Name, City Name, United States</p>
                        </div>
                    </div>
                    <div className="footer__col--card">
                        <div className="footer__col--card--left">
                            <img src={phoneicon} alt="location" />
                        </div>
                        <div className="footer__col--card--right">
                            <p>1234 Street Name, City Name, United States</p>
                        </div>
                    </div>

                </div>
                <div className="footer__col--left">
                    <form>
                        <input type="text" placeholder="Name*" />
                        <input type="email*" placeholder="Email" />
                        <input type="text" placeholder="Subject*" />
                        <textarea placeholder="Message*"></textarea>
                        <button className="btn__normal">Send Message</button>
                    </form>
                </div>
            </div>

        </footer>

    );
}

export default Form;