import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, AboutUsPage, ContactPage } from './Pages';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
   <Router>
     <Navbar />
     <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route exact path='/about' component={AboutUsPage}/>
       <Route exact path='/contact' component={ContactPage}/>
       <Route/>
     </Switch>
   </Router>
  );
}

export default App;
