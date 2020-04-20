import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authAPI } from './features/auth/api';

const App = () => {
  const test = useSelector(({ test }) => test);
  const auth = async () => {
    await authAPI.authenticateUser('document', '123');
  };
  const env = process.env.NODE_ENV;
  return (
    <BrowserRouter>
      {env === 'development' && (
        <button
          style={{ position: 'absolute', right: 10, top: 10 }}
          onClick={auth}
        >
          auth
        </button>
      )}
      <div>project: {test}</div>
      <Switch>
        <Route path="/one" component={() => 'one'} />
        <Route path="/two" component={() => 'two'} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
