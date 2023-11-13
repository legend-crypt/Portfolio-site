import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import GradientBackground from "./components/GradientBackground";
import WorkProcess from "./components/WorkProcess";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import WhatIDo from "./components/WhatIDo";
import Form from "./components/Form";
function App() {
  return (
    <div>
      <Navbar />
      <GradientBackground />
      <WorkProcess />
      <Portfolio />
      <Blog />
      <WhatIDo />
      <Form />
    </div>
  );
}

export default App;
