import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home/>
      <Switch>
        <Route>

        </Route>

      </Switch>
    </Router>
  
  );
}

export default App;
