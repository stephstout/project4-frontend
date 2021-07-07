import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav'
import Blogs from './components/Blogs'
import CreatePost from './components/CreatePost';
import BlogPost from './components/BlogPost'
import SignUp from './components/SignUp'


function App() {


  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route exact path="/" component={Blogs} />
        <Route exact path="/signup" component={SignUp} />
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
