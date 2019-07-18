import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import Property from "./components/ViewProperty";
import Add from "./components/CreateProperty";
import EditProperty from "./components/EditProperty";
import "antd/dist/antd.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/property' component={Property} />
          <Route exact path='/add' component={Add} />
          <Route exact path='/edit' component={EditProperty} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
