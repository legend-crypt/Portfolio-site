import Hero from "./Hero";
import About from "./About";
import WorkProcess from "./WorkProcess";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import WhatIDo from "./WhatIDo";
import Form from "./Form";
import Footer from "./Footer";
function GradientBackground() {
    return(
        <>
        <main className="main">
            <Hero />
            <About/>
        </main>
        <WorkProcess />
        <Portfolio />
        <Blog />
        <WhatIDo />
      {/* <Form />  */}
      <Footer /> 
        </>

    );
}

export default GradientBackground;