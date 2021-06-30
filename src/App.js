import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AboutUsPage, ContactPage } from './Pages';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/' component={AboutUsPage}/>
       <Route exact path='/contact' component={ContactPage}/>
       <Route/>
     </Switch>
   </Router>
  );
}

export default App;
