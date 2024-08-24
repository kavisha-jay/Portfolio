import Nav from "./components/Nav/Nav";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skill/Skills"
import Works from "./components/Works/Works";
import Contact from "./components/ContactForm/Contact";
// import Footer from "./components/Footer/Footer";
import ParticlesComponent from "./components/Intro/Particlescomponent";
import './App.css';

function App() {
  return (
    <>
    <ParticlesComponent id="particles"/>
      <Nav />
      
      <div className="contain">
      
      <div className='Container'>
       
      </div>
      </div>
      <Intro/>
      <Skills/>
      <Works />
      <Contact/>
      
      {/* <Footer/> */}
    </>
  );
}

export default App;
