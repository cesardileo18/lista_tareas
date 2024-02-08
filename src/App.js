import React from 'react';
import './App.css';
import Home from './componentes/Home';
import { HashRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route 
          path="/"
          exact={true}
          render={() => (
            <>
              <Home/>
            </>
          )}
        />
      </Switch>
      <Switch>
        <Route 
          path="/Home"
          exact={true}
          render={() => (
            <>
              <Home/>
            </>
          )}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
