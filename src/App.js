import './App.css';
import AboutUs from './Components/AboutUs';
import Clients from './Components/Clients';
import Footer from './Components/Footer';
import HireUs from './Components/HireUs';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import WhyChooseUs from './Components/WhyChooseUs';
import Team from './Components/team';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <HireUs/>
      <AboutUs/>
      <WhyChooseUs/>
      <Clients/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
