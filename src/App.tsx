import React, { useState, useMemo } from "react";

import Login from "./pages/Login";
import { Switch, Route, Link } from "react-router-dom";
import { UserContext } from "./utils/UserContext";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <Switch>
          <Route exact path="/">
            Welcome to onboarding...........
            <ul>
              <li>
                <Link to="/login">Sign in</Link>
              </li>
              <li>
                <Link to="/app">Go to dashboard</Link>
              </li>
            </ul>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/app">
            <Dashboard />
          </Route> */}
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
