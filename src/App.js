import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React, { Component } from 'react';        
import Farmdetails from './components/Farmdetails';
import Basicdetails from './components/Basicdetails';
import Ownerdetails from './components/Ownerdetails';
import Mapselect from './components/Mapselect';
import Farming from './components/Farming';
class App extends Component {
  
  render(){
      
        return(
                <Router>
    <div className="App">
      
            <Switch>
              <Route exact path='/' component={Basicdetails}></Route>
                <Route exact path='/Farmdetails' component={Farmdetails}></Route>
                <Route exact path='/Ownerdetails' component={Ownerdetails}></Route>
                <Route exact path='/Mapselect' component={Mapselect}></Route>
                <Route exact path='/Farming' component={Farming}></Route>
            </Switch>
      </div>
</Router>

  );
}
}
export default App;


           
