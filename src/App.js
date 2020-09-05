import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';


function App() {
  return (
    <div className="body">
      <Router>

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/:id" component={PostDetail} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
