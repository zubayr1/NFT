import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Scratch from './components/Scratch.js';
import HomeDodo from './components/HomeDodo';
import AllDodos from './components/AllDodos';

function App() {
  return (
    <div className="App" style = {{backgroundColor:"black"}}>
      <Router>
              <Routes >
                <Route exact path="/" element={<Scratch/>}/>
                <Route exact path="/home" element={<HomeDodo/>}/>
                <Route exact path="/alldodos" element={<AllDodos/>}/>      
                
              </Routes >


          </Router>

    </div>
  );
}

export default App;
