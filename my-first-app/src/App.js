import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import HeaderFooter from './components/HeaderFooter'
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <HeaderFooter>
      <Home />
      </HeaderFooter>
    </div>
  );
}

export default App;
