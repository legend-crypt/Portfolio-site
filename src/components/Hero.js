import Man2 from '../assets/images/Man2.png'
import stacks from '../assets/images/stacks.svg'
function Hero() {
    return (
            <div className="hero row container">
                <div className="hero__text">
                    <div class="hero__text--primary">
                        <h1 className="hero__text--heading">Hello, I’m Lord Konadu</h1>
                        <p>A Full-Stack Developer based in Ghana, dedicated to creating immersive and visually appealing web applications through meticulously crafted code and a user-centric design approach.</p>
                        <a href="#" className="btn__normal">Say Hello</a>
                    </div>
                    <div className="hero__text--secondary">
                        <img src={stacks} alt="hero" />
                    </div>
                </div>
                <div className="hero__image hidden">
                    <img src={Man2} alt="hero" />
                </div>
            </div>
    );
}

export default Hero;