import React from 'react';
import { authAPI } from './features/auth/api';

function App() {
  // React.useEffect(() => {
  //   authAPI.authenticateUser('document', '123');
  // }, []);
  const redirect = () => window.location.replace('/client');
  return <button onClick={redirect}>hello</button>;
}

export default App;
