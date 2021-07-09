import './App.css';
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav'
import Blogs from './components/Blogs'
import CreatePost from './components/CreatePost';
import BlogPost from './components/BlogPost'
import SignUp from './components/SignUp'
import Login from './components/Login'
import EditPost from './components/EditPost';


function App() {
  const [user, setUser] = useState()


  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route exact path="/" component={Blogs} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" render={() => <Login setUser={setUser}/>} />
        <Route 
          path="/editpost/:id" 
          render={(routerProps) => <EditPost match={routerProps.match}/>}  
        />
        <Route 
          path="/blog/:id" 
          render={(routerProps) => <BlogPost match={routerProps.match}/>}
          />
        <Route exact path="/createpost" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
