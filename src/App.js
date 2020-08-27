import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Users from './components/Users';
import Contact from './components/Contact';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
    <Navbar />
    
     
     
          <div>
           
            <switch>
            <Route exact   path='/' component={Home} />
            <Route  path='/about' component={About} />
            <Route path='/services' component={Services} />
           <Route path='/users' component={Users} />
            <Route Path='/contact' component={Contact} />

        
            </switch>
            </div>
      
            </Router>  
     
    </div>
  );
}

export default App;
