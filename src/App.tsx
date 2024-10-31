import { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Home from './pages/Home';
import TutorialDetail from './pages/TutorialDetail';
import './styles/main.scss';
import CategoryDetail from './pages/CategoryDetail';

const App: Component = () => {
  return (
    <Router>
      <Route path="/bookbinding" component={Home} />
      <Route path="/category/:slug" component={CategoryDetail} />
      <Route path="/:slug" component={TutorialDetail} />
    </Router>
  );
};

export default App;