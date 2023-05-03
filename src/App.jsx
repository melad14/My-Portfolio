import './App.css';
import Banner from './Components/Banner/Banner.jsx';
import { Contact } from './Components/Contact/Contact.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects.jsx';
import Skills from './Components/Skills/Skills.jsx';

function App() {

  return <>
 <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
    </>
}

export default App;
