import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authAPI } from './features/auth/api';
import { getActiveUser } from './features/header/api';

const App = () => {
  const test = useSelector(({ test }) => test);
  const auth = async () => {
    await authAPI.authenticateUser('document', '123');
  };
  const [userData, setUserData] = React.useState({
    id: '',
    username: ''
  });
  const getUser = async () => {
    const user = await getActiveUser();
    if (!user.error) {
      const { id, username } = user;
      setUserData({ id, username });
    }
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
      <button onClick={getUser}>get user data</button>
      <div>project: {test}</div>
      <div>{userData.id}</div>
      <div>{userData.username}</div>
      <Switch>
        <Route path="/one" component={() => 'one'} />
        <Route path="/two" component={() => 'two'} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
