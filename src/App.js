import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Calculadora from './components/Calculadora';
import Analise from './components/Analise';
import Fibonacci from './components/Fibonacci';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/analise" element={<Analise />} />
          <Route path="/fibonacci" element={<Fibonacci />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
