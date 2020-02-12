import React from 'react';
import Home from "./pages/Home"; 
import Post from './pages/Post'; 
import Login from "./pages/Login"; 
import Register from "./pages/Register"; 
import Landing from "./pages/Landing"; 
import axios from 'axios'; 
import {Route} from 'react-router-dom'; 
import {useFetch} from "./Hooks/fetch"; 

const url = "http://localhost:4000/notes"

function App() {
  const [data, loading] = useFetch(url); 
  console.log(data); 
  return (
    <div className="App">
    <Route 
     exact path="/"
     render={props => <Home {...props} notes={data} />}
    />
    <Route 
     path="/post/:id"
     render={props => <Post {...props} note={data} />}
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
