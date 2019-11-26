
import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import Home from './Home';
import CheckYourHamster from './CheckYourHamster';
import Grounding from './Grounding'; 
import HamsterTrends from './HamsterTrends'; 
import Breathing from './Breathing';
import {Navbar} from 'react-bootstrap'; 


function App() {
   return (
     < HashRouter >
       <div className="App">
         <h1> Welcome to my Studio Ghibli fan site!</h1>
         <Navbar>
         <Route exact path="/" component={Home} />
         <Route path="/Check Your Hamster" component={CheckYourHamster} />
         <Route path="/Grounding" component={Grounding} />
         <Route path="/Breathing" component={Breathing} />
         <Route path="/Hamster Trends" component={HamsterTrends} />
         </Navbar>
       </div>
     </HashRouter >
   );
 };
 
 export default App;