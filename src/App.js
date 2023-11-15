import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import GradientBackground from "./components/GradientBackground";
import WorkProcess from "./components/WorkProcess";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import WhatIDo from "./components/WhatIDo";
import Form from "./components/Form";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar showContactButton={true}/>
      <GradientBackground />
      <WorkProcess />
      <Portfolio />
      <Blog />
      <WhatIDo />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
