import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import GradientBackground from "./components/GradientBackground";
import WorkProcess from "./components/WorkProcess";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import WhatIDo from "./components/WhatIDo";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar showContactButton={true}/>
      {/* <WorkProcess />
      <Portfolio />
      <Blog />
      <WhatIDo />
      <Form />
      <Footer /> */}

        <Routes>
          <Route path="/" element={<GradientBackground />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-process" element={<WorkProcess />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/what-i-do" element={<WhatIDo />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        {/* <Form />
        <Footer /> */}
    </div>
  );
}

export default App;
