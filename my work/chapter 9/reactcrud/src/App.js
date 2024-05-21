import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';
import UserForm from './UserForm';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {  

  render() {
    return (
      <div>
          <BrowserRouter>
          <div>                            
            <Switch>   
              <Route path="/edit/:id" component={UserForm} />               
              <Route path="/add" component={UserForm} />                       
              <Route exact path="/" component={User} />             
              <Route path="/*" component={NotFound} />                       
            </Switch>   
          </div>  
        </BrowserRouter>               
      </div>
    );
  }
}

export default App;

class NotFound extends Component {
  render(){
    return <div>Not Found</div>
  }
}