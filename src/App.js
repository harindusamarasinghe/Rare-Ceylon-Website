import './App.css';
import AboutUs from './Components/AboutUs';
import HireUs from './Components/HireUs';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <HireUs/>
      <AboutUs/>
    </div>
  );
}

export default App;
