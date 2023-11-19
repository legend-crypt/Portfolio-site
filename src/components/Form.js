import location from '../assets/images/akar-icons_location.svg';
import mailicon from '../assets/images/mail.svg';
import phoneicon from '../assets/images/phone.svg';
function Form () {
    return (
        <section className="footer" id="form">
            <div className="container">
                <section className="footer__container--small row">
                    <div className="footer__col--left">
                        <h3>Let's Talk</h3>
                        <p>Have a project you'd like to discuss?</p>
                        <div className="footer__col--card row">
                            <div className="footer__col--card--left">
                                <img src={location} alt="location" />
                            </div>
                            <div className="footer__col--card--right">
                                <h4>Address:</h4>
                                <p>Atomic Accra GE-224-8594</p>
                            </div>
                        </div>
                        <div className="footer__col--card row">
                            <div className="footer__col--card--left">
                                <img src={mailicon} alt="mail" />
                            </div>
                            <div className="footer__col--card--right">
                                <p>Mail:</p>
                                <p>konadulordkweku@gmail.com</p>
                            </div>

                        </div>
                        <div className="footer__col--card row">
                            <div className="footer__col--card--left">
                                <img src={phoneicon} alt="phone" />
                            </div>
                            <div className="footer__col--card--right">
                                <h4>Phone: </h4>
                                <p> +233-502-276-474</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__col--right">
                        <form className='form'>
                            <input type="text" placeholder="Name*" />
                            <input type="email*" placeholder="Email*" />
                            <input type="text" placeholder="Subject*" />
                            <textarea placeholder="Message*"></textarea>
                            <button className="btn__normal">Send Message</button>
                        </form>
                    </div>
                </section>
            </div>
        </section>

    );
}

export default Form;