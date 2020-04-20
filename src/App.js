import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const test = useSelector(({ test }) => test);
  return (
    <BrowserRouter>
      <div>project: {test}</div>
      <Switch>
        <Route path="/one" component={() => 'one'} />
        <Route path="/two" component={() => 'two'} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
