import React, { useState, useMemo } from 'react';

import Login from './pages/Login';
import { Switch, Route, Link } from 'react-router-dom';
import { UserContext } from './utils/UserContext';
import Register from './pages/Register';
import { BrowserRouter as Router } from 'react-router-dom';

// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';

// const GET_LOGIN = gql`
//   query Login {
//     getLogin(username: "Andrew") {
//       username
//       password
//     }
//   }
// `;

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  // const { loading, data } = useQuery(GET_LOGIN);
  // console.log(loading);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={value}>
          <Switch>
            <Route exact path="/">
              Welcome to onboarding...........
              <ul>
                <li>
                  <Link to="/login">Sign in</Link>
                </li>
                <li>
                  <Link to="/register">Create an account</Link>
                </li>
                <li>
                  <Link to="/app">Go to dashboard</Link>
                </li>
              </ul>
              {/* {loading ? <p>Loading...</p> : data && JSON.stringify(data)} */}
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {/* <Route path="/app">
            <Dashboard />
          </Route> */}
          </Switch>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
