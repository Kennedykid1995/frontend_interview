import React from 'react';
import Home from "./pages/Home"; 
import Post from './pages/Post'; 
import Login from "./pages/Login"; 
import Register from "./pages/Register"; 
import Landing from "./pages/Landing"; 
import axios from 'axios'; 
import {Route, Link, NavLink} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
    <Route 
     exact path="/"
     render={props => <Home {...props} />}
    />
    <Route 
     exact path="/post"
     render={props => <Post {...props} />}
    />
    <Route 
     exact path="/landing"
     render={props => <Landing {...props} />}
    />
    <Route 
     exact path="/login"
     render={props => <Login {...props} />}
    />
    <Route 
     exact path="/register"
     render={props => <Register {...props} />}
    />
    </div>
  );
}

export default App;
