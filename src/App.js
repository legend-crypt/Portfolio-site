import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
