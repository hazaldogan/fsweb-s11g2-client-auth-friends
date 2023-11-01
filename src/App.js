import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import Friend from "./components/Friend";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className=" content">
        <Switch>
          <PrivateRoute path="/friends/add/">
            <AddFriend />
          </PrivateRoute>
          <PrivateRoute path="/friends/:friendID">
            <Friend />
          </PrivateRoute>
          <PrivateRoute path="/friends/">
            <FriendsList />
          </PrivateRoute>
          <Route path="/logout/">
            <div>Logout</div>
          </Route>
          <Route path="/login/">
            <Login />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
