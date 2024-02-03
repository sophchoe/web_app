// client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* Add more routes as needed */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
