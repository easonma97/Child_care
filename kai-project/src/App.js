import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Form from './pages/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Form />
    </div>
  );
}

export default App;
