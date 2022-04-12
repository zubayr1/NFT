import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Scratch from './components/Scratch.js';
import HomeDodo from './components/HomeDodo';
// import AllDodos from './components/AllDodos';
// import Reachus from './components/Reachus';

function App() {
  return (
    <div className="App" style = {{backgroundColor:"black"}}>
      <Router>
              <Routes >
                <Route exact path="/" element={<Scratch/>}/>
                <Route exact path="/home" element={<HomeDodo/>}/>
                {/* <Route exact path="/alldodos" element={<AllDodos/>}/>  
                <Route exact path="/reachus" element={<Reachus/>}/>      */}
                
              </Routes >


          </Router>

    </div>
  );
}

export default App;
