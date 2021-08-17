import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailNews from './pages/DetailNews';
import ListNews from './pages/ListNews';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/article/:id" component={DetailNews} />
        <Route path="/" component={ListNews} />
      </Switch>
    </Router>
  );
}

export default App;
