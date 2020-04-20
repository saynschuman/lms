import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>project</div>
      <Switch>
        <Route path="/one" component={() => 'one'} />
        <Route path="/two" component={() => 'two'} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
