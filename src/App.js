import {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import config from './config';
import { initializeApp } from 'firebase/app';


import Scratch from './components/Scratch.js';
import HomeDodo from './components/HomeDodo';
import PageNotFound from './components/PageNotFound';
import Collaborators from './components/Collaborators';
// import AllDodos from './components/AllDodos';
// import Reachus from './components/Reachus';

function App() {

 
  useEffect(() => {
    initializeApp(config);
    

  }, []);


  return (
    <div className="App" style = {{backgroundColor:"black"}}>
      <Router>
              <Routes >
                <Route exact path="/" element={<Scratch/>}/>
                <Route exact path="/home" element={<HomeDodo/>}/>
                <Route exact path="/collaborators" element={<Collaborators/>}/>
                {/* <Route exact path="/alldodos" element={<AllDodos/>}/>  
                <Route exact path="/reachus" element={<Reachus/>}/>      */}
                <Route path="*" element={<PageNotFound />} />
              </Routes >


          </Router>

    </div>
  );
}

export default App;
